

import Axios from 'axios';
import Cookies from 'js-cookie'
import {USER_CHANGE_DETAILS_SUCCESS, USER_CHANGE_DETAILS_FAILED ,USER_CHANGE_DETAILS_REQUEST  ,USER_SIGNIN_FAILED , USER_SIGNIN_REQUEST , USER_SIGNIN_SUCCESS ,USER_REGISTER_FAILED , USER_REGISTER_REQUEST , USER_REGISTER_SUCCESS } from '../constants/userConstants'

const logOutUser = e=>{
    Cookies.remove('userInfo');
    setTimeout(() => {
        window.location.reload();
    }, 300);
    
} 

const changeUserDetails =( {name, email ,  lastName , aptNum, floor , adress , city , phone , _id }) => async dispatch =>{
    try{
        dispatch({type:USER_CHANGE_DETAILS_REQUEST, payload: {name, email ,  lastName , aptNum, floor , adress , city , phone , _id } });
        // const {userSignin : {userInfo }} = getState();
        
    
      
       
            const {data} = await Axios.put('/api/users/changeDetails/'+_id , {name, email ,  lastName , aptNum, floor , adress , city , phone , _id }) ;
            dispatch({type:USER_CHANGE_DETAILS_SUCCESS , payload:data} );
            Cookies.remove('userInfo');
            Cookies.set('userInfo' , JSON.stringify(data));
        
    }
    catch (error) 
    {
    dispatch({type:USER_CHANGE_DETAILS_FAILED , payload:error.message});
    }
    
    }
















 const signin = (email,password)=>async dispatch=>{
     dispatch({ type: USER_SIGNIN_REQUEST , payload:{email,password }});
     try {
         const {data}= await Axios.post("/api/users/signin" , {email , password});
         dispatch({type:USER_SIGNIN_SUCCESS , payload:data});

         Cookies.set('userInfo' , JSON.stringify(data));
     }
     catch(error){
        dispatch({type:USER_SIGNIN_FAILED , payload:error.message});
     }
 }


 const register = (name ,email,password ,  lastName , floor , adress , city, aptNum , phone)=>async dispatch=>{
    dispatch({ type: USER_REGISTER_REQUEST, payload:{name, email,password ,  lastName , floor , adress , city , phone , aptNum }});
    try {
        const {data}= await Axios.post("/api/users/register" , {name, email , password , lastName , floor , adress , city , phone , aptNum} );
        dispatch({type:USER_REGISTER_SUCCESS , payload:data});
        Cookies.set('userInfo' , JSON.stringify(data));
    }
    catch(error){
       dispatch({type:USER_REGISTER_FAILED , payload:error.message});
    }
}





 export {signin , register , changeUserDetails , logOutUser }