/* This JavaScript code snippet is using the Mongoose library to interact with a MongoDB database.
Here's a breakdown of what the code is doing: */
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/e-com");
const ProductSchema = new mongoose.Schema({ Name: String, price: Number , Brand: String});

const IncertINDB = async () => {
    const ProductModel = mongoose.model('mobiles', ProductSchema);
    let data = new ProductModel({ Name: "iPhone 16 pro max", price: 2200 , Brand: 'Apple' });
    data = await data.save();
    
    console.log('data has sucess fully IncertINDB :' , data);
}


