import React , {useState, useEffect} from 'react'   ;
import { Link } from 'react-router-dom';
import {useDispatch , useSelector}  from 'react-redux';
import axios from 'axios';
import { listProducts } from '../action/productActions';



{/*_____ HERE WE WRITE OUR HOME/MAIN COMPONENT SCREEN WICH WILL BE SHOWN WHEN U ENTER THE WEBSITE_ ___*/}
{/*___IT RENDERS ALL THE PRODUCTS AND SH0WS THEM    */}

function HomeScreen(props){

    
    const productList=useSelector(state=>state.productList);
    const {products , loading , error} =productList;
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(listProducts())
        return () => {
            //
        };
    }, [])



    return loading? <div> Loading...</div> :
    error? <div> {error} </div> :
     <ul className="products">
    {
        products.map(product=>
        
            <li className="list_items"> 
        <div className="product">
           
        
            <div className="product-name">
                <Link to={"/product/"+product._id}>   
                
                <img className="product-image" src={product.image} alt="product"/>  
                <div className='product-name'>   {product.name} </div>
                    
                
                
                 </Link>     {/*takes us to /product/id if we click on the img or the name*/}
            
            
            </div>
        <div className="product-brand"> {product.brand}</div>
            <div className="product-size">{product.size} </div>             
            <div >{product.category} </div>
        <div className="product-price">
              &#8362;
            {product.price}
            </div>
        <div className="product-id">{product._id}</div>
        <div className="product-quantity"> 
        
            
             <select>
            <option> 1</option>
            <option> 2</option>
            <option> 3</option>
            <option> 4</option>
            <option> 5</option>
            <option> 6</option>
            <option> 7</option>
            <option> 8</option>
            <option> 9</option>
            <option> 10</option>
            </select>    
            
            
        </div>

            <div>
                <button className="home-screen-addToBasket-btn">
                    +
                    הוסף לסל
                    
                </button>
            </div>

        </div>






    </li>
        )

    }
    
   
    </ul>

}

export default HomeScreen;