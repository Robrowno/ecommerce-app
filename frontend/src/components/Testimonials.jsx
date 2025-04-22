import React from "react";

const testimonials = [
    { name: "John D.", review: "Best laptop store ever!", rating: 5 },
    { name: "Sarah W.", review: "Great customer service and fast shipping!", rating: 4 },
    { name: "Michael T.", review: "Amazing quality and great prices!", rating: 5 },
];

const Testimonials = () => {
    return (
		<div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-center mb-5">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                        <p className="text-lg">⭐ {testimonial.rating} / 5</p>
                        <p className="text-gray-600 italic">"{testimonial.review}"</p>
                        <p className="mt-2 text-gray-800 font-semibold">- {testimonial.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
