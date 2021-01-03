import express from 'express';
import User from '../models/Usermodel';
import jwt from 'jsonwebtoken';
import {getToken} from '../util' ; 




const router=express.Router() ;
const ptrGetToken=getToken;

router.put("/changeDetails/:id" , async (req , res)=>{




    const userId=req.params.id ; 
   
    
    const user =await User.findById(userId);
        user.name= req.body.name   ;
        user.lastName = req.body.lastName ;
        user.email =req.body.email ;
        user.phoneNum= req.body. phoneNumber  ;
        user.city= req.body.city  ;
        user.adress =req.body.adress ;
        user.floor =req.body.floor ;
        user.aptNum= req.body.aptNum ;
        const updatedUser= await user.save() ;
    if (updatedUser)
    {
       return res.status(200).send(updatedUser );
    }
    else
    {
    return res.status(500).send({msg: ' Error In updating user details'});
    }
   
})




router.post('/signin' , async (req,res)=>{
    const signinUser=await User.findOne({
        email:req.body.email ,
        password: req.body.password 
    });
    if(signinUser){
        res.send({
            _id:signinUser.id ,
            name:signinUser.name ,
        lastName : signinUser.lastName , 
            email:signinUser.email,
            phone : signinUser.phone , 
            floor : signinUser.floor , 
            adress : signinUser.adress , 
            city : signinUser.city , 
            aptNum:signinUser.aptNum,
            isAdmin: signinUser.isAdmin ,
            
            token: ptrGetToken(signinUser)
            
        } );
        
      
    }

    else {
        res.status(401).send({msg:'invalid email or password'}) ;
        
        
    }

})


router.post('/register' , async (req,res)=>{
    const user = User ({
        name : req.body.name , 
        lastName : req.body.lastName , 
        email : req.body.email , 
        password : req.body.password,
        phone : req.body.phone , 
        floor : req.body.floor , 
        adress : req.body.adress , 
        city : req.body.city , 
        aptNum:req.body.aptNum
        
        
    });
   
    const newUser = await user.save() ;
    if(newUser)
    {
        res.send({
        // _id:newUser.id ,
        // name:newUser.name ,
        // lastName : newUser.lastName , 
        // email:newUser.email,
        // isAdmin: newUser.isAdmin ,
        // phone : newUser.phone , 
        // floor : newUser.floor , 
        // adress : newUser.adress , 
        // city : newUser.city , 
        // apartment:newUser.aptNum,
        isLogged:true , 
        token: ptrGetToken(newUser)
    });
  
    }   

    else{
        res.status(401).send({mag:'coulnt save user'})
    }

   
    
})











router.post("/createadmin" , async (req , res )=> {
    try {
        const user = new User({
        name: 'Omri' ,
        email: 'om@1.co' ,
        password: '1234' ,
        isAdmin: true ,
        lastName :'omri', 
        phone : 'omri', 
        floor : 'omri' , 
        adress : 'om', 
        city : 'om' , 
        aptNum:'om'

    });

const newUser=await user.save();
res.status(201).send(newUser) ;
    } 
    catch (error) 
    { 
        res.send({msg: error.message }) ;
    }

}    );

export default router;