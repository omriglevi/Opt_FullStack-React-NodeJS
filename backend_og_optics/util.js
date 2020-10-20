
import jwt from 'jsonwebtoken';
import config from './config'

const getToken =  (user)=>{
    return jwt.sign({
        _id:user.id ,
        password:user.password ,
        email:user.email ,
        isAdmin:user.isAdmin 
    } ,config.JWT_SECRET , {
        expiresIn : '72h'
    })
}

export {
    getToken
}