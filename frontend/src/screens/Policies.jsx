import React from "react";

const Policies = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-10">
            <h1 className="text-3xl font-bold">Our Policies</h1>

            {/* Terms and Conditions */}
            <section>
                <h2 className="text-2xl font-semibold mb-2">Terms and Conditions</h2>
                <p>
                    By using our website, you agree to abide by our terms and conditions. This includes proper use of the site, respect for intellectual property, and adherence to purchasing and account guidelines.
                </p>
                <p className="mt-2">
                    We reserve the right to modify these terms at any time. Continued use of our services indicates acceptance of any updated terms.
                </p>
            </section>

            {/* Privacy Policy */}
            <section>
                <h2 className="text-2xl font-semibold mb-2">Privacy Policy</h2>
                <p>
                    We collect only the personal information necessary to fulfill your orders, provide customer support, and improve your experience on our website.
                </p>
                <p className="mt-2">
                    Your data is never sold or shared with third-party marketers. All payments are processed securely through trusted gateways.
                </p>
            </section>

            {/* Data Protection */}
            <section>
                <h2 className="text-2xl font-semibold mb-2">Data Protection</h2>
                <p>
                    We are committed to protecting your data under applicable data protection laws, including GDPR if you're based in the UK or EU.
                </p>
                <p className="mt-2">
                    You have the right to access, modify, or delete your data at any time. Contact our support team if you'd like to exercise your rights.
                </p>
            </section>
        </div>
    );
};

export default Policies;
