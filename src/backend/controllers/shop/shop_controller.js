//datos de shope falseados hasta tener el modelo
const shops = [
    {id_shop: 1, name_shop: "shop1", pass_shop: "pass1", location_shop: "location1"},
    {id_shop: 2, name_shop: "shop2", pass_shop: "pass2", location_shop: "location2"},
    {id_shop: 3, name_shop: "shop3", pass_shop: "pass3", location_shop: "location3"},
]

async function getAll() {
    return {data:shops};
}

async function getById(id) {
    const shop = shops.find(shop => shop.id_shop == id);
    if(!shop){
        return {error: "shop not found"};
    }
    return {data: shop};
}

async function create(shopData) {
    const {name_shop, pass_shop, location_shop } = shopData;
    //get method =  http://localhost:3007/shop/create?name_shop=toto&pass_shop=passtoto&location_shop=location toto
    if(!name_shop || !pass_shop || !location_shop){
        return {error: "shop could not be created"};  
    }
    const maxId = Math.max(...shops.map(shop => shop.id_shop));
    const newshop = {id_shop: maxId + 1, name_shop, pass_shop, location_shop};
    shops.push(newshop);
    return {data: newshop};
}   

async function update(id, shopData) {
    const {id_shop, name_shop, pass_shop, location_shop } = shopData; 
    const shop = shops.find(shop => shop.id_shop == id);
    if(!shop){
        return {error: "shop could not be modified"};
    }
    if(id_shop){
        shop.id_shop = Number(id_shop);   
    }
    if(name_shop){
        shop.name_shop = name_shop;    
    }
    if(pass_shop){
        shop.pass_shop = pass_shop;    
    }
    if(location_shop){
        shop.location_shop = location_shop;    
    }
    return {data: shop};
}

async function removeById(id) {
    const shopIndex = shops.findIndex(shop => shop.id_shop == id);
    if(shopIndex == -1){
        return {error: "shop could not be deleted"};
    }
    const deletedshop = shops.splice(shopIndex, 1);
    return {data: deletedshop};
}

export { getAll, getById, create, update, removeById }

export default{ getAll, getById, create, update, removeById }
