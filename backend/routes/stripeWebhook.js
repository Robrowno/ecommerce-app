const express = require("express");
const Stripe = require("stripe");
const Order = require("../models/Order");

const router = express.Router();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

router.post("/webhook", express.raw({ type: "application/json" }), async (req, res) => {
	const sig = req.headers["stripe-signature"];
	let event;

	try {
		event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
	} catch (err) {
		console.error("Webhook signature verification failed:", err.message);
		return res.status(400).send(`Webhook Error: ${err.message}`);
	}

	if (event.type === "checkout.session.completed") {
		const session = event.data.object;

		const orderItems = session.metadata.orderItems ? JSON.parse(session.metadata.orderItems) : [];

		const userId = session.metadata.userId;
		const isValidUserId = typeof userId === "string" && userId.length > 0;

		const orderData = {
			user: isValidUserId ? userId : undefined,
			orderItems,
			paymentMethod: session.payment_method_types[0] || "card",
			totalPrice: session.amount_total / 100,
			isPaid: session.payment_status === "paid",
		};

		try {
			const newOrder = new Order(orderData);
			await newOrder.save();
			console.log("Order saved to MongoDB");
		} catch (dbError) {
			console.error("Failed to save order:", dbError);
		}
	}

	res.status(200).send("OK");
});

module.exports = router;
