import { useContext } from 'react'
import { Container } from '@mui/system'
import { Box, Button, Card, CardContent, CardHeader, CardMedia, IconButton } from '@mui/material'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { RightDrawer } from '../../ui/components'
import { ShoppingCartContext } from '../../context/shopping-cart'
import { numberToCurrency } from '../../helpers'
import { useNavigate } from 'react-router-dom'
import { UIContext } from '../../context/ui'

export const ShoppingCartRightDrawer = () => {
    const { closeRightDrawer } = useContext(UIContext)
    const { products, incrementProductQuantity, decrementProductQuantity, removeProduct } = useContext(ShoppingCartContext)
    const navigate = useNavigate()

    const handleOrder = () => {
        navigate('/newOrder')
        closeRightDrawer()
    }

    return (
        <RightDrawer>
            <Typography variant="h4" p={2} textAlign="center">Carrito</Typography>
            {products.length > 0 ? (
                <>
                    {products.map(({ id, product, quantity }) => (
                        <Container key={id} maxWidth="xs" sx={{ marginBottom: 2 }}>
                            <Card sx={{ display: 'flex' }}>
                                <CardMedia
                                    component="img"
                                    sx={{ maxWidth: '100px' }}
                                    image={product.image_url}
                                    alt={product.title}
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <CardContent>
                                        <Typography component="div" variant="h5">
                                            {product.title}
                                        </Typography>
                                        <Typography variant="subtitle1" component="div">{numberToCurrency((product.price - product.discount) * quantity)}</Typography>
                                        <Typography variant="subtitle2" sx={{ textDecoration: 'line-through' }} color="orange" component="div">{numberToCurrency(product.price * quantity)}</Typography>
                                    </CardContent>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pl: 1, pb: 1 }}>
                                        <IconButton aria-label="decrement" onClick={() => decrementProductQuantity(id)}>
                                            <RemoveIcon />
                                        </IconButton>
                                        <Typography m={3} variant="body1">{quantity}</Typography>
                                        <IconButton aria-label="increment" onClick={() => incrementProductQuantity(id)}>
                                            <AddIcon />
                                        </IconButton>
                                        <IconButton color="error" aria-label="delete" onClick={() => removeProduct(id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </Card>
                            <Divider />
                        </Container>
                    ))}
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" alignContent="center">
                        <Typography variant="h4" p={2}>Total: {numberToCurrency(products.reduce((acc, { product, quantity }) => acc + ((product.price - product.discount) * quantity), 0))}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Button variant="contained" color="warning" onClick={handleOrder}>Realizar orden</Button>
                    </Box>
                </>
            ) : (
                <Container maxWidth="md">
                    <Typography m={3} variant="h6">No hay productos en el carrito</Typography>
                </Container>
            )}
            <Box minHeight={30} />
        </RightDrawer>
    )
}