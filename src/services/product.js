import products from '../products.json'

const getProducts = () => {
    return products
}

const getProductById = (id) => {
    return products.find(product => product.id === Number(id))
}

export { getProducts, getProductById }