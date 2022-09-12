import { useContext, ChangeEvent, FC } from 'react'
import { Box, Card, CardContent, CardMedia, Divider, Grid, IconButton, TextField, Typography } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import { numberToCurrency } from '../../helpers'
import { ShoppingCartContext } from '../../context/shopping-cart'

interface Props {
    id: string,
    product: any,
    quantity: number
}

export const OrderProductCard: FC<Props> = ({ id, product, quantity }) => {
    const { removeProduct, setProductQuantity } = useContext(ShoppingCartContext)

    const handleQuantityChange = (id: string, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.target.value === '0') return
        setProductQuantity(id, parseInt(e.target.value))
    }

    return (
        <Grid item key={id} xs={12} sm={6} md={6} sx={{ marginBottom: 2 }}>
            <Card sx={{ display: 'flex', height: '100%', alignItems: 'center' }}>
                <CardMedia
                    component="img"
                    sx={{ maxWidth: '100px', maxHeight: '100px' }}
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
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <TextField required type="number" sx={{ margin: 2 }} value={quantity} onChange={(e) => handleQuantityChange(id, e)} />
                        <IconButton color="error" aria-label="delete" onClick={() => removeProduct(id)}>
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Card>
            <Divider />
        </Grid>
    )
}
