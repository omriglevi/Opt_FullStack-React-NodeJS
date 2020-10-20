import {USER_SIGNIN_FAILED , USER_SIGNIN_REQUEST , USER_SIGNIN_SUCCESS ,USER_REGISTER_FAILED , USER_REGISTER_REQUEST , USER_REGISTER_SUCCESS } from '../constants/userConstants'




function userSigninReducer (state= {} , action){
    
    switch (action.type) {

        case USER_SIGNIN_SUCCESS:
            return {loading: false , userInfo: action.payload};


        case USER_SIGNIN_REQUEST:
            return {loading:true};


        case USER_SIGNIN_FAILED:    
        return {loading:false , error:action.payload}
            
         
    
        default:
           return state ;
    }
}


function userRegisterReducer (state= {} , action){
    
    switch (action.type) {

        case USER_REGISTER_SUCCESS:
            return {loading: false , userInfo: action.payload};


        case USER_REGISTER_REQUEST:
            return {loading:true};


        case USER_REGISTER_FAILED:    
        return {loading:false , error:action.payload}
            
         
    
        default:
           return state ;
    }
}





export {userSigninReducer , userRegisterReducer} 