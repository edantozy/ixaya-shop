import ixayaAPI from "../apis/ixayaAPI"

type addressInfo = {
    street_name: string
    phone: string
    address: string
    city: string
    state: string
    zip_code: string
}

type product = {
    id: string
    quantity: number
}

export const createOrder = async (data: addressInfo, products: product[], onSuccess: () => void) => {
    try {
        const response = await ixayaAPI.post('/orders/create',
            {
                street_name: data.street_name,
                zip_code: parseInt(data.zip_code),
                address: data.address,
                phone: parseInt(data.phone),
                state: data.state,
                city: data.city,
                product_list: products.map(product => {
                    return {
                        product_id: product.id,
                        quantity: product.quantity
                    }
                })
            })
        console.log(response)
        onSuccess()
    } catch (error) {
        console.log(error)
    }
}