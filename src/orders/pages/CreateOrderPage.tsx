import { useContext } from 'react'
import { Box, Button, Grid, Typography } from "@mui/material"
import { ShoppingCartContext } from "../../context/shopping-cart"
import LocalMallIcon from '@mui/icons-material/LocalMall'
import { useNavigate } from 'react-router-dom'
import { MainLayout } from "../../layouts"
import { createOrder, numberToCurrency } from '../../helpers'
import { NewOrderForm, OrderProductCard } from '../components'

export const CreateOrderPage = () => {
    const { products, clearShoppingCart } = useContext(ShoppingCartContext)
    const navigate = useNavigate()

    const onSuccess = () => {
        clearShoppingCart()
        navigate('/orderSuccess')
    }

    return (
        <MainLayout>
            <Typography variant="h1">Crear Orden</Typography>
            {products.length > 0 ? (
                <>
                    <Typography variant="h3">Productos</Typography>
                    <Grid container spacing={2}>
                        {products.map(({ id, product, quantity }) => (
                            <OrderProductCard key={id} id={id} product={product} quantity={quantity} />
                        ))}
                    </Grid>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" alignContent="center">
                        <Typography variant="h4" p={2}>Total: {numberToCurrency(products.reduce((acc, { product, quantity }) => acc + ((product.price - product.discount) * quantity), 0))}</Typography>
                    </Box>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" alignContent="center">
                        <Typography variant="h5" p={2}>Estás ahorrando: {numberToCurrency(products.reduce((acc, { product, quantity }) => acc + (product.discount * quantity), 0))}</Typography>
                    </Box>
                    <Typography variant="h3">Dirección de envío</Typography>
                    <NewOrderForm onSubmit={(data: any) => createOrder(data, products, onSuccess)} />
                </>
            ) : (
                <>
                    <Typography variant="h4">Añade productos a tu carrito</Typography>
                    <Box display="flex" justifyContent="center" sx={{ margin: 2 }}>
                        <Button onClick={() => navigate('/products')} variant="contained" color="info" startIcon={<LocalMallIcon />}>
                            Ir de compras
                        </Button>
                    </Box>
                </>
            )}
        </MainLayout>
    )
}
