import { useEffect, useState } from 'react'
import { Typography, Grid, Skeleton } from '@mui/material'
import { ProductCard } from '../components'
import ixayaAPI from '../../apis/ixayaAPI'
import { ProductsResponse } from '../../interfaces'
import { MainLayout } from '../../layouts'

interface ProductsState {
    products: any,
    isLoading: boolean,
}

export const ProductsPage = () => {
    const [productsState, setProducts] = useState<ProductsState>({
        products: [],
        isLoading: true
    })

    const getProducts = async () => {
        const { data } = await ixayaAPI.get<ProductsResponse>('/products')
        setProducts({
            products: data.response,
            isLoading: false
        })
    }

    useEffect(() => {
        getProducts()
    }, [])


    return (
        <MainLayout>
            <Typography variant="h1" color="primary.contrastText">Productos</Typography>
            <Grid container spacing={3}>
                {
                    productsState.isLoading ? (
                        [...Array(6)].map((el, index) => (
                            <Grid key={index} item xs={12} sm={6} md={4} lg={3} >
                                <Skeleton
                                    animation="wave"
                                    height={250}
                                    width="100%"
                                    style={{ marginBottom: 6 }}
                                />
                            </Grid>
                        ))
                    ) : (
                        productsState.products.map((product: any) => (
                            <Grid key={product.id} item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex' }}>
                                <ProductCard product={product} />
                            </Grid>
                        ))
                    )
                }
            </Grid>
        </MainLayout>
    )
}
