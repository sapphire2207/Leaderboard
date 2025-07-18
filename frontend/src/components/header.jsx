import { Trophy } from 'lucide-react';

function Header() {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-4 animate-pulse">
        <Trophy className="w-10 h-10 text-orange-500" />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
        Leaderboard
      </h1>
      <p className="text-white/80 text-lg">Compete • Claim • Conquer</p>
    </div>
  );
}

export default Header;
