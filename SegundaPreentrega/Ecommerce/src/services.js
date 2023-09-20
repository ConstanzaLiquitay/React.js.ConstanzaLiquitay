import {
    doc,
    getDoc,
    collection,
    getDocs,
    addDoc,
    query,
    where,
    getFirestore,
  } from "firebase/firestore";

/*const products = [
//    /*Tintos*/
//    { id: "1", category: "vinotinto", imagen: "/Imagenes/graffigna-cabernetsuavignon.png", title: "Cabernet Suavignon Tinto", bodega: "Bodega Graffigna San Juan", description: " De color rojo con matices violáceos. El Aroma es fino, que resalta la expresion frutal" },
//    { id: "2", category: "vinotinto", imagen: "/Imagenes/graffigna-malbec.png", title: "Malbec Tinto", bodega: "Bodega Graffigna San Juan", description: " De profundo color púrpura con matices violáceos. El aroma es potente, resaltando la expresión frutal, en especial la cereza negra y la ciruela, en armonía con las notas de crianza en madera. En boca se presenta voluminoso, amable, intenso, de buen paladar medio, con una excelente estructura tánica." },
//    { id: "3", category: "vinotinto", imagen: "/Imagenes/merceddelestero-milvientos-malbec.png", title: "Mil Vientos Malbec Tinto", bodega: "Bodega Merced Del Estero San Juan", description: " Presenta color rojo violáceo intenso con tintes morados. Delicado e intenso donde se destaca aromas de ciruelas y sus confituras, violetas, notas de mentol, especias, todas ellas acompañadas por notas de chocolate y café aportados por el roble. Entrada dulce, gran volumen y buena estructura, luego en el final de boca vuelven los aromas ya percibidos en nariz y persiste la suavidad de los taninos típicos del malbec argentino. Puede acompañar carnes rojas, quesos y pastas. Consumir entre 16 ºC y 18 ºC." },
//    { id: "4", category: "vinotinto", imagen: "/Imagenes/merceddelestero-tinto.png", title: "Merced Del Estero Gran Corte", bodega: " Bodega Merced Del Estero San Juan", description: " Proveniente de nuestros viñedos ubicados en dos zonas emblemáticas de San Juan, Valle de Pedernal (1200 msnm) y La Bebida (600 msnm), GRAN CORTE MERCED DEL ESTERO es 50% Malbec, 30% Cabernet Franc (ambos del Valle de Pedernal) y 20% de Tannat (de La Bebida). El Malbec entrega aromas frescos de frutos rojos y florales de violetas, taninos dulces y aterciopelados, que se complementan con los taninos firmes y los aromas especiados de mentol aportados por el Cabernet Franc. El Tannat otorga un color intenso, aromas de frutos negros, gran fuerza tánica que expresa en el corte gran amplitud en boca y aumenta el potencial de guarda de este vino. La crianza en barricas de roble durante 12 meses más 9 meses de botella, asegura la madurez óptima al momento de beber este vino." },
//    { id: "5", category: "vinoblanco", imagen: "/Imagenes/graffigna-chardonnay.png", title: "Chardonnay ", bodega: "Bodega Graffigna San Juan", description: " Presenta un color amarillo con matices dorados. Los aromas están definidos por las notas de frutas tropicales, como el durazno blanco. En boca, el paladar es muy equilibrado entre jugosidad y sucrosidad típica de la variedad. Final frutado y aterciopelado." },
//    { id: "6", category: "vinoblanco", imagen: "/Imagenes/merceddelestero-milvientos-torrontes.png", title: "Mil Vientos Torreontes ", bodega: " Bodega Merced Del Estero San Juan", description: " Presenta un suave y atractivo color amarillo verdoso. Sus aromas son por sobre todo elegantes donde aparecen las notas típicas de la variedad tales como rosas, azahares y terpenos junto a aromas frutales cítricos y tropicales que le dan un toque distintivo. En boca es un vino fresco y agradable con reminiscencias de los aromas percibidos en nariz, posee untuosidad y equilibrio entre la acidez, el alcohol y el resto de sus componentes, el final de boca persistente y agradable. Puede acompañar pescados y mariscos, ensaladas, carnes blancas y pastas. Consumir entre 6 ºC y 8 ºC." },
//    { id: "7", category: "vinoblanco", imagen: "/Imagenes/merceddelestero-milvietnos-torrontes-dulcenatural.png", title: "Mil Vientos Torreontes Dulce Natural ", bodega: "Bodega Merced Del Estero San Juan", description: " Es un vino un color amarillo verdoso pálido o acerado, muy brillante. Se destacan el típico amoscatelado que está dado por una mezcla de aromas frutales (frutas tropicales, cítricos, durazno blanco, melón) y florales (rosas, flor del limonero, flores blancas), aparecen notas de dulce de naranja y miel. Se destaca la dulzura equilibrada, la acidez y nuevamente los aromas agradables, su final conserva la frescura y el equilibrio que nos pide beber un poco más. Puede acompañar postres y quesos. Consumir entre 6 ºC y 8 ºC." },
//]

//getProduct
export const getProduct = (id) => { 
  return  new Promise ((resolve, reject) => {
    const db = getFirestore()

    const itemDoc = doc(db, "items", id);
getDoc(itemDoc).then((doc) => {
  if (doc.exists()){
    resolve ({id: doc.id, ...doc.data()});

  } else {
    resolve(null);
  }

  
})
.catch((error) => {
  reject (error);
});


    });
      };

//getproducts
export const getProducts = (category) => {
    return new Promise((resolve , reject) => { 
      const db = getFirestore()

      const itemCollection = collection(db, "items"); 


      let q
      if (category){
        q = query( itemCollection, where ("category", "==", category))
      } else {
        q = query(itemCollection);
      }

      getDocs (q) .then((QuerySnapshot) =>{
        const products = QuerySnapshot.docs.map((doc) =>{
            return {id: doc.id, ...doc.data()}
        });

        resolve(products);
      })

      .catch((error) => {
        reject(error);
      });
    });

    
}

export const createOrder = (orden) => {
  const db = getFirestore();

  const ordersCollection = collection(db, "orders");

  return addDoc(ordersCollection, orden);
}

