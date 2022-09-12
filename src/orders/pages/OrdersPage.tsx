import { useEffect, useState } from 'react'
import { Typography, Grid, Skeleton, Stack } from '@mui/material'
import { OrderCard } from '../components'
import ixayaAPI from '../../apis/ixayaAPI'
import { OrdersResponse } from '../../interfaces'
import { MainLayout } from '../../layouts'

interface OrdersState {
    orders: any,
    isLoading: boolean,
}

export const OrdersPage = () => {
    const [OrdersState, setOrders] = useState<OrdersState>({
        orders: [],
        isLoading: true
    })

    const getOrders = async () => {
        const { data } = await ixayaAPI.get<OrdersResponse>('/orders')
        setOrders({
            orders: data.response,
            isLoading: false
        })
    }

    useEffect(() => {
        getOrders()
    }, [])


    return (
        <MainLayout>
            <Typography variant="h1" color="primary.contrastText">Ordenes</Typography>
            <Stack spacing={2}>
                {
                    OrdersState.isLoading ? (
                        [...Array(6)].map((el, index) => (
                            <Grid key={index} item >
                                <Skeleton
                                    variant="rectangular"
                                    animation="wave"
                                    height={140}
                                    width="100%"
                                />
                            </Grid>
                        ))
                    ) : (
                        OrdersState.orders.map((order: any) => (
                            <Grid key={order.id} item sx={{ display: 'flex' }}>
                                <OrderCard order={order} />
                            </Grid>
                        ))
                    )
                }
            </Stack>
        </MainLayout >
    )
}
