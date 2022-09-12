import { FC } from 'react'
import Card from '@mui/material/Card'
import { Typography, CardActionArea } from '@mui/material'
import { Order } from "../../interfaces"
import { numberToCurrency } from '../../helpers'
import { useNavigate } from 'react-router-dom'

interface Props {
    order: Order
}

export const OrderCard: FC<Props> = ({ order }) => {
    const navigate = useNavigate()
    
    const handleClick = (id: string) => {
        navigate(`/order/${id}`)
    }

    return (
        <Card sx={{ width: '100%' }}>
            <CardActionArea
                sx={{
                    width: '100%',
                    height: '100%',
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column'
                }}
                onClick={() => handleClick(order.id)}
            >
                <Typography variant="body1"><span style={{ fontWeight: 600 }}>Código: </span>{order.order_code}</Typography>
                <Typography variant="body1"><span style={{ fontWeight: 600 }}>Subtotal: </span>{numberToCurrency(order.subtotal)}</Typography>
                <Typography variant="body1"><span style={{ fontWeight: 600 }}>Descuento: </span>{numberToCurrency(order.discount)}</Typography>
                <Typography variant="body1"><span style={{ fontWeight: 600 }}>Total: </span>{numberToCurrency(order.total)}</Typography>
                <Typography variant="body1"><span style={{ fontWeight: 600 }}>Última modificación: </span>{order.last_update}</Typography>
            </CardActionArea>
        </Card>
    )
}
