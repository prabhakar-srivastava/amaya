import { getItem } from "./getItem"

export const setItem= async(key:string, data:any)=>{
    const products=JSON.stringify(new Array(data))
    localStorage.setItem(key, products)

}

export const addItem=(Key:string,item:any)=>{
    const getProductData:any[]=getItem(Key)
    console.log(getProductData,'prod');
    getProductData.push(item)
    setItem(Key,getProductData)

}