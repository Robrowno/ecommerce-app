import { useAuth } from "../context/AuthContext";

const Profile = () => {
	const { user } = useAuth();

	if (!user) return <p>Loading...</p>;

	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded">
			<h2 className="text-2xl font-bold mb-6 text-center">Orders</h2>
		</div>
	);
};

export default Profile;
