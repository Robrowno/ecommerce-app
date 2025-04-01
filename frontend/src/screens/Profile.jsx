import { useAuth } from "../context/AuthContext";

const Profile = () => {
  const { user, logout } = useAuth();

  if (!user) return <p className="text-center mt-10 text-gray-500">Loading profile...</p>;

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md text-center border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">User Profile</h2>

        {/* Profile Image */}
        <div className="w-32 h-32 mx-auto mb-6">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="User profile"
              className="w-32 h-32 rounded-full object-cover border border-gray-300 shadow"
            />
          ) : (
            <span className="text-6xl">👤</span>
          )}
        </div>

        {/* User Info */}
        <div className="text-left space-y-4 px-4">
          <div>
            <p className="text-gray-700 font-semibold">Name:</p>
            <p className="text-gray-800">{user.displayName || "Not set"}</p>
          </div>
          <div>
            <p className="text-gray-700 font-semibold">Email:</p>
            <p className="text-gray-800">{user.email}</p>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="mt-8 w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
