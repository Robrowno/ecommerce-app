const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config();

const products = [
  // Mobile Phones
  { name: "iPhone 14 Pro", description: "Latest Apple flagship phone.", price: 999.99, category: "Mobile Phones", brand: "Apple", image: "/ecomm-images/iphone.jpeg", countInStock: 15 },
  { name: "Samsung Galaxy S23 Ultra", description: "Powerful Samsung device with S-Pen.", price: 1199.99, category: "Mobile Phones", brand: "Samsung", image: "/ecomm-images/samsungs23ultra.jpg", countInStock: 10 },
  { name: "Google Pixel 7 Pro", description: "Google's AI-powered smartphone.", price: 899.99, category: "Mobile Phones", brand: "Google", image: "/ecomm-images/googlepixelpro.jpeg", countInStock: 8 },
  { name: "OnePlus 11", description: "Fast and smooth performance.", price: 749.99, category: "Mobile Phones", brand: "OnePlus", image: "/ecomm-images/onepluss11.jpeg", countInStock: 12 },
  { name: "Xiaomi 13 Pro", description: "Affordable flagship with high-end features.", price: 699.99, category: "Mobile Phones", brand: "Xiaomi", image: "/ecomm-images/xiaomi13pro.jpg", countInStock: 20 },
  { name: "Sony Xperia 1 IV", description: "Pro-level photography features.", price: 1099.99, category: "Mobile Phones", brand: "Sony", image: "/ecomm-images/sonyxperia1.avif", countInStock: 5 },
  { name: "Asus ROG Phone 7", description: "Gaming-focused smartphone with high refresh rate.", price: 999.99, category: "Mobile Phones", brand: "Asus", image: "/ecomm-images/asus_rog.jpg", countInStock: 7 },
  { name: "Motorola Edge 30 Ultra", description: "Sleek design and fast charging.", price: 799.99, category: "Mobile Phones", brand: "Motorola", image: "/ecomm-images/motorola_edge.jpg", countInStock: 9 },
  { name: "Nokia X30", description: "Durable and reliable smartphone.", price: 499.99, category: "Mobile Phones", brand: "Nokia", image: "/ecomm-images/nokiax30.webp", countInStock: 14 },
  { name: "Realme GT Neo 5", description: "Great performance for its price.", price: 599.99, category: "Mobile Phones", brand: "Realme", image: "/ecomm-images/realmegtneo5.jpg", countInStock: 11 },
  { name: "Oppo Find X5 Pro", description: "Premium smartphone with an excellent camera.", price: 949.99, category: "Mobile Phones", brand: "Oppo", image: "/ecomm-images/oppofindx5pro.webp", countInStock: 10 },
  { name: "Vivo X90 Pro", description: "Flagship phone with Zeiss optics.", price: 899.99, category: "Mobile Phones", brand: "Vivo", image: "/ecomm-images/vivox90pro.jpg", countInStock: 12 },

  // Laptops
  { name: "MacBook Pro 16", description: "High-end Apple laptop for professionals.", price: 2499.99, category: "Laptops", brand: "Apple", image: "/ecomm-images/macbookpro16.jpeg", countInStock: 6 },
  { name: "Dell XPS 15", description: "Sleek design with powerful internals.", price: 1899.99, category: "Laptops", brand: "Dell", image: "/ecomm-images/dellxps15.jpg", countInStock: 9 },
  { name: "HP Spectre x360", description: "Convertible laptop with a premium build.", price: 1699.99, category: "Laptops", brand: "HP", image: "/ecomm-images/hp_spectrex360.jpg", countInStock: 7 },
  { name: "Lenovo ThinkPad X1 Carbon", description: "Ultralight and business-focused.", price: 1799.99, category: "Laptops", brand: "Lenovo", image: "/ecomm-images/lenovothinkpadx1carbon.webp", countInStock: 5 },
  { name: "Asus ROG Zephyrus G14", description: "Compact and powerful gaming laptop.", price: 1599.99, category: "Laptops", brand: "Asus", image: "/ecomm-images/asusrog_ZephyrusG14_laptop.jpg", countInStock: 10 },
  { name: "Acer Predator Helios 300", description: "Great performance for gaming and productivity.", price: 1399.99, category: "Laptops", brand: "Acer", image: "/ecomm-images/acerpredatorhelios300.jpg", countInStock: 12 },
  { name: "MSI Stealth 15M", description: "Thin and lightweight gaming laptop.", price: 1499.99, category: "Laptops", brand: "MSI", image: "/ecomm-images/msi_stealth15m.webp", countInStock: 8 },
  { name: "Razer Blade 14", description: "Premium gaming laptop with high refresh rate.", price: 1999.99, category: "Laptops", brand: "Razer", image: "/ecomm-images/Razer_Blade_14.webp", countInStock: 4 },
  { name: "Samsung Galaxy Book 3 Pro", description: "Slim and stylish with AMOLED display.", price: 1599.99, category: "Laptops", brand: "Samsung", image: "/ecomm-images/samsunggalaxybook3pro.jpg", countInStock: 11 },
  { name: "Microsoft Surface Laptop 5", description: "Sleek Windows laptop with touch display.", price: 1499.99, category: "Laptops", brand: "Microsoft", image: "/ecomm-images/microsoftsurfacelaptop5.jpg", countInStock: 6 },
  { name: "Alienware m15 R7", description: "High-performance gaming laptop.", price: 2199.99, category: "Laptops", brand: "Alienware", image: "/ecomm-images/alienware_m15r7.jpg", countInStock: 3 },
  { name: "Alienware x17 R2", description: "High-performance gaming laptop with advanced cooling.", price: 2499.99, category: "Laptops", brand: "Alienware", image: "/ecomm-images/alienware_x17r2.jpg", countInStock: 5 },
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
