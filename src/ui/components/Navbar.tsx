import { AppBar, Box, Toolbar, IconButton, Typography, Badge } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { UIContext } from '../../context/ui'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/shopping-cart'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const { openSideMenu, openRightDrawer } = useContext(UIContext)
    const { products } = useContext(ShoppingCartContext)

    return (
        <Box>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton
                        edge="start"
                        color="secondary"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={openSideMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Link to="/">
                        <Typography variant="h5" fontWeight={600} color="#856C4D" component="div">
                            Ixaya
                        </Typography>
                    </Link>
                    <Typography ml={1} variant="body1" fontWeight={600} color="#856C4D" component="div">
                        Shop
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <IconButton
                        size="large"
                        aria-label="Shopping Cart"
                        onClick={openRightDrawer}
                        color="inherit"
                    >
                        <Badge badgeContent={products.reduce((acc, product) => acc + product.quantity, 0)} color="error">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>

        </Box>
    )
}
