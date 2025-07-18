import { Sparkles, Award } from 'lucide-react';

function ClaimPoints({ users, selectedUser, setSelectedUser, handleClaim }) {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.01]">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800">Claim Points</h3>
      </div>

      <div className="space-y-4">
        <select
          className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl p-3 focus:border-blue-500 focus:outline-none transition-colors"
          onChange={e => setSelectedUser(e.target.value)}
          value={selectedUser}
        >
          <option value="">Select User</option>
          {users.map(user => (
            <option key={user._id} value={user._id}>{user.name}</option>
          ))}
        </select>

        <button
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          onClick={handleClaim}
        >
          <Award className="w-5 h-5 inline mr-2" />
          Claim Reward
        </button>
      </div>
    </div>
  );
}

export default ClaimPoints;
