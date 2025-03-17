import { api } from "../lib/api"

export const getProducts = async () => {
    const { data } = await api.get('/products.json');

    return data.products;
}