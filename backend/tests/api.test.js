const request = require("supertest");
const mongoose = require("mongoose");
const Product = require("../models/Product");
const app = require("../server");

describe("API Tests", () => {
  let server;

  beforeAll(async () => {
    process.env.PORT = "5001"; // Use a different port for tests
    server = app.listen(process.env.PORT, () => console.log(`Test server running on port ${process.env.PORT}`));

    console.log("⏳ Waiting for MongoDB connection...");

    const MONGO_URI = process.env.NODE_ENV === "test"
      ? "mongodb://127.0.0.1:27017/ecommerce-test" // Use local test DB
      : process.env.MONGO_URI; // Use Docker Mongo in production

    await mongoose.connect(MONGO_URI);

    console.log("✅ MongoDB connected for tests");

    // Insert sample products automatically
    await Product.deleteMany();
    await Product.insertMany([
      { name: "Sample Product 1", description: "Test product", price: 99.99, category: "Electronics", brand: "Brand A", image: "test.jpg", countInStock: 10 },
      { name: "Sample Product 2", description: "Another test product", price: 49.99, category: "Home", brand: "Brand B", image: "test2.jpg", countInStock: 5 }
    ]);
  }, 60000); // Increase Jest timeout to 60 seconds

  afterAll(async () => {
    console.log("✅ Closing MongoDB connection after tests");
    await mongoose.connection.close();
    server.close();
  });

  it("should return 200 for the home route", async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("API is running...");
  });

  it("should fetch all products", async () => {
    const res = await request(server).get("/api/products");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
