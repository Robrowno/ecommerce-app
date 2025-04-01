const express = require("express");
const router = express.Router();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const CLIENT_URL = process.env.CLIENT_URL;

router.post("/create-checkout-session", async (req, res) => {
	try {
		const { items } = req.body;

		if (!items || !Array.isArray(items)) {
			return res.status(400).json({ error: "Invalid or missing items array." });
		}

		const line_items = items.map((item) => ({
			price_data: {
				currency: "gbp",
				product_data: {
					name: item.name,
				},
				unit_amount: item.price * 100, // Convert £ to pence
			},
			quantity: item.quantity,
		}));

		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			mode: "payment",
			line_items,
			success_url: `${CLIENT_URL}/orders`,
			cancel_url: `${CLIENT_URL}/cart`,
		});

		return res.json({ url: session.url });
	} catch (error) {
		console.error("Stripe session error:", error);
		return res.status(500).json({ error: "Failed to create Stripe checkout session" });
	}
});

module.exports = router;
