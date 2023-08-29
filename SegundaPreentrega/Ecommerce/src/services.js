const products = [
    /*Tintos*/
    { id: "1", category: "vinotinto", /*imagen: "/Imagenes/cabernet_sauvignontinto-graffigna.png"*/ title:"Cabernet Suavignon Tinto", subtitle: "Bodega Graffigna San Juan",info: "lorem" },
    { id:"2", category: "vinotinto",/*imagen: "/Imagenes/malbectinto-graffigna.png" */ title:"Malbec Tinto", subtitle: "Bodega Graffigna San Juan", info: "lorem"},
   /*Blancos*/
    { id: "3", category: "espumantes",  title:"Espumante", subtitle: "Bodega San Juan", info: "lorem"},
    { id: "4",category: "vinotinto",   title:"Vino Tinto Suave", subtitle: "Bodega San Juan", info: "lorem"},
    { id: "5",category: "vinotinto", /*imagen: "/Imagenes/chardonnayblanco-graffigna.png",*/  title:"Vino Tinto Suave", subtitle: "Bodega San Juan", info: "lorem"},
    { id: "6",category: "vinoblanco",   title:"Chardonnay Blanco", subtitle: "Bodega Graffigna San Juan", info: "lorem"},
    { id: "7",category: "vinoblanco",   title:"Vino Blanco", subtitle: "Bodega San Juan", info: "lorem"},
    { id: "8",category: "espumantes",   title:"Espumante", subtitle: "Bodega San Juan", info: "lorem"}
];

//getProduct
export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // buscamos el producto por id
        const product = products.find((p) => p.id === id);

//si exste el producto
if(products){
    resolve(product);
} else {
    reject("No existe el producto")
}
},1000)
    })
}

//getproducts
export const getProducts = (category) => {
    return new Promise((resolve) => { 
        setTimeout(() => {

      // Si category existe filtramos por categoría
      // Si category no existe devolvemos todos los productos

      const productsFiltered = category ? products.filter((product) => product.category === category) : products;
      resolve(productsFiltered)

        }, 1000);
    });
}

