import React , {useState} from 'react' ;
import {useSelector , useDispatch} from 'react-redux';
import {useEffect} from 'react' ;
import {Link} from 'react-router-dom';
import { signin } from '../action/userActions';




function Signinscreen(props){
   
const [email , setEmail] =useState('');
const [password , setPassword] =useState('');
const userSignin = useSelector(state=>state.userSignin);
const {loading , userInfo , error} = userSignin;

const dispatch=  useDispatch () ;
const submitHandler = (e)=> {e.preventDefault() ;
dispatch(signin(email,password));
}

useEffect(() => {
    if(userInfo) {
        props.history.push("/");
    }
    
    return () => {
        //
    };
}, [userInfo]);

return <div className='container'>
    <div>
   
    
<form onSubmit={submitHandler}>

<div className='row'>
    <div dir='rtl' className='  col-12 signin-col'> 
     <div className='mycard'> 
<ul>
   <li>  <h3 dir='rtl'> התחברות</h3></li>
   <li> 
       {loading && <div> Loading...</div>}
       {error && <div> {error} </div>}
   </li>
        <li>
       <input dir='ltr' id='email' name='email' placeholder='אימייל' onChange={e=>setEmail(e.target.value)} type='email'/>
        
    </li>
   
        <li>
<input dir='ltr'  id= 'password' name='password' placeholder='סיסמא' onChange={e=>setPassword(e.target.value)} type='password'/> 
    </li>

    <li>
        <button  type='submit' className=' signinbtn btn btn-primary'>כניסה</button>
    </li>
   
    <li> <Link to='api/register'>
       רוצה להרשם?
        </Link></li>
</ul>
</div>
</div>

</div>
</form>
</div>
</div>

    
}
export default Signinscreen