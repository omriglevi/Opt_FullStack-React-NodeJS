
import {CART_ADD_ITEM , ITEM_QTY_MINUS_ONE , ITEM_QTY_PLUS_ONE , CART_REMOVE_ITEM, CART_SAVE_SHIPPING} from '../constants/cartConstants';



function cartReducer (state={cartItems:[] } , action   )
{
    const flag =false ;
    switch (action.type) 
     {

case CART_SAVE_SHIPPING:
    return{...state , shipping:action.payload}




    case CART_ADD_ITEM :
        const item = action.payload ;
        const flag=false;
        const newStateAddToCart =  state.cartItems.map( obj=> {
            if( (obj.product ===  item.product ) && (obj.leftEyeParameter === item.leftEyeParameter) && 
               ( obj.rightEyeParameter=== item.rightEyeParameter))
                {
                    obj.qty += item.qty;
                    flag=true;
                }
                return obj ;
            }

          

        ) 
        if(flag)    {return {cartItems:[...newStateAddToCart]}}
    
       else return {cartItems: [...state.cartItems, item]}
        

    case ITEM_QTY_MINUS_ONE :  
    const itemMinusOne = action.payload;
    const newStateMinus= Object.assign([] , state.cartItems.map(  item => {
        if( (item.product === itemMinusOne.product) && (item.leftEyeParameter===itemMinusOne.leftEyeParameter) && (item.rightEyeParameter===itemMinusOne.rightEyeParameter))
        if(item.qty===1)
        {item.qty=1;}
        else
        {item.qty-=1 ;}
       
       
        return item
    }  )) ;
    return {cartItems: [...newStateMinus]}
    

    case ITEM_QTY_PLUS_ONE : 
    const itemPlusOne = action.payload
    const newStatePlus= Object.assign([] , state.cartItems.map(  item => {
        if(    (item.product === itemPlusOne.product) && (item.leftEyeParameter === itemPlusOne.leftEyeParameter) && (item.rightEyeParameter === itemPlusOne.rightEyeParameter)  )
        {item.qty+=1 ;}
        return item;
    }  )) ;
    return {cartItems: [...newStatePlus]}
    


case CART_REMOVE_ITEM :
    const itemToRemove = action.payload ;
   
            return { cartItems:[...state.cartItems.filter(x=>x.product !== itemToRemove.product)]}


        default :
       return state ;
    }








}

export {cartReducer}