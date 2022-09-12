import { useState } from 'react'

export const useQuantity = () => {
    const [quantity, setQuantity] = useState(1)
    const add = () => setQuantity(quantity + 1)
    const remove = () => setQuantity(quantity => {
        if (quantity > 1) return quantity - 1
        return quantity
    })

    return { quantity, add, remove }
}