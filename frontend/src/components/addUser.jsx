import { Plus, UserPlus } from 'lucide-react';

function AddUser({ newUser, setNewUser, handleAddUser }) {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.01]">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mr-3">
          <UserPlus className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800">Add New User</h3>
      </div>

      <div className="space-y-4">
        <input
          className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl p-3 focus:border-green-500 focus:outline-none transition-colors"
          value={newUser}
          onChange={e => setNewUser(e.target.value)}
          placeholder="Enter user name"
        />

        <button
          className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          onClick={handleAddUser}
        >
          <Plus className="w-5 h-5 inline mr-2" />
          Add User
        </button>
      </div>
    </div>
  );
}

export default AddUser;
