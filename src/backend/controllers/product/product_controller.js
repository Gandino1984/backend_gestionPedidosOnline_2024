//datos de producte falseados hasta tener el modelo
const products = [
    {id_product: 1, name_product: "product1", price_product: 10.10, discount_product: 10, season_product: "season1"},
    {id_product: 2, name_product: "product2", price_product: 20.20, discount_product: 20, season_product: "season2"},
    {id_product: 3, name_product: "product3", price_product: 30.30, discount_product: 30, season_product: "season3"},
]

async function getAll() {
    return {data:products};
}

async function getById(id) {
    const product = products.find(product => product.id_product == id);
    if(!product){
        return {error: "product not found"};
    }
    return {data: product};
}

async function create(productData) {
    const {name_product, price_product, discount_product, season_product } = productData;
    //get method =  http://localhost:3007/product/create?name_product=toto&pass_product=passtoto&location_product=location toto
    if(!name_product || !price_product || !season_product){
        return {error: "product could not be created"};  
    }
    const maxId = Math.max(...products.map(product => product.id_product));
    const newproduct = {id_product: maxId + 1, name_product, price_product, discount_product, season_product};
    products.push(newproduct);
    return {data: newproduct};
}   

async function update(id, productData) {
    const {id_product, name_product, price_product, discount_product, season_product } = productData; 
    const product = products.find(product => product.id_product == id);
    if(!product){
        return {error: "product could not be modified"};
    }
    if(id_product){
        product.id_product = Number(id_product);   
    }
    if(name_product){
        product.name_product = name_product;    
    }
    if(price_product){
        product.price_product = price_product;    
    }
    if(discount_product){
        product.discount_product = discount_product;    
    }
    if(season_product){
        product.season_product = season_product;    
    }
    return {data: product};
}

async function removeById(id) {
    const productIndex = products.findIndex(product => product.id_product == id);
    if(productIndex == -1){
        return {error: "product could not be deleted"};
    }
    const deletedproduct = products.splice(productIndex, 1);
    return {data: deletedproduct};
}

export { getAll, getById, create, update, removeById }

export default{ getAll, getById, create, update, removeById }
