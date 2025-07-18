import { Crown, Trophy as SilverTrophy, Medal, Star } from 'lucide-react';

function Leaderboard({ leaderboard, currentPage, setCurrentPage, totalPages }) {
  const getRankIcon = (index) => {
    switch (index) {
      case 0: return <Crown className="w-6 h-6 text-yellow-500" />;
      case 1: return <SilverTrophy className="w-6 h-6 text-gray-400" />;
      case 2: return <Medal className="w-6 h-6 text-orange-500" />;
      default: return <Star className="w-5 h-5 text-blue-500" />;
    }
  };

  const getRankBg = (index) => {
    switch (index) {
      case 0: return 'bg-[#FFD700]';
      case 1: return 'bg-[#C0C0C0]';
      case 2: return 'bg-[#CD7F32]';
      default: return 'bg-gradient-to-r from-blue-400 to-purple-500';
    }
  };

  return (
    <div className="overflow-x-auto rounded-2xl shadow-lg">
      <table className="min-w-full text-sm sm:text-base">
        <thead>
          <tr className="bg-gradient-to-r from-slate-800 to-gray-900 text-white text-left">
            <th className="px-4 sm:px-6 py-4 font-semibold">Rank</th>
            <th className="px-4 sm:px-6 py-4 font-semibold">Player</th>
            <th className="px-4 sm:px-6 py-4 text-right font-semibold">Points</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((user, index) => (
            <tr
              key={user._id}
              className={`border-b border-gray-200 ${
                index === 0 ? 'bg-[#FFD700]/20' :
                index === 1 ? 'bg-[#C0C0C0]/20' :
                index === 2 ? 'bg-[#CD7F32]/20' : ''
              }`}
            >
              <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${getRankBg(index)} max-[425px]:w-8 max-[425px]:h-8`}>
                    {index < 3 ? getRankIcon(index) : (
                      <span className="text-white font-bold">{(currentPage - 1) * 10 + index + 1}</span>
                    )}
                  </div>
                </div>
              </td>
              <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-10 h-10 max-[425px]:w-8 max-[425px]:h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3 font-bold text-gray-600 uppercase">
                    {user.name.charAt(0)}
                  </div>
                  <span className="font-medium text-gray-800">{user.name}</span>
                </div>
              </td>
              <td className="px-4 sm:px-6 py-4 text-center whitespace-nowrap">
                <div className="flex items-center justify-end">
                  <span className="text-2xl max-[425px]:text-lg font-bold text-gray-800 mr-2">
                    {user.totalPoints.toLocaleString()}
                  </span>
                  <div className="w-6 h-6 max-[425px]:w-5 max-[425px]:h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="text-yellow-800 font-bold text-xs">P</span>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination UI */}
      <div className="flex justify-center items-center gap-2 p-6">
  <button
    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
    disabled={currentPage === 1}
    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-md ${
      currentPage === 1
        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
        : 'bg-white text-gray-700 hover:bg-gray-100'
    }`}
  >
    ← Prev
  </button>

  <div className="flex gap-1">
    {Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i}
        onClick={() => setCurrentPage(i + 1)}
        className={`w-9 h-9 rounded-full text-sm font-semibold flex items-center justify-center transition-all shadow-sm ${
          currentPage === i + 1
            ? 'bg-gradient-to-br from-pink-500 to-orange-500 text-white scale-105 shadow-lg'
            : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
      >
        {i + 1}
      </button>
    ))}
  </div>

  <button
    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
    disabled={currentPage === totalPages}
    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-md ${
      currentPage === totalPages
        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
        : 'bg-white text-gray-700 hover:bg-gray-100'
    }`}
  >
    Next →
  </button>
</div>
    </div>
  );
}

export default Leaderboard;
