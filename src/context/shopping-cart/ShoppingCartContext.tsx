import { createContext } from 'react'

type productQuantity = {
    id: string,
    product: any,
    quantity: number,
}

export interface ContextProps { // Context Component Properties
    products: productQuantity[],
    addProduct: (id: string, product: any, quantity: number) => void,
    removeProduct: (id: string) => void,
    incrementProductQuantity: (id: string) => void,
    decrementProductQuantity: (id: string) => void,
    setProductQuantity: (id: string, quantity: number) => void,
    clearShoppingCart: () => void
}

export const ShoppingCartContext = createContext({} as ContextProps)