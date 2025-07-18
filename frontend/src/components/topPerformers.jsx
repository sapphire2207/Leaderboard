import { Crown, Trophy, Medal } from 'lucide-react';

function TopPerformers({ leaderboard }) {
  if (leaderboard.length < 3) return null;

  return (
    <div className="flex justify-center items-end mb-8 space-x-4">
      {/* 2nd Place */}
      <div className="flex flex-col items-center max-[385px]:w-20">
        <div className="w-24 h-24 max-[385px]:w-20 max-[385px]:h-20 bg-[#C0C0C0] rounded-full flex items-center justify-center mb-2 shadow-lg">
          <span className="text-2xl font-bold text-white">2</span>
        </div>
        <div className="bg-[#C0C0C0] h-20 w-20 max-[385px]:w-16 max-[385px]:h-16 rounded-t-lg flex items-center justify-center">
          <Trophy className="w-6 h-6 max-[385px]:w-5 max-[385px]:h-5 text-white" />
        </div>
        <p className="font-semibold text-gray-800 mt-2 text-sm">{leaderboard[1]?.name}</p>
        <p className="text-gray-600 font-bold">{leaderboard[1]?.totalPoints}</p>
      </div>

      {/* 1st Place */}
      <div className="flex flex-col items-center text-center max-[385px]:w-24">
        <div className="w-28 h-28 max-[385px]:w-24 max-[385px]:h-24 bg-[#FFD700] rounded-full flex items-center justify-center mb-2 shadow-lg animate-pulse">
          <span className="text-3xl font-bold text-white">1</span>
        </div>
        <div className="bg-[#FFD700] h-28 w-24 max-[385px]:h-24 max-[385px]:w-20 rounded-t-lg flex items-center justify-center">
          <Crown className="w-8 h-8 max-[385px]:w-6 max-[385px]:h-6 text-white" />
        </div>
        <p className="font-bold text-gray-800 mt-2 text-sm">{leaderboard[0]?.name}</p>
        <p className="text-gray-600 font-bold text-lg max-[385px]:text-base">{leaderboard[0]?.totalPoints}</p>
      </div>

      {/* 3rd Place */}
      <div className="flex flex-col items-center text-center max-[385px]:w-20">
        <div className="w-24 h-24 max-[385px]:w-20 max-[385px]:h-20 bg-[#CD7F32] rounded-full flex items-center justify-center mb-2 shadow-lg">
          <span className="text-2xl font-bold text-white">3</span>
        </div>
        <div className="bg-[#CD7F32] h-16 w-20 max-[385px]:w-14 max-[385px]:h-14 rounded-t-lg flex items-center justify-center">
          <Medal className="w-6 h-6 max-[385px]:w-5 max-[385px]:h-5 text-white" />
        </div>
        <p className="font-semibold text-gray-800 mt-2 text-sm">{leaderboard[2]?.name}</p>
        <p className="text-gray-600 font-bold">{leaderboard[2]?.totalPoints}</p>
      </div>
    </div>
  );
}

export default TopPerformers;
