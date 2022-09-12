import axios from 'axios'

const ixayaAPI = axios.create({
    baseURL: 'https://sandbox.ixaya.net/api',
    headers: {
        'X-API-KEY': 'kkkcc4o4gsko8w0wg084k4o8s4wggwcosk8okgw4'
    }
})

export default ixayaAPI