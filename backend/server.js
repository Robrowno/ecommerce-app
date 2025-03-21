const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

dotenv.config();

const app = express();

app.use("/ecomm-images", express.static(path.join(__dirname, "ecomm-images")));

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));

// Connect to MongoDB
if (process.env.NODE_ENV !== "test") {
	mongoose
		.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
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
