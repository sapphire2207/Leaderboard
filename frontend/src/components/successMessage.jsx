import { Sparkles } from 'lucide-react';

function SuccessMessage({ lastClaimed }) {
  if (!lastClaimed) return null;

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6 rounded-3xl shadow-xl mb-8 animate-bounce">
      <div className="text-center">
        <Sparkles className="w-8 h-8 mx-auto mb-2" />
        <p className="text-xl font-bold">
          🎉 {lastClaimed.user.name} earned {lastClaimed.points} points!
        </p>
      </div>
    </div>
  );
}

export default SuccessMessage;
