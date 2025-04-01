import React from "react";

const Shipping = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-10">
            <h1 className="text-3xl font-bold">Shipping Options</h1>

            {/* Dispatch Info */}
            <section>
                <h2 className="text-2xl font-semibold mb-2">Order Processing</h2>
                <p>
                    Orders are typically processed within <strong>1-2 business days</strong>.
                    Orders placed on weekends or holidays will be processed the next working day.
                </p>
            </section>

            {/* Domestic Shipping */}
            <section>
                <h2 className="text-2xl font-semibold mb-2">Domestic Shipping (UK)</h2>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li><strong>Standard Shipping:</strong> 3–5 business days — £3.99</li>
                    <li><strong>Express Shipping:</strong> 1–2 business days — £6.99</li>
                    <li><strong>Free Shipping:</strong> Orders over £50 qualify for free standard shipping</li>
                </ul>
            </section>

            {/* International Shipping */}
            <section>
                <h2 className="text-2xl font-semibold mb-2">International Shipping</h2>
                <p>
                    We ship worldwide! International delivery times and costs vary depending on the destination.
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li><strong>Europe:</strong> 5–10 business days — from £9.99</li>
                    <li><strong>North America:</strong> 7–14 business days — from £12.99</li>
                    <li><strong>Rest of World:</strong> 10–20 business days — from £15.99</li>
                </ul>
                <p className="mt-2">
                    Customs fees may apply and are the responsibility of the customer.
                </p>
            </section>

            {/* Tracking & Support */}
            <section>
                <h2 className="text-2xl font-semibold mb-2">Tracking & Support</h2>
                <p>
                    All orders include a tracking number. Once shipped, you’ll receive an email with tracking details. If you encounter issues, feel free to <a href="/contact" className="text-blue-600 underline">contact us</a>.
                </p>
            </section>
        </div>
    );
};

export default Shipping;
