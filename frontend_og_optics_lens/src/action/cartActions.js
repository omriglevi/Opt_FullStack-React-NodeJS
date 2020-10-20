import Axios from 'axios'  ;
import {CART_ADD_ITEM , ITEM_QTY_MINUS_ONE , ITEM_QTY_PLUS_ONE , CART_REMOVE_ITEM} from '../constants/cartConstants'
import Cookies from 'js-cookie' ;
const addToCart = (productId , qty , leftEyeParameter , rightEyeParameter) => async (dispatch , getState) => {

    try
    {
        const {data}= await Axios.get("/api/products/" + productId);
        dispatch({type :  CART_ADD_ITEM , payload :{
            product:data._id , 
            name: data.name , 
            image : data.image , 
            price: data.price ,
            countInStock : data.countInStock ,
            qty , 
            leftEyeParameter , 
            rightEyeParameter
        }
        
                                                        
                });
                

    const{cart: {cartItems}}=getState();
    Cookies.set("cartItems" , JSON.stringify(cartItems))

    }
    catch(error)
    {

    }
}


 

const itemQtyPlusOne= product =>  (dispatch, getState) => {dispatch( {  type: ITEM_QTY_PLUS_ONE , payload: product})  
const{cart: {cartItems}}=getState();
Cookies.set("cartItems" , JSON.stringify(cartItems))
 } ; 
const itemQtyMinusOne = product =>(dispatch , getState) => {dispatch( {  type: ITEM_QTY_MINUS_ONE , payload: product})   
const{cart: {cartItems}}=getState();
Cookies.set("cartItems" , JSON.stringify(cartItems))
};
const removeFromCart = product => (dispatch,getState) => {dispatch( {  type: CART_REMOVE_ITEM , payload: product}) 
const{cart: {cartItems}}=getState();
Cookies.set("cartItems" , JSON.stringify(cartItems))
} ; 

  export {addToCart  , removeFromCart ,itemQtyMinusOne , itemQtyPlusOne}