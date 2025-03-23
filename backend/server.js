const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

dotenv.config();

const app = express();

// Middleware 
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(morgan("dev"));

// Static files
app.use("/ecomm-images", express.static(path.join(__dirname, "ecomm-images")));

// Routes
const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// Connect to MongoDB
if (process.env.NODE_ENV !== "test") {
	mongoose
		.connect(process.env.MONGO_URI)
		.then(() => console.log("✅ MongoDB connected"))
		.catch((err) => console.error("❌ MongoDB connection error:", err));
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
