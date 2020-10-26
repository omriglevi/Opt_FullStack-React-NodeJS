

import React from 'react'


import axios from 'axios';
import { PRODUCT_DETAILS_FAILED  , PRODUCT_DETAILS_SUCCESS,  PRODUCT_DETAILS_REQUEST , PRODUCT_LIST_REQUEST , PRODUCT_LIST_SUCCESS , PRODUCT_LIST_FAILED, PRODUCT_SAVE_REQUEST, PRODUCT_SAVE_FAILED, PRODUCT_SAVE_SUCCESS, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAILED, PRODUCT_DELETE_REQUEST   } from '../constants/productConstants';


const listProducts= () => async (dispatch)=>{
try{

    dispatch( {type : PRODUCT_LIST_REQUEST});
    const { data } = await axios.get("/api/products");
    dispatch ({ type: PRODUCT_LIST_SUCCESS , payload: data});

}
catch(error)
{
    dispatch({type:PRODUCT_LIST_FAILED , payload: error.message})
}    


}



const saveProduct = (product) => async(dispatch , getState)=>{
try{
    dispatch({type:PRODUCT_SAVE_REQUEST, payload:product});
    const {userSignin : {userInfo }} = getState();

    if(!product._id)
    {
        const {data} = await axios.post('/api/products' , product , {
            headers:{
                'Authorization': 'Bearer' + userInfo.token
            }
        });
        dispatch({type:PRODUCT_SAVE_SUCCESS , payload:data} );
    }
    else{
        const {data} = await axios.put('/api/products/'+product._id , product , {
            headers:{
                'Authorization': 'Bearer' + userInfo.token
            }
        });
        dispatch({type:PRODUCT_SAVE_SUCCESS , payload:data} );
    }
    
}
catch (error) 
{
dispatch({type:PRODUCT_SAVE_FAILED , payload:error.message});
}

}

const detailsProduct= (productId)=> async (dispatch)=> {
    try{
        dispatch({type: PRODUCT_DETAILS_REQUEST , payload: productId});
        const {data} = await axios.get("/api/products/" + productId);
        dispatch({type: PRODUCT_DETAILS_SUCCESS , payload: data})
    }catch(error)
    {
        dispatch({type: PRODUCT_DETAILS_FAILED ,   payload: error.message})
    }
}



const deleteProduct= (productId)=> async (dispatch , getState)=> {
    try{
        const {userSignin : {userInfo }} = getState();
        dispatch({type: PRODUCT_DELETE_REQUEST , payload: productId});
        const {data} = await axios.delete("/api/products/" + productId , {
            headers:{Authorization:'Bearer' + userInfo.token 
        }
        });
        dispatch({type: PRODUCT_DELETE_SUCCESS ,success:true , payload: data})
    }catch(error)
    {
        dispatch({type: PRODUCT_DELETE_FAILED ,   payload: error.message})
    }
}

export {listProducts , detailsProduct , saveProduct , deleteProduct} 