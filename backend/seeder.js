const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config();

const products = [
  {
    name: "Sample Product 1",
    description: "This is a sample product.",
    price: 99.99,
    category: "Electronics",
    brand: "Brand A",
    image: "https://via.placeholder.com/150",
    countInStock: 10,
  },
  {
    name: "Sample Product 2",
    description: "Another sample product.",
    price: 49.99,
    category: "Home",
    brand: "Brand B",
    image: "https://via.placeholder.com/150",
    countInStock: 5,
  },
];

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("✅ Sample products added!");
    process.exit();
  })
  .catch((error) => {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  });
