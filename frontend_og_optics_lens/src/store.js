import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from   'redux-thunk';
import {productDeleteReducer, productDetailsReducer, productListReducer, productSaveReducer} from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer';
import Cookies from 'js-cookie';
import {changeUserDetailsReducer, userRegisterReducer, userSigninReducer } from './reducers/userReducer';

const cartItems= Cookies.getJSON("cartItems") || [] ;
const userInfo= Cookies.getJSON("userInfo") || {} ;
const shipping= Cookies.getJSON("shipping") || {} ;

const initialState={cart : {cartItems , shipping }   , userSignin: {userInfo}  };



const reducer = combineReducers({
    productList: productListReducer , 
    productDetails: productDetailsReducer   , 
    cart: cartReducer ,
    userSignin : userSigninReducer ,
    userRegister: userRegisterReducer,
    productSave : productSaveReducer ,
    productDelete:productDeleteReducer , 
    changeUserDetails:changeUserDetailsReducer
} );

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ; 

const store=createStore( reducer , initialState , composeEnchancer(applyMiddleware(thunk)) ) ;


export default store;