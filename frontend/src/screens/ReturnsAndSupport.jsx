import React from "react";

const ReturnsAndSupport = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-10">
            <h1 className="text-3xl font-bold">Returns & Customer Support</h1>

            {/* Returns Policy */}
            <section>
                <h2 className="text-2xl font-semibold mb-2">Returns Policy</h2>
                <p>
                    If you're not satisfied with your purchase, you can return eligible items within <strong>30 days of delivery</strong>.
                </p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                    <li>Items must be unused and in original packaging.</li>
                    <li>All accessories and manuals must be included.</li>
                    <li>Customers are responsible for return shipping costs unless the item is faulty.</li>
                </ul>
            </section>

            {/* Refund Info */}
            <section>
                <h2 className="text-2xl font-semibold mb-2">Refunds</h2>
                <p>
                    Once your return is received and inspected, we will notify you via email. Approved refunds will be issued to your original payment method within <strong>5–7 business days</strong>.
                </p>
                <p className="mt-2">
                    Refunds may take additional time depending on your bank or payment provider.
                </p>
            </section>

            {/* Support Section */}
            <section>
                <h2 className="text-2xl font-semibold mb-2">Customer Support</h2>
                <p>
                    Need help? We're here for you. Our support team typically responds within <strong>24–48 hours</strong> on business days.
                </p>
                <p className="mt-2">
                    Reach out to us at <a href="mailto:cmdctrl-support@gmail.com" className="text-blue-600 underline">cmdctrl-support@gmail.com</a> or use our <a href="/contact" className="text-blue-600 underline">Contact Page</a>.
                </p>
            </section>
        </div>
    );
};

export default ReturnsAndSupport;
