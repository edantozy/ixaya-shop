import { useContext } from 'react'
import { Box, Container } from '@mui/system'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { useSnackbar } from 'notistack'
import { UIContext } from '../../context/ui'
import { numberToCurrency } from '../../helpers'
import { BottomDrawer } from '../../ui/components'
import { AddToCart } from '../../ui/components/AddToCart'
import { ShoppingCartContext } from '../../context/shopping-cart'

export const ProductBottomDrawer = () => {
    const { productToAdd, closeBottomDrawer } = useContext(UIContext)
    const { addProduct } = useContext(ShoppingCartContext)
    const { enqueueSnackbar } = useSnackbar()

    const handleAddProduct = (quantity: number) => {
        addProduct(productToAdd.id, productToAdd, quantity)
        enqueueSnackbar(`${productToAdd.title} agregado al carrito`, { variant: 'success' })
        closeBottomDrawer()
    }

    return (
        <BottomDrawer>
            {productToAdd && (
                <Container maxWidth="md">
                    <Typography m={3} variant="h3">{productToAdd.title}</Typography>
                    <Divider />
                    <CardMedia
                        component="img"
                        sx={{ maxWidth: '300px', margin: '2rem auto' }}
                        image={productToAdd.image_url}
                        alt=""
                    />
                    <Typography whiteSpace="pre-line">{productToAdd.description}</Typography>
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" alignContent="center">
                        <Typography variant="h4">{numberToCurrency(productToAdd.price - productToAdd.discount)}</Typography>
                        <Typography variant="h5" sx={{ textDecoration: 'line-through' }} color="secondary.contrastText">{numberToCurrency(productToAdd.price)}</Typography>
                    </Box>
                    <AddToCart onAdd={handleAddProduct} priceDiscounted={productToAdd.price - productToAdd.discount} />
                    <Box padding={3}>
                        <Button variant="contained" color="error" disableElevation onClick={closeBottomDrawer}>
                            Cancelar
                        </Button>
                    </Box>
                </Container>
            )}
        </BottomDrawer>
    )
}
