import { getItem } from "./getItem"

export const setItem= async( data:any)=>{
    const products=JSON.stringify(data)
    localStorage.setItem('products', products)

}

export const addItem=(item:any)=>{
    const getProductData:any[]=getItem()
    getProductData.push(item)
    setItem(getProductData)

}