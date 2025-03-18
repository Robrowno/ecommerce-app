import React from "react";
import { Link } from "react-router-dom";

const InfoSection = () => {
    return (
        <div className="mt-10 bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Column 1 - Policies */}
                <div className="text-center flex flex-col justify-between min-h-[250px] p-5 bg-white rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">📜 Our Policies</h3>
                    <p className="text-gray-600 flex-grow">Read our terms, conditions, and privacy policies.</p>
                    <Link to="/policies" className="text-blue-600 hover:underline mt-2">
                        Learn More →
                    </Link>
                </div>

                {/* Column 2 - Shipping Info */}
                <div className="text-center flex flex-col justify-between min-h-[250px] p-5 bg-white rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">🚚 Shipping Options</h3>
                    <p className="text-gray-600 flex-grow">We offer fast and reliable shipping worldwide.</p>
                    <Link to="/shipping" className="text-blue-600 hover:underline mt-2">
                        View Options →
                    </Link>
                </div>

                {/* Column 3 - Returns & Support */}
                <div className="text-center flex flex-col justify-between min-h-[250px] p-5 bg-white rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">🔄 Returns & Support</h3>
                    <p className="text-gray-600 flex-grow">Need help? Learn about returns and customer support.</p>
                    <Link to="/returns" className="text-blue-600 hover:underline mt-2">
                        Get Support →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
