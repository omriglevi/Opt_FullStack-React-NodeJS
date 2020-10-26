import express from 'express';
import User from '../models/Usermodel';
import jwt from 'jsonwebtoken';
import {getToken} from '../util' ; 



const router=express.Router() ;
const ptrGetToken=getToken;

router.post('/signin' , async (req,res)=>{
    const signinUser=await User.findOne({
        email:req.body.email ,
        password: req.body.password 
    });
    if(signinUser){
        res.send({
            _id:signinUser.id ,
            name:signinUser.name ,
            email:signinUser.email,
            isAdmin: signinUser.isAdmin ,
            token: ptrGetToken(signinUser)
            
        } );
      
    }

    else {
        res.status(401).send({msg:'invalid email or password'})
    }

})


router.post('/register' , async (req,res)=>{
    const user = User ({
        name : req.body.name , 
        email : req.body.email , 
        password : req.body.password,
        
    });
   
    const newUser = await user.save() ;
   
    res.send({
        _id:newUser.id ,
        name:newUser.name ,
        email:newUser.email,
        isAdmin: newUser.isAdmin ,
        token: ptrGetToken(newUser)
    });
   

})











router.get("/createadmin" , async (req , res )=> {
    try {const user = new User({
        name: 'Omri' ,
        email: 'o@l.com' ,
        password: '1234' ,
        isAdmin: true 

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