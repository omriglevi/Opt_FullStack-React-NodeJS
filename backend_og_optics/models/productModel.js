import mongoose from 'mongoose'


const productScheme = new mongoose.Schema(
    {
        name: {type : String , required : true },
        image : {type : String , required : true },
        brand : {type : String , required : true },
        price: {type : Number , default:0 , required : true },
        category: {type : String , required : true },
        countInStock: {type : Number , default:0, required : true },
        description: {type : String , required : true },
        subCategory: {type : String , required : true },
        prod_store_id:{type : String , required:true}
    }


);

const productModel=mongoose.model("Product", productScheme) ;

export default productModel ;