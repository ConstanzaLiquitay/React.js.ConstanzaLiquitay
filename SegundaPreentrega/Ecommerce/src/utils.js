 export const getCartQuantity =  (cart) => { 

    let count = 0;
cart.forEach((items) =>{ 
    count += items.quantity
 }
);

return count;
 };