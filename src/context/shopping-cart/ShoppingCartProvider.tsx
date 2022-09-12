import { FC, ReactNode, useReducer } from 'react'
import { ShoppingCartContext, shoppingCartReducer } from './'

type productQuantity = {
    id: string,
    product: any,
    quantity: number
}

export interface ShoppingCartState { // Definition of the state values
    products: productQuantity[]
}

interface Props { children: ReactNode }

const ShoppingCart_INITIAL_STATE: ShoppingCartState = {
    products: []
}

export const ShoppingCartProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(shoppingCartReducer, ShoppingCart_INITIAL_STATE)

    const addProduct = (id: string, product: any, quantity: number) => {
        dispatch({ type: '[ShoppingCart] - Add Product', payload: { id, product, quantity } })
    }

    const removeProduct = (id: string) => {
        dispatch({ type: '[ShoppingCart] - Remove Product', payload: { id } })
    }

    const incrementProductQuantity = (id: string) => {
        dispatch({ type: '[ShoppingCart] - Increment Product Quantity', payload: { id } })
    }

    const decrementProductQuantity = (id: string) => {
        dispatch({ type: '[ShoppingCart] - Decrement Product Quantity', payload: { id } })
    }

    const setProductQuantity = (id: string, quantity: number) => {
        dispatch({ type: '[ShoppingCart] - Set Product Quantity', payload: { id, quantity } })
    }

    const clearShoppingCart = () => {
        dispatch({ type: '[ShoppingCart] - Clear' })
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                ...state,
                addProduct,
                removeProduct,
                incrementProductQuantity,
                decrementProductQuantity,
                setProductQuantity,
                clearShoppingCart
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}