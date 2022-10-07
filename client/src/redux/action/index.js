/*
    index.js
    Micheal Herring
    Documented on 10/06/2022
    
    Description:
      Holds the Redux action creators.
    
    Documentation:
        No documentation provided.
*/

// For Add Item to Cart
export const addCart = (product) =>{
    return {
        type:"ADDITEM",
        payload:product
    }
}

// For Delete Item to Cart
export const delCart = (product) =>{
    return {
        type:"DELITEM",
        payload:product
    }
}