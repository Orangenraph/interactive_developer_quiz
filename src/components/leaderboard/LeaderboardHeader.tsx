// src/components/LeaderboardHeader.tsx
import React from 'react';
import { Trophy } from 'lucide-react';

const LeaderboardHeader: React.FC = () => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-3 mb-4">
        <Trophy className="w-10 h-10 text-white drop-shadow-lg" />
        <h1 className="text-7xl font-bold text-white drop-shadow-lg">Leaderboard</h1>
        <Trophy className="w-10 h-10 text-white drop-shadow-lg" />
      </div>
      <p className="text-lg text-white/90 drop-shadow">Die besten Entwickler bei RSG DevCon</p>
    </div>
  );
};

export default LeaderboardHeader;