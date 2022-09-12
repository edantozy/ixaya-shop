import { Container } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'
import { CreateOrderPage, OrderPage, OrdersPage, OrderSuccessPage } from '../orders/pages'
import { ProductBottomDrawer } from '../products/components'
import { ProductsPage } from '../products/pages'
import { ShoppingCartRightDrawer } from '../shopping-cart/components'
import { Navbar, Sidebar } from '../ui/components'

export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Container maxWidth="xl">
                <Routes>
                    <Route path="*" element={<Navigate to="/" />} />
                    <Route path="/" element={<Navigate to="/products" />} />
                    <Route path="products" element={<ProductsPage />} />
                    <Route path="orders" element={<OrdersPage />} />
                    <Route path="newOrder" element={<CreateOrderPage />} />
                    <Route path="orderSuccess" element={<OrderSuccessPage />} />
                    <Route path="order/:id" element={<OrderPage />} />
                </Routes>
            </Container>
            <ProductBottomDrawer />
            <ShoppingCartRightDrawer />
        </>
    )
}
