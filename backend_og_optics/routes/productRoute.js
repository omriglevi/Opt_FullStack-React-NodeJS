import express from 'express';
import Product from '../models/productModel';





const router=express.Router() ;



router.delete("/:id" , async (req , res)=>{
    const deletedProduct=Product.findById(req.params.id);
    if(deletedProduct)
    {
        await deletedProduct.remove();
        res.send({Message:' Product Deleted'})
    }
   else
   {
       res.send("Error in Deletation") ;
   }
})








router.get("/:id" , async (req , res)=>{
    const product=await Product.findById(req.params.id);
    res.send(product);
});

router.get("/" , async (req , res)=>{
    const products=await Product.find({});
    res.send(products);
});

router.post("/" , async (req , res)=>{
    const product=new Product({
        name: req.body.name   ,
        image : req.body.image , 
        brand :req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock ,
        description: req.body.description,
        subCategory: req.body.subCategory,
        prod_store_id: req.body.prod_store_id,
    });

    
    const newProduct = await product.save() ;
    if (newProduct)
    {
       return res.status(201).send({msg:'NEW Product Created' , data:newProduct} )
    }
    else
    return res.status(500).send({msg: ' Error In creating product'})
})


router.put("/:id" , async (req , res)=>{
    const productId=req.params.id ; 
    

    const product=await Product.findById(req.params.id);
  
    if(product){
        product.name= req.body.name   ;
        product.image = req.body.image ;
        product.brand =req.body.brand ;
        product.price=req.body.price ;
        product.category= req.body.category ;
        product.countInStock= req.body.countInStock  ;
        product.description =req.body.description ;
        product.subCategory =req.body.subCategory ;
        product.prod_store_id= req.body.prod_store_id ;
        const updatedProduct = await product.save() ;
    if (updatedProduct)
    {
       return res.status(200).send({msg:' Product Updated' , data:updatedProduct} );
    }
    else
    return res.status(500).send({msg: ' Error In updating product'});
    }
   
}
    
    
)

export default router;