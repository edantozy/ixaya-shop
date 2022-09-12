import { Box, Divider, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import InventoryIcon from '@mui/icons-material/Inventory'
import ReceiptIcon from '@mui/icons-material/Receipt'
import HomeIcon from '@mui/icons-material/Home'
import { NavLink } from 'react-router-dom'
import { useContext } from "react"
import { UIContext } from "../../context/ui"

export const Sidebar = () => {
    const { sideMenuOpen, closeSideMenu } = useContext(UIContext)

    return (
        <Drawer
            anchor="left"
            open={sideMenuOpen}
            onClose={closeSideMenu}
        >
            <Box sx={{ minWidth: '250px' }}>
                <List>
                    <NavLink to="/">
                        <ListItemButton onClick={closeSideMenu}>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Inicio" />
                        </ListItemButton>
                    </NavLink>
                </List>
                <Divider />
                <List>
                    <NavLink to="/products">
                        <ListItemButton onClick={closeSideMenu}>
                            <ListItemIcon>
                                <InventoryIcon />
                            </ListItemIcon>
                            <ListItemText color="primary" primary="Productos" />
                        </ListItemButton>
                    </NavLink>
                    <NavLink to="/orders">
                        <ListItemButton onClick={closeSideMenu}>
                            <ListItemIcon>
                                <ReceiptIcon />
                            </ListItemIcon>
                            <ListItemText primary="Ordenes" />
                        </ListItemButton>
                    </NavLink>
                </List>
            </Box>

        </Drawer>
    )
}
