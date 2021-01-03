import React , {useState} from 'react' ;
import {useSelector , useDispatch} from 'react-redux';
import {useEffect} from 'react' ;
import {Link} from 'react-router-dom';
import { changeUserDetails } from '../action/userActions';




function ChangeDetailsScreen(props){
    const userSignin =useSelector(state=>state.userSignin);
const {userInfo} = userSignin;
 const [name , setName] =useState(userInfo.name);
const [email , setEmail] =useState(userInfo.email);

const [phone , setPhoneNumber]=useState(userInfo.phone);
const [lastName , setLastName]=useState(userInfo.lastName);
const [city , setCity] =useState(userInfo.city);
const [adress , setStreetAndBuilding] =useState(userInfo.adress);
const [floor , setFloor] =useState(userInfo.floor);
const [aptNum , setApartmentNumber] =useState(userInfo.aptNum);
const userRegister = useSelector(state=>state.userRegister);
// const {  loading ,userInfo , error} = userRegister;
// const [isUpdated , setisUpdated]=useState(false);




useEffect(() => {
    if(    (!userInfo)||(Object.keys(userInfo).length === 0) )
      {
          props.history.push('/');
      }
   
   
    return () => {
        //
    };
}, [userInfo]);


const dispatch=  useDispatch () ;
const submitHandler =  async(e)=> {e.preventDefault();
    const _id=userInfo._id
    
 dispatch(changeUserDetails({name, email ,  lastName , aptNum, floor , adress , city , phone , _id }));
 setTimeout(() => {
     window.location.reload();
 }, 300);


}


/* to be change to changeDetails Screen */

return <div className='container'>
    <div>
  
<form onSubmit={submitHandler}>

<div className='row'>
    <div dir='rtl' className='  col-12 signin-col'> 
     <div className='mycard'> 
<ul>
   <li>  <h3 dir='rtl'> שינוי פרטים</h3></li>
   <li> 
     
   </li>

   <li>
       <input value={name} dir='ltr' id='name' name='name' placeholder='שם' onChange={e=>setName(e.target.value)} type='name'/>
        
    </li>

    <li>
<input value={lastName} dir='ltr'  id= 'lastName' name='lastName' placeholder=' שם משפחה' onChange={e=>setLastName(e.target.value)} /> 
    </li>

        <li>
       <input value={email} dir='ltr' id='email' name='email' placeholder='אימייל' onChange={e=>setEmail(e.target.value)} type='email'/>
        
    </li>
   



    <li>
<input dir='ltr' value={phone} id= 'phoneNumber' name='phone' placeholder='טלפון ' onChange={e=>setPhoneNumber(e.target.value)} type='phone'/> 
    </li>
    
    <li>
<input  value={adress}   dir='ltr'  id= 'adress' name='adress' placeholder={userInfo.adress} onChange={e=>setStreetAndBuilding(e.target.value)} /> 
    </li>
    <li>
<input value={floor} dir='ltr'  id= 'floor' name='floor' placeholder=' קומה' onChange={e=>setFloor(e.target.value)} /> 
    </li>
    <li>
<input value={aptNum} dir='ltr'  id= 'aptNum' name='aptNum' placeholder='אימות מספר בית' onChange={e=>setApartmentNumber(e.target.value)} /> 
    </li>
    <li>
<input value={city} dir='ltr'  id= 'city' name='city' placeholder=' עיר' onChange={e=>setCity(e.target.value)} /> 
    </li>
    


    <li>
        <button  type='submit'  className=' signinbtn btn btn-primary'> יאללה , סיימתי</button>
    </li>

    
   
  
</ul>
</div>
</div>

</div>
</form>
</div>
</div>

    
}
export default ChangeDetailsScreen