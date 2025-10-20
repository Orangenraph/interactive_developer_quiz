// src/components/LeaderboardCard.tsx
import React from 'react';
import { Medal, Crown } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  date: string;
}

interface LeaderboardCardProps {
  entries: LeaderboardEntry[];
}

const LeaderboardCard: React.FC<LeaderboardCardProps> = ({ entries }) => {
  const getMedalColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'text-yellow-500';
      case 2:
        return 'text-gray-400';
      case 3:
        return 'text-orange-400';
      default:
        return 'text-[#007179]/40';
    }
  };

  const getRowGradient = (rank: number) => {
    if (rank === 1) return 'from-yellow-50/30 to-transparent';
    if (rank === 2) return 'from-gray-100/20 to-transparent';
    if (rank === 3) return 'from-orange-50/20 to-transparent';
    return '';
  };

  return (
    <div className="space-y-2">
      {entries.map((entry) => (
        <div
          key={entry.rank}
          className={`relative group overflow-hidden rounded-xl backdrop-blur-md bg-white/20 border border-[#007179]/30 p-4 transition-all duration-300 hover:bg-white/30 hover:border-[#007179]/50 ${
            getRowGradient(entry.rank) ? `bg-gradient-to-r ${getRowGradient(entry.rank)}` : ''
          }`}
        >
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className="flex items-center justify-center w-10">
                {entry.rank <= 3 ? (
                  <Medal className={`w-6 h-6 ${getMedalColor(entry.rank)}`} />
                ) : (
                  <span className="text-[#007179]/60 font-bold text-lg">#{entry.rank}</span>
                )}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-[#00383C]">{entry.name}</p>
                <p className="text-sm text-[#00383C]/60">{entry.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-[#007179]">{entry.score}</p>
              <p className="text-xs text-[#00383C]/50">Punkte</p>
            </div>
          </div>

          {entry.rank === 1 && (
            <div className="absolute top-2 right-2 z-0">
              <Crown className="w-12 h-12 text-yellow-300/20" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default LeaderboardCard;