/* This JavaScript code snippet is using the Mongoose library to interact with a MongoDB database.
Here's a breakdown of what the code is doing: */
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/e-com");
const ProductSchema = new mongoose.Schema({ Name: String, price: Number , Brand: String});

const IncertInDB = async () => {
    const ProductModel = mongoose.model('mobiles', ProductSchema);
    let data = new ProductModel({ Name: "iPhone 16 pro max", price: 2200 , Brand: 'Apple' });
    data = await data.save();
    
    console.log('data has sucess fully IncertInDB :' , data);
}


const updateInDB = async () => {
    const ProductModel = mongoose.model('mobiles', ProductSchema);
    const data = await ProductModel.updateOne({Name:'iPhone 12'},{
        $set:{price:123}
    })

    console.log('data has sucess fully updateInDB :', data );
}

const deleteInDB = async () => {
    const ProductModel = mongoose.model('mobiles', ProductSchema);
    const data = await ProductModel.deleteOne({Name:'iPhone 12'});
    console.log('data has sucess fully daleteInDB :', data );
}

const findInDB = async () => {
    const ProductModel = mongoose.model('mobiles', ProductSchema);
    const data = await ProductModel.find();
    console.log(data);
}



IncertInDB();
updateInDB();
deleteInDB();
findInDB();