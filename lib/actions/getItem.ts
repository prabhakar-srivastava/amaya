import { error } from "console"

export const getItem=()=>{
    const products:string | null = localStorage.getItem('products') 
    const productsData= JSON.parse(products || '')
    if(!productsData?.lenght){
        throw error('error adding products to the cart')
    }
    return productsData
}