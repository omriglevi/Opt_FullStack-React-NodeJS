import React , {useEffect} from 'react';
import { Link } from 'react-router-dom';
import {logOutUser} from '../action/userActions';
import {useSelector } from 'react-redux';



export default function ProfileScreen(props)  {

    const userSignin =useSelector(state=>state.userSignin);
    const {userInfo} = userSignin;


    useEffect(() => {
      if(    (!userInfo)||(Object.keys(userInfo).length === 0) )
      {
          props.history.push('/');
      }
        
        return () => {
            //
        };
    }, [userInfo]);

return (<div className='row profileWrapperRow mainWrapperProfile'>
<div className='col-4 profileBtn'>
<div className='row'>
<button className='btn-primary profileWrapperBtn' onClick={()=>{
    logOutUser();
    
}}>
    התנתק
</button>
</div>


<div className='row profileWrapperRow'> 
<Link className='profileWrapperBtn' to='/changeDetails'> 
<button className='btn-primary profileWrapperBtn'>
    עריכת פרטים
</button>
</Link>
</div>


<div className='row profileWrapperRow'>
<Link className='profileWrapperBtn' to='/orderHistory'> 
<button className='btn-primary profileWrapperBtn'>
    היסטוריית ההזמנות
</button>
</Link>
</div>


</div>
</div>

)











}