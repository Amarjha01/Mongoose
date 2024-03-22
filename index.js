const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/e-com");
    const ProductSchema = new mongoose.Schema({ Name: String, price: Number });

    const ProductModel = mongoose.model('product', ProductSchema);
    let data = new ProductModel({ Name: "iPhone 12", price: 1300 });
    data = await data.save();
}

main();
