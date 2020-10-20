import React , {useState} from 'react' ;
import {useSelector , useDispatch} from 'react-redux';
import {useEffect} from 'react' ;
import {Link} from 'react-router-dom';
import {detailsProduct} from '../action/productActions'
import { LIST_OF_NUMBERS_OF_LENS } from '../constants/productConstants';


function ProductScreen(props){
   
const [qty , setQty] = useState(1) ;
const [ leftEyeNumber  , setLeftEyeNumber] =useState(1.25) ; 
const [ rightEyeNumber  , setRightEyeNumber] =useState(1.25) ;
const productDetails = useSelector(state => state.productDetails);
const {product , loading , error} = productDetails

const dispatch=  useDispatch () ;

useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
        //
    }
}, [])
/// this on on the buttom wich called handleAddToCart will redirect us to the api of cart with the added params
const handleAddToCart  = () =>  {
    props.history.push("/cart/" + props.match.params.id + "?qty=" +qty + "?leftEye="+leftEyeNumber + "?rightEye=" +rightEyeNumber)
}


    return <div className="productScreen-container">



    <div className="backToMainLink">
    <Link to="../" > 
<button>
&#8592;
חזרה לדף הראשי

</button> </Link>
    </div>

    {loading?  <div> Loading...</div> :
    error? <div>{error}</div> :




<div className='details'>

    <div className='details-image'> 
        
        <img src={product.image} alt='product'></img>
        
    </div>

    <div className ='details-info'>
         <ul>
              <li><h4> {product.name} </h4>     </li> 
              <li>{product.brand}</li>
              <li><b>     {product.price}   </b></li>
              <li>{product.description}</li>
        </ul>
   </div>


<div className='details-action'>
    

    <div className="eyesDetails">
        
        <div className="rightEyeDetails"> 
        <h3 > עין שמאל </h3>
        <ul>
        <li>מספר</li>
            <li> 


            <select value = {leftEyeNumber} onChange={ y=> setLeftEyeNumber(y.target.value)  } >
                    {
                        LIST_OF_NUMBERS_OF_LENS.map(y=> 
                        <option value= {y} > {y}</option> 
                            )
                    }
   

            </select> 



            
               

 
                
                
                </li>

        </ul>




        </div>
        


        <div className="leftEyeDetails"> 
        <h3 > עין ימין </h3>
        <ul>
        <li>מספר</li>
            <li> 

            
            <select value= {rightEyeNumber} onChange={x=> setRightEyeNumber(x.target.value) } >
                    { LIST_OF_NUMBERS_OF_LENS.map(x=> 
                        <option value={x} > {x} </option>
                        )}

                    </select> 

                
                
                </li>

        </ul>




        </div>

        </div>
        <ul>
       
        

       
       <li> מחיר: {product.price} </li>
       {product.countInStock > 0 ? <li>  זמין במלאי</li> :
       <li> אזל במלאי</li>
       
    }
       <li> כמות: 
            <select value={qty} onChange={ (e) => setQty(e.target.value)  }  >
           { [...Array(product.countInStock).keys()] .map( (e)=>
            <option value={e+1}> {e+1} </option>
            )   }
           </select>        </li>

       
           {product.countInStock >0 ?
            <li>
               <button className={"details-action-button"} onClick={handleAddToCart}>
                  הוסף לסל
                  &#43;
               </button>
</li>
               :
               <li>
               <button className={"redBtnOurOfStock"} >  אזל במלאי </button>
               


       </li>
       }
   </ul>

    
 </div>
   
    </div>
        }
    </div>
    }

export default ProductScreen;