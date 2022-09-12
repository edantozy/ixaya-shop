import { Box, Button, Typography } from "@mui/material"
import LocalMallIcon from '@mui/icons-material/LocalMall'
import { MainLayout } from "../../layouts"
import { useNavigate } from "react-router-dom"

export const OrderSuccessPage = () => {
    const navigate = useNavigate()

    return (
        <MainLayout>
            <Box width="100%" display="flex" sx={{ margin: 3 }}>
                <Typography margin="auto" variant="h3">Tu orden ha sido creada correctamente</Typography>
            </Box>
            <Box display="flex" justifyContent="center" sx={{ margin: 2 }}>
                <Button onClick={() => navigate('/products')} variant="contained" color="info" startIcon={<LocalMallIcon />}>
                    Seguir comprando
                </Button>
            </Box>
        </MainLayout>
    )
}
