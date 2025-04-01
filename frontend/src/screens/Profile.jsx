import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();

  if (!user) return <p>Loading...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">User Profile</h2>

      <div className="flex flex-col items-center space-y-4">
        {/* Profile Icon */}
        <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-4xl">
          👤
        </div>

        {/* Display Name */}
        <div>
          <p className="text-lg font-medium">Name:</p>
          <p className="text-gray-700">{user.displayName || "No name set"}</p>
        </div>

        {/* Email */}
        <div>
          <p className="text-lg font-medium">Email:</p>
          <p className="text-gray-700">{user.email}</p>
        </div>


      </div>
    </div>
  );
};

export default Profile;
