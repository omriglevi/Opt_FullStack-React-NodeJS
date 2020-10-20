import React from 'react';

import {BrowserRouter,Route,Link} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';



function App() {
const userSignin =useSelector(state=>state.userSignin);
const {userInfo} = userSignin;
    
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
    

    <header className="header"> 
        <div className="brand">
            <button onClick={openMenu}>
                &#9776;
            </button>

            {<Link to="/"> OGOptics </Link>}
        </div>
        <div className ="header-links">
    
            <a dir="rtl" href="cart.html">
                <i className="material-icons small shopping_basket" ></i>
                🛒
                סל הקניות </a>
              

            {
                !userInfo? <Link to='/signin'>
               
                👤 התחבר
                    
                    
                    </Link> 
                    :
                    <Link to='/profile'>
                      
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
         <Route path="/product/:id"  component={ProductScreen}                />
            <Route path="/"   exact={true} component={HomeScreen}              />
            <Route path= '/signin' component={SigninScreen} />
            <Route path = "/cart/:id?"  component={CartScreen}       />
            <Route path ='/register' component={RegisterScreen} />
              
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
