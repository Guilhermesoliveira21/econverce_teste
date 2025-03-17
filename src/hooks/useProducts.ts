import { useQuery } from "@tanstack/react-query"
import { getProducts } from "../services/products"
import { Product } from "../types/Product"

export const useProducts = () => {

    return useQuery<Product[]>({
        queryFn: getProducts,
        queryKey: ['products']
    })

}