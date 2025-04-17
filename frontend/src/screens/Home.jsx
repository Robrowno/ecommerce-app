
import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import RINGS from 'vanta/dist/vanta.rings.min';
import axios from 'axios';
import Testimonials from '../components/Testimonials';
import InfoSection from '../components/InfoColumns';


export default function Home() {

	const [vantaEffect, setVantaEffect] = useState(null);
	const vantaRef = useRef(null);

	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(RINGS({
				el: vantaRef.current,
				THREE,
				mouseControls: true,
				touchControls: true,
				gyroControls: false,
				minHeight: 200.00,
				minWidth: 200.00,
				scale: 1.0,
				scaleMobile: 1.0
			}));
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	const [laptops, setLaptops] = useState([]);
	const [phones, setPhones] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const { data } = await axios.get("http://localhost:5001/api/products");
				console.log(data);
				setLaptops(data.filter((product) => product.category === "Laptops").slice(0, 3));
				setPhones(data.filter((product) => product.category === "Mobile Phones").slice(0, 3));
			} catch (error) {
				console.error("Error fetching products:", error);
			}
		};

		fetchProducts();
	}, []);


	return (
		<div>
			<div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-gray-900">
				<img src="../../public/hero-image.jpg" alt="Hero image of a laptop and mobile phone"
					className="absolute inset-0 w-full h-full object-cover opacity-50"
				/>

				<div className="relative text-center px-4">
					<h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
						Welcome to CmdCtrl<span className="blink ms-1">|</span>
					</h1>
					<p className="text-sm sm:text-lg md:text-xl text-gray-200 mt-2">
						The best place to buy electronics
					</p>
					<Link to="/products"
						className="mt-4 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300">
						Shop Now
					</Link>
				</div>
			</div>


			<div className="p-6">
				<h2 className="text-2xl font-bold mb-4">Our Recommended Laptops</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{laptops.map((laptop, index) => (
						<div key={index} className="border rounded-lg p-4 shadow-md">
							<img src={`http://localhost:5001${laptop.image}`} alt={laptop.name} className="w-full h-32 object-cover rounded" />
							<h3 className="mt-2 text-lg font-semibold">{laptop.name}</h3>
							<p className="text-gray-700">{laptop.price}</p>
							<Link to={`/product/${laptop._id}`} className="flex justify-end">
								<button className=' bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300'>View</button>
							</Link>
						</div>
					))}
				</div>

				<h2 className="text-2xl font-bold mt-8 mb-4">Our Recommended Phones</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
					{phones.map((phone, index) => (
						<div key={index} className="border rounded-lg p-4 shadow-md">
							<img src={`http://localhost:5001${phone.image}`} alt={phone.name} className="w-full h-32 object-cover rounded" />
							<h3 className="mt-2 text-lg font-semibold">{phone.name}</h3>
							<p className="text-gray-700">{phone.price}</p>
							<Link to={`/product/${phone._id}`} className="flex justify-end">
								<button className=' bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300'>View</button>
							</Link>
						</div>
					))}
				</div>
			</div>

			{/* Divider Section */}
			<div className="relative w-full h-52 bg-gradient-to-r from-gray-800 to-gray-900 shadow-md flex items-center justify-center px-6">
				<div className="text-center text-white">
					<h3 className="text-3xl md:text-4xl font-bold mb-3">View Our Product Range</h3>
					<Link to="/products" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300">
						Shop Now
					</Link>
				</div>
			</div>


			<div className='bg-gradient-to-t from-gray-900 via-gray-900/95 to-white mt-11 pb-10'>
				<Testimonials />
				<InfoSection />
			</div>

			<div ref={vantaRef} className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center bg-gray-900">
				<div className="relative w-full px-6 flex justify-start">
					<div className="max-w-xl text-left">
						<h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
							The online home of the best technology<span className="blink ms-1">|</span>
						</h3>
						<p className="text-white mt-2">Everything you need, just a click away.</p>
					</div>
				</div>
			</div>

		</div>
	)
}

