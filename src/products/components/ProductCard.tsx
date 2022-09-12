import { FC, useContext } from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import { Box, CardActionArea, CardHeader, Divider } from '@mui/material'
import { numberToCurrency } from '../../helpers/numberToCurrency'
import { UIContext } from '../../context/ui'

interface Props {
    product: any
}

export const ProductCard: FC<Props> = ({ product }) => {
    const { openBottomDrawer, setProductToAdd } = useContext(UIContext)

    const handleClick = () => {
        openBottomDrawer()
        setProductToAdd(product)
    }

    return (
        <Card sx={{ width: '100%' }}>
            <CardActionArea
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                }}
                onClick={handleClick}
            >
                <CardHeader
                    title={product.title}
                    sx={{ height: 90, alignItems: 'stretch' }}
                    titleTypographyProps={{ variant: 'h6', color: 'primary.contrastText', height: '80%', textAlign: 'center' }}
                />
                <CardMedia
                    component="img"
                    height="140"
                    image={product.image_url}
                    alt=""
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">{product.short_description}</Typography >
                </CardContent>
                <Box sx={{ marginBottom: 'auto', marginTop: 'auto' }} />
                <Divider />
                <Typography variant="body1">{numberToCurrency(product.price - product.discount)}</Typography>
                <Typography variant="body2" sx={{ textDecoration: 'line-through' }} color="secondary.contrastText">{numberToCurrency(product.price)}</Typography>
                <CardActions>
                    <Typography variant="h6" color="secondary"><b>Añadir al carrito</b></Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
