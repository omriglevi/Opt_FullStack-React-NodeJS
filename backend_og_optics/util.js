
import jwt from 'jsonwebtoken';
import config from './config'

 export const getToken =  (user)=>{
    return jwt.sign({
        _id:user.id ,
        password:user.password ,
        email:user.email ,
        isAdmin:user.isAdmin 
    } ,config.JWT_SECRET , {
        expiresIn : '72h'
    })
}



 export const isAuth = (req , res , next)=>{
    const token=req.header.authorization;
    if(token)
    {
        const onlyToken=token.slice(7, token.length);
        jwt.verify( onlyToken , config.JWT_SECRET , (err , decode)=>{
            if(err)
            {
                return res.status(401).send({msg:'Invalid Token'});
            }
             else
            req.user=token ; 
            next();
            return
            
        } );
    }
    return res.status(401).send({msg: 'Token is not supplied'})

}

export const  isAdmin= (req , res , next) => {
    if(req.user && req,user,isAdmin)
    {
        return next();
    }
    else
    return res.status(401).send({msg:'Admin Token Is not Valid'});
}

