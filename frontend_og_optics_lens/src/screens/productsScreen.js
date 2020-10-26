import React , {useState} from 'react' ;
import {useSelector , useDispatch} from 'react-redux';
import {useEffect} from 'react' ;
import {Link} from 'react-router-dom';
import { signin } from '../action/userActions';
import { listProducts, saveProduct  , deleteProduct} from '../action/productActions';




export default function ProductsScreen(props){
const [modalVisible , SetModalVisible]=useState(false);
const [name , setName] =useState('');
const [id , setId] =useState('');
const [price , setPrice] =useState('');
const [image , setImage] =useState('');
const [brand , setBrand] =useState('');
const [category , setCategory] =useState('');
const [countInStock , setCountInStock] =useState('');
const [description , setDescription] =useState('');
const [subCategory , setsubCategory] =useState('');
const [prod_store_id , setProd_store_id]=useState('');
const productList=useSelector(state=>state.productList);
const productSave = useSelector(state=>state.productSave);
const productDelete = useSelector(state=>state.productDelete);
const {loading , products , error}=productList;
const {loading : loadingSave, success:successSave , error:errorSave} = productSave;
const {loading : loadingDelete, success:successDelete , error:errorDelete} = productDelete;
const dispatch=  useDispatch () ;

useEffect(() => {
    if(successSave)
    {
        SetModalVisible(false);
    }

    dispatch(listProducts());
    return () => {
        //
    };
}, [successSave , successDelete]);
const openModal= (product)=> {
    SetModalVisible(true);
    setId(product._id)
setName(product.name);
setPrice(product.price);
setImage(product.image);
setBrand(product.brand);
setCategory(product.category);
setCountInStock(product.countInStock);
setDescription(product.description);
setsubCategory(product.subCategory);
setProd_store_id(product.prod_store_id);

}


const submitHandler = (e)=> {e.preventDefault() ;
dispatch(saveProduct({ _id:id ,  name , price , image , brand , category ,
     countInStock , description , subCategory, prod_store_id}));
}

const deleteHandler= (product)=>{
    dispatch(deleteProduct(product._id))
}



return <div className='container'>
   
{modalVisible?<button onClick={()=>SetModalVisible(false)} className='btn-secondary' >
{
    (name || prod_store_id) ?
    " סגור את חלון עריכת המוצר"
    
    :

    " סגור את חלון הוספת המוצר"
}
     </button> 
:
<button onClick={()=>openModal({})} className='btn-primary' > הוספת מוצר חדש</button>}


    {modalVisible && <div>
   
    
<form id='myForm' onSubmit={submitHandler}>

<div className='row'>
    <div dir='rtl' className='  col-12 signin-col'> 
     <div className='mycard'> 
<ul>
   <li>  <h3 dir='rtl'>  { (name || prod_store_id) ?"ערוך מוצר" :  "הוסף מוצר"} </h3></li>
  

<li>
    {(loadingSave||loadingDelete) && <div>Loading...</div>}
{errorSave && <div>{errorSave}</div>}
{errorDelete && <div>{errorDelete}</div>}
</li>


        <li>
       <input required value={name} dir='ltr' id='name' name='name' placeholder='שם מוצר' onChange={e=>setName(e.target.value)} type='text'/>
        
    </li>
   

    <li>
       <input required value={price} dir='ltr' id='price' name='price' placeholder='מחיר' onChange={e=>setPrice(e.target.value)} type='Number'/>
        
    </li>


    <li>
       <input required value={image} dir='ltr' id='image' name='image' placeholder='תמונה' onChange={e=>setImage(e.target.value)} type='text'/>
        
    </li>



        <li>
<input  required value={brand} dir='ltr'  id= 'brand' name='brand' placeholder='מותג' onChange={e=>setBrand(e.target.value)} type='text'/> 
    </li>


    <li>
<input value={countInStock} dir='ltr'  id= 'countInStock' name='countInStock' placeholder='כמות במלאי' onChange={e=>setCountInStock(e.target.value)} type='Number'/> 
    </li>


    <li>
<input required value={category} dir='ltr'  id= 'category' name='category' placeholder='קטגוריה' onChange={e=>setCategory(e.target.value)} type='text'/> 
    </li>
    <li>
<textarea required value={description} dir='ltr'  id= 'description' name='description' placeholder='תיאור' onChange={e=>setDescription(e.target.value)} type='text'/> 
    </li>
    <li>
<input value={subCategory} dir='ltr'  id= 'subCategory' name='subCategory' placeholder='תת-קטגוריה' onChange={e=>setsubCategory(e.target.value)} type='text'/> 
    </li>

    <li>
<input required value={prod_store_id}  dir='ltr'  id= 'prod_store_id' name='prod_store_id' placeholder='מקט' onChange={e=>setProd_store_id(e.target.value)} type='text'/> 
    </li>

    <li>
        <button value='submit'  type='submit' className=' signinbtn btn btn-primary'> { (name || prod_store_id) ?"ערוך" : "הוסף"}</button>
    </li>
   
    
</ul>
</div>
</div>

</div>
</form>
</div>
}



<div className='col-12'>
<table  class="table">
<thead class="thead-dark">
<tr>
  <th scope="col">#</th>
  <th scope="col">ID</th>
  <th scope="col">מק״ט</th>
  <th scope="col">שם</th>
  <th scope="col">מותג</th>
  <th scope="col">קטגוריה</th>
  <th scope="col">מחיר</th>
  <th scope="col">תת-קטגוריה</th>
  <th scope="col">זמינות במלאי</th>
  <th scope="col">תאור המוצר</th>
  <th scope="col">תמונה</th>
  <th scope="col">פעולות</th>
</tr>
</thead>
<tbody>
{products.map((prdct,index)=>

(<tr> 
  <td scope="col">{index+1}</td>
  <td scope="col">{prdct._id}</td>
  <td scope="col">{prdct.prod_store_id}</td>
  <td scope="col">{prdct.name}</td>
  <td scope="col">{prdct.brand}</td>
<td scope="col">{prdct.category}</td>
  <td scope="col">{prdct.price}</td>
<td scope="col">{prdct.subCategory}</td>
  <td scope="col">{prdct.countInStock}</td>
 <td scope="col">{prdct.description}</td>
 <td scope="col">{prdct.image}</td>
   <td scope="col"> <button onClick={()=>openModal(prdct)} type='button' className="btn btn-info"> עריכה</button>
   <button type='button' className="btn btn-danger" onClick={()=>deleteHandler(prdct)}> מחיקה </button>
   </td>
 
  
 
  

  
  </tr>)

)}
</tbody>
</table>
</div>





</div>

    
}















