
import React, { useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { addToCart , removeFromCart , itemQtyMinusOne , itemQtyPlusOne } from '../action/cartActions';
import {Link} from 'react-router-dom'
import {Cookies} from 'js-cookie'






function CartScreen (props)
{
    const cart=useSelector(state => state.cart)
    const {cartItems}=cart ;
    const dispatch=useDispatch();
 


    const productId = props.match.params.id ;
    const myStr=props.location.search;
            const myStr_sections=myStr.split("?") ;
            const qty =Number(myStr_sections[1].split("=")[1]) ; 
            const leftE=Number(myStr_sections[2].split("=")[1]);   
            const rightE=Number(myStr_sections[3].split("=")[1]);  

           const  itemQtyMinusOneHandler = product=> {dispatch(itemQtyMinusOne(product)) };
           const  itemQtyPlusOneHandler =  product => {dispatch(itemQtyPlusOne(product))};
         const    removeFromCartHandler = product => {dispatch(removeFromCart(product)) };
            useEffect( () => {
                if(productId)
                {
                    dispatch(addToCart(productId , qty , leftE , rightE));
                }
                
            }, [])  



            const checkOutHandler = ()=>{
                props.history.push("/signin?redirect=shipping");
             }
            return <div className="container">
<div className="row display_cart">
                {cartItems.length ===0?<div className ="col">    הסל ריק </div> : 
                
                        cartItems.map(item=>
                        <div className="col-lg-9 col-md-12 ">     
                          
                        <div className="row">
                        
                        <div className="col">  <Link to={"/product/"+item.product}>   <img height= '100px' src={item.image}/> </Link></div>
                        
                       
                        <div className="col">      <Link to={"/product/"+item.product}>     {item.name}   </Link> </div>  
                       
                        <div className="col"> {item.leftEyeParameter} 👁  {item.rightEyeParameter}
                        </div>
                        <div className="col"> <button type='button ' onClick={ ()=>itemQtyMinusOneHandler(item )}>  -</button>   
                        {item.qty} 
                        <button type='button' onClick={ ()=>itemQtyPlusOneHandler(item)  }>+ </button>        </div>
                        <div className="col"> {item.price * item.qty} &#8362;</div>

                        <div className="col">  <button type='button' className='btn' onClick={ ()=> removeFromCartHandler (item)}>     🗑      </button>   </div>
                        
                            
                            </div>
                        </div>
                        )
  
                }



                    <div className=" col-md-12 colnum2 col-lg-3">
                   
                    <div className="col payment"> 
                   
                         
                           <div className="col">
                           <div className="row  rowOfTotal "> <span id="subtotal">    סיכום הזמנה 🤩</span> </div>
                          <div className="row rowOfTotal">        {cartItems.reduce((a,c)=> a + c.qty , 0)}  מוצרים בסל    </div>
                          {/* <div className="row">   דמי משלוח : 30      </div>  */}
                          <div className="row rowOfTotal">     &#8362;  {cartItems.reduce((a,c)=> a + c.price * c.qty  , 0) }  סך ההזמנה          </div> 
                               </div>
                           <div className="row rowOfTotal">     <button onClick={checkOutHandler} disabled={cartItems.length === 0} className="btn btn-primary" > תשלום </button> </div>
                          </div>
                    </div>
                </div>
            </div>
                       





   }

export default CartScreen ;