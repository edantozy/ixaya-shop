import { useEffect, useState } from 'react'
import { Box, Skeleton, Typography } from "@mui/material"
import { useParams } from "react-router-dom"
import { MainLayout } from "../../layouts"
import ixayaAPI from '../../apis/ixayaAPI'
import { Order } from '../../interfaces'
import { OrderTable } from '../components'
import { numberToCurrency } from '../../helpers'

export const OrderPage = () => {
    const { id } = useParams()
    const [order, setOrder] = useState<Order | null>(null)

    const getOrder = async () => {
        const { data } = await ixayaAPI.post('/orders/detail', { order_id: id })
        setOrder(data.response)
    }

    useEffect(() => {
        getOrder()
    }, [])

    return (
        <MainLayout>
            <Typography variant="h1" color="primary.contrastText">Orden {order && `#${order.id}`}</Typography>
            {
                order ? (
                    <>
                        <OrderTable fields={[
                            {
                                name: 'Código de orden',
                                value: order.order_code
                            },
                            {
                                name: 'Fecha de creación',
                                value: order.create_date
                            },
                            {
                                name: 'Fecha de última modificación',
                                value: order.last_update
                            },
                            {
                                name: 'ID de cliente',
                                value: order.user_id
                            },
                            {
                                name: 'Dirección de envío',
                                value: order.address
                            },
                            {
                                name: 'Ciudad',
                                value: order.city
                            },
                            {
                                name: 'Estado',
                                value: order.state
                            },
                            {
                                name: 'Calle',
                                value: order.street_name
                            },
                            {
                                name: 'Código postal',
                                value: order.zip_code
                            },
                            {
                                name: 'Teléfono',
                                value: order.phone
                            },
                            {
                                name: 'Descuento',
                                value: numberToCurrency(order.discount)
                            },
                            {
                                name: 'Subtotal',
                                value: numberToCurrency(order.subtotal)
                            },
                            {
                                name: 'Total',
                                value: numberToCurrency(order.total)
                            },
                            {
                                name: 'Productos',
                                value: order.products.map(product => product.title).join(', ')
                            },
                        ]} />
                    </>
                ) : (
                    <Box display="flex" flexDirection="column">
                        {[...Array(15)].map(el => (
                            <Skeleton height={50} sx={{ margin: 1 }} variant="rectangular" animation="wave" />
                        ))}
                    </Box>
                )
            }
        </MainLayout>
    )
}
