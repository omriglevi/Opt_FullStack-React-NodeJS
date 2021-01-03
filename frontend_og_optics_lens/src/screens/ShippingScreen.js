import React , {useState} from 'react' ;
import {useSelector , useDispatch} from 'react-redux';
import {Link} from 'react-router-dom'; 
import { saveShipping } from '../action/cartActions';
import CheckoutSteps from '../Components/CheckoutSteps'




function ShippingScreen(props){
  
   const userSignin = useSelector(state=>state.userSignin);
   const {  loading ,userInfo , error} = userSignin;

 
const [streetAndBuilding , setStreetAndBuilding] =useState(    (!userInfo.adress)|| (Object.keys(userInfo.adress).length === 0)  ? '' : userInfo.adress  )
const [floor , setFloor] =useState( (!userInfo.floor)|| (Object.keys(userInfo.floor).length === 0)  ? '' : userInfo.floor ) ;
const [apartmentNumber , setApartmentNumber] =useState( (!userInfo.aptNum)|| (Object.keys(userInfo.aptNum).length === 0)  ? '' : userInfo.aptNum );
const [postalCode , setPostalCode] =useState('');
const [extraShippingInfo , setExtraShippingInfo] =useState('');
const [city , setCity] =useState( (!userInfo.city)|| (Object.keys(userInfo.city).length === 0)  ? '' : userInfo.city );



const redirect=props.location.search? props.location.search.split("=")[1] : '/';




const dispatch=  useDispatch () ;
const submitHandler = (e)=> {
   console.log("clicked");
   e.preventDefault() ;
dispatch(saveShipping({city , streetAndBuilding , floor ,apartmentNumber , postalCode, extraShippingInfo}));
 props.history.push("payment");
}

// if(userInfo)
// {
//    if(userInfo.adress)
//    {
//       setStreetAndBuilding(userInfo.adress);
//    }
//    if(userInfo.floor)
//    {
//       setFloor(userInfo.floor);
//    }
 
// }


return <div className='container'>
    <div>
   
   
<form onSubmit={submitHandler}>

<div className='row'>
   
    <div dir='rtl' className='  col-12 signin-col'> 
     <div className='mycard'> 
<ul>
<div className=''>
       <CheckoutSteps step1 step2></CheckoutSteps>
    </div>
   <li>  <h3 dir='rtl'> פרטי משלוח</h3>
   </li>
   <li className='invalidFieldsShippingForm'  dir='rtl'>
      {!city && 'לא הזנת עיר'}
   </li>

   <li className='invalidFieldsShippingForm'>
   {!floor && 'לא הזנת קומה'}
   </li>

   <li className='invalidFieldsShippingForm'> 
   {!streetAndBuilding && 'לא הזנת כתובת'}
   </li>
  

   <li>
       <input value={city } type='text' dir='ltr' id='city' name='city' placeholder='עיר' onChange={e=>setCity(e.target.value)}  type='text'/>
        
    </li>


    <li>
       <input value={streetAndBuilding } dir='ltr' id='streetAndBuilding' name='streetAndBuilding' placeholder='רחוב ומספר בית' onChange={e=>setStreetAndBuilding(e.target.value)} type='text'>
         
       </input>
        
    </li>

    <li>
       <input value={floor} type='text' dir='ltr' id='floor' name='floor' placeholder='קומהֿֿֿ או בית פרטי' onChange={e=>setFloor(e.target.value)} type='text'/>
        
    </li>

    <li>
       <input value={apartmentNumber } type='text' dir='ltr' id='apartmentNumber' name='apartmentNumber' placeholder='מספר דירה' required={false} onChange={e=>setApartmentNumber(e.target.value)} type='text' />
        
    </li>

    <li>
       <input type='text' dir='ltr' id='postalCode' name='postalCode' placeholder='מיקוד' onChange={e=>setPostalCode(e.target.value)} type='text' />
        
    </li>

    <li>

    <textarea type='text' dir='ltr' id='extraShippingInfo' name='extraShippingInfo' placeholder='מידע נוסף / הערות' onChange={e=>setExtraShippingInfo(e.target.value)} type='text' />
        
    
    </li>

    <li>
        <button  value='submit' type='submit' disabled={(!floor) || (!streetAndBuilding) || (!city)} className=' signinbtn btn btn-primary'> יאללה , סיימתי</button>
      
    </li>

    <li>
  <Link to={redirect==='/' ? "signin" : "signin?redirect=" +redirect}>
           כבר רשום ? 
        </Link>
        
    </li>
   
  

   



</ul>
</div>
</div>

</div>
</form>
</div>
</div>

    
}
export default ShippingScreen