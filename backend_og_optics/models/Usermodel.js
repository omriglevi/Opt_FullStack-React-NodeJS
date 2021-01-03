import mongoose from 'mongoose'

const userScheme = new mongoose.Schema(
    {
        name: {type : String , required : true },
        lastName: {type : String , required : true },
        email: {type: String , required : true , unique:true , dropDups:true}   ,
        password: {type :String , required: true , default:''}   ,
        phone : {type :String , required:false , default:''} , 
        floor : {type :String , required:false , default:''}  , 
        adress : {type :String , required:false , default:''}  , 
        city : {type :String , required:false , default:''}  , 
        aptNum: {type :String , required:false , default:''} ,
        isAdmin: {type: Boolean , required:true , default:false}
    }
);

const userModel=mongoose.model("User", userScheme) ;

export default userModel ;