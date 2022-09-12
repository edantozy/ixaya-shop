import { ShoppingCartState } from './'

type ShoppingCartActionType =
    | { type: '[ShoppingCart] - Add Product', payload: { id: any, product: any, quantity: number } }
    | { type: '[ShoppingCart] - Remove Product', payload: { id: string } }
    | { type: '[ShoppingCart] - Increment Product Quantity', payload: { id: string } }
    | { type: '[ShoppingCart] - Decrement Product Quantity', payload: { id: string } }
    | { type: '[ShoppingCart] - Set Product Quantity', payload: { id: string, quantity: number } }
    | { type: '[ShoppingCart] - Clear' }

export const shoppingCartReducer = (state: ShoppingCartState, action: ShoppingCartActionType): ShoppingCartState => {

    switch (action.type) {
        case '[ShoppingCart] - Add Product':
            if (state.products.find(p => p.id === action.payload.id)) {
                return {
                    ...state,
                    products: state.products.map(p => p.id === action.payload.id ? { ...p, quantity: p.quantity + action.payload.quantity } : p)
                }
            }

            return {
                ...state,
                products: [...state.products, { id: action.payload.id, product: action.payload.product, quantity: action.payload.quantity }]
            }
        case '[ShoppingCart] - Remove Product':
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload.id)
            }
        case '[ShoppingCart] - Increment Product Quantity':
            return {
                ...state,
                products: state.products.map(p => p.id === action.payload.id ? { ...p, quantity: p.quantity + 1 } : p)
            }
        case '[ShoppingCart] - Decrement Product Quantity':
            if (state.products.find(p => p.id === action.payload.id && p.quantity === 1)) {
                return {
                    ...state,
                    products: state.products.filter(p => p.id !== action.payload.id)
                }
            }

            return {
                ...state,
                products: state.products.map(p => p.id === action.payload.id ? { ...p, quantity: p.quantity - 1 } : p)
            }
        case '[ShoppingCart] - Set Product Quantity':
            if (action.payload.quantity === 0) {
                return {
                    ...state,
                    products: state.products.filter(p => p.id !== action.payload.id)
                }
            }

            return {
                ...state,
                products: state.products.map(p => p.id === action.payload.id ? { ...p, quantity: action.payload.quantity } : p)
            }
        case '[ShoppingCart] - Clear':
            return {
                ...state,
                products: []
            }
        default:
            return state;
    }
}
