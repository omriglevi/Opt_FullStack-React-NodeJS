import React, { useState } from 'react';

import {BrowserRouter,Route,Link} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/productsScreen';

import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ChangeDetailsScreen from './screens/ChangeDetailsScreen';
import ProfileScreen from './screens/ProfileScreen';
import AdminScreen from './screens/AdminScreen';
import {logOutUser} from './action/userActions';



function App() {
    const[isErrorUser , setIsErrorUser]=useState(false);
     
const userSignin =useSelector(state=>state.userSignin);
const {userInfo , error , loading} = userSignin;


    const logOut=()=>logOutUser();

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("openNav");
    console.log("Menu open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("openNav");
    console.log("Menu closed");
  }
  return (


<BrowserRouter> 

<div className="grid-container">
    {error&&logOut()}

    <header className="header"> 
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>

            {<Link to="/"> OGOptics </Link>}
        </div>
        <div className ="header-links">
    

            <Link to='/cart'>
            <a dir="rtl" >
                <i className="material-icons small shopping_basket" ></i>
                🛒
                סל הקניות </a>
              </Link>

            {

 (    (!userInfo) || (Object.keys(userInfo).length === 0) )?
                 <Link to='/signin'>
               
                👤 התחבר
                    
                    
                    </Link> 
                    :
                    <Link to={userInfo.isAdmin?'/adminProfile':'/profile'}>
                      
                            {userInfo.name} 👤
                      
                        
                        </Link>
            }
            

                 
        </div>
    </header>


    
    <aside dir="rtl" className="sidebar">
        <button  className="slidebar-button-closed" onClick={closeMenu}>X</button>
       
           
        <h3> סוגי עדשות</h3>
        <ul>
            <li>קטגוריה</li>                   
            <li>קטגוריה</li>
            <li>קטגוריה</li>
            <li>קטגוריה</li>
        </ul>
    
    
        
    
    
        
        </aside>
    
    
    
    
    <main className="main">
        <div className="content">
            <Route path="/payment" component={PaymentScreen}/>
         <Route path="/products/:id"  component={ProductScreen}                />
            <Route path='/products/manage' component={ProductsScreen} />
            <Route path="/"   exact={true} component={HomeScreen}              />
            <Route path= '/signin' component={SigninScreen} />
            <Route path = "/cart/:id?"  component={CartScreen}       />
            <Route path ='/register' component={RegisterScreen} />
            <Route path='/shipping' component={ShippingScreen} />
           <Route path='/placeorder' component={PlaceOrderScreen} />
           <Route path='/profile' component={ProfileScreen}/>
           <Route path='/changeDetails' component={ChangeDetailsScreen}/>
           <Route path='/adminProfile' component={AdminScreen}/>

           
        
              
        </div>
    
    </main>
    
    <footer className="footer">
        All right Reserved to OGOptics.
    </footer>
    
    
    
    </div>
    
    </BrowserRouter>
  );
}

export default App;
