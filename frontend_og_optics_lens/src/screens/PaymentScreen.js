
import React , {useState} from 'react' ;
import {useSelector , useDispatch} from 'react-redux';
import {Link} from 'react-router-dom'; 
import { savePayment} from '../action/cartActions';
import CheckoutSteps from '../Components/CheckoutSteps'




function PaymentScreen(props){
 const [paymentMethod , setPaymentMethod] =useState('');


// const userRegister = useSelector(state=>state.userRegister);
// const {  loading ,userInfo , error} = userRegister;
// const redirect=props.location.search? props.location.search.split("=")[1] : '/';




const dispatch=  useDispatch () ;
const submitHandler = (e)=> {
   console.log("clicked");
   e.preventDefault() ;
dispatch(savePayment(paymentMethod));
 props.history.push("placeorder");
}




return <div className='container'>
    <div>
   
   
<form onSubmit={submitHandler}>

<div className='row'>
   
    <div dir='rtl' className='  col-12 signin-col'> 
     <div className='mycard'> 
<ul>
<div className=''>
       <CheckoutSteps step1 step2 step3></CheckoutSteps>
    </div>
   <li>  <h3 dir='rtl'>פרטי תשלום </h3>
   </li>
  


  

   <li>
       <div>
   <label  dir='ltr' htmlFor='paymentMethod'> Paypal</label>
       <input className='paymentBox' type='radio'  id='paymentBoxRadioPaypal' value='paypal' name='paymentMethod'  onChange={e=>setPaymentMethod(e.target.value)} />
       </div>
    </li>



    <li>
        <button  value='submit' type='submit' disabled={ !paymentMethod} className=' signinbtn btn btn-primary'> יאללה , סיימתי</button>
      
    </li>

   
  

   



</ul>
</div>
</div>

</div>
</form>
</div>
</div>

    
}
export default PaymentScreen