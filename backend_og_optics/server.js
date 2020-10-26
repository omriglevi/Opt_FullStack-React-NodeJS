import express from 'express' ;
import data from './data'   ;
import dotenv from 'dotenv' ;
import config from './config';
import mongoose from 'mongoose' ;
import bodyParser from  'body-parser' ;
import userRoute from './routes/userRout' ;
import productsRoute from './routes/productRoute'



dotenv.config();

const mongodbUrl= config.MONGODB_URL ;
mongoose.connect(mongodbUrl , {
    useNewUrlParser:true ,
    useUnifiedTopology:true ,
    useCreateIndex:true
}).catch(error=> console.log(error.reason));

const app =express();
app.use(bodyParser.json());
app.use("/api/users" , userRoute);
app.use("/api/products" , productsRoute);

// app.get("/api/products/:id", (req,res)=>{
//     const productId = req.params.id ; 
//     const currentProduct= data.products.find(x=> x._id === productId ) ; 
// if (currentProduct)
// {
//     res.send(currentProduct);

// }
//    else
//    {
//        res.status(404).send({msg: " Product could not found !! "});
//    }

// }
// );


// app.get("/api/products", (req,res)=>{
  
//     res.send(data.products);

// }
// );



app.listen(5000, ()=>{
    
    console.log("SERVER I*S WORKING");
});