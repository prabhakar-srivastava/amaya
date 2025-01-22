export const getItem = (key:string) => {
    const products = localStorage.getItem(key)
    if (!products?.length) {
        throw console.error('error adding products to the cart')
    }
    const productsData = JSON.parse(products || '')
    return productsData
}