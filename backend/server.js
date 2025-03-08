require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(morgan("dev"));

app.use("/ecomm-images", express.static(path.join(__dirname, "ecomm-images")));

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);


// Ensure MONGO_URI is loaded
if (!process.env.MONGO_URI) {
  console.error("❌ ERROR: MONGO_URI is not defined. Check your .env file!");
  process.exit(1);
} else {
  console.log("✅ MONGO_URI loaded:", process.env.MONGO_URI);
}

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
