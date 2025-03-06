<<<<<<< HEAD
require("dotenv").config();

=======
>>>>>>> 717e541 (changes)
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

dotenv.config();

const app = express();

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);


// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));

<<<<<<< HEAD
app.use("/ecomm-images", express.static(path.join(__dirname, "ecomm-images")));

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);


// Ensure MONGO_URI is loaded
if (!process.env.MONGO_URI) {
  console.error("❌ ERROR: MONGO_URI is not defined. Check your .env file!");
  process.exit(1);
} else {
  console.log("✅ MONGO_URI loaded:", process.env.MONGO_URI);
=======
// Connect to MongoDB
if (process.env.NODE_ENV !== "test") {
  mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("✅ MongoDB connected"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));
>>>>>>> 717e541 (changes)
}

// Sample Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}

module.exports = app;
