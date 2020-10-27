
import React, { useEffect} from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { addToCart , removeFromCart , itemQtyMinusOne , itemQtyPlusOne } from '../action/cartActions';
import {Link} from 'react-router-dom';
import {Cookies} from 'js-cookie'
import CheckoutSteps from '../Components/CheckoutSteps';






function PlaceOrderScreen (props)
{
    const cart=useSelector(state => state.cart)
    const {cartItems , shipping , payment}=cart ;
    const dispatch=useDispatch();
    if(!shipping)
    {
        console.log('not shipping');    
        props.history.push('/shipping');
    }

if(!payment)
{
    console.log('no payment');
    props.history.push('/payment')
}
     useEffect( () => {
              
                
            }, [])  



            const checkOutHandler = ()=>{
                props.history.push("/signin?redirect=shipping");
             }
            return <div>
                
             <div className="container">
<div className="row display_cart">
<h2> כמעט סיימנו</h2>



                    <div className=" col-md-12 colnum2 ">
                   
                    <div className="col payment"> 
                    <div className="row  rowOfTotal "> <span id="subtotal">    סיכום הזמנה 🤩</span> </div>
                         
                           <div className="col">
                          shipping:{shipping.floor}
                          payment:{payment}
                {cartItems.length ===0?<div className ="col">    הסל ריק </div> : 
                
                cartItems.map(item=>
                <div className="col-lg-9 col-md-12 ">     
                  
                <div className="row">
                
                <div className="col">  <Link to={"/product/"+item.product}>   <img height= '100px' src={item.image}/> </Link></div>
                
               
                <div className="col">      <Link to={"/product/"+item.product}>     {item.name}   </Link> </div>  
               
                <div className="col"> {item.leftEyeParameter} 👁  {item.rightEyeParameter}
                </div>
                <div className="col">   
                כמות:
                {item.qty} 
                       </div>
                <div className="col"> {item.price * item.qty} &#8362;</div>

               
                
                    
                    </div>
                </div>
                )

        }
                           
                          <div className="row rowOfTotal">        {cartItems.reduce((a,c)=> a + c.qty , 0)}  מוצרים בסל    </div>
                          {/* <div className="row">   דמי משלוח : 30      </div>  */}
                          <div className="row rowOfTotal">     &#8362;  {cartItems.reduce((a,c)=> a + c.price * c.qty  , 0) }  סך ההזמנה          </div> 
                               </div>
                           <div className="row rowOfTotal">     <button onClick={checkOutHandler} disabled={cartItems.length === 0} className="btn btn-primary" > תשלום </button> </div>
                          </div>
                    </div>
                </div>
            </div>
            </div>
                       





   }

export default PlaceOrderScreen ;