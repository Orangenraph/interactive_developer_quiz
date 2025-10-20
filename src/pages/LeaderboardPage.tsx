// src/pages/LeaderboardPage.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PixelBlast from '../utils/PixelBlast';
import LeaderboardCard from '../components/leaderboard/LeaderboardCard';
import LeaderboardHeader from '../components/leaderboard/LeaderboardHeader';
import BackButton from '../components/leaderboard/BackButton';

interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  date: string;
}

const LeaderboardPage = () => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const mockData: LeaderboardEntry[] = [
      { rank: 1, name: 'Max Developer', score: 100, date: '2025-10-20' },
      { rank: 2, name: 'Sarah Coder', score: 95, date: '2025-10-19' },
      { rank: 3, name: 'John Builder', score: 90, date: '2025-10-18' },
      { rank: 4, name: 'Emma Script', score: 85, date: '2025-10-17' },
      { rank: 5, name: 'Chris Tech', score: 80, date: '2025-10-16' },
      { rank: 6, name: 'Lisa Code', score: 75, date: '2025-10-15' },
      { rank: 7, name: 'Mark React', score: 70, date: '2025-10-14' },
      { rank: 8, name: 'Nina Full-Stack', score: 65, date: '2025-10-13' },
    ];

    setTimeout(() => {
      setEntries(mockData);
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Raiffeisen Teal Header Section */}
      <div className="w-full text-white py-20" style={{
        background: '#007179',
        borderBottomLeftRadius: '120px'
      }}>
        <div className="max-w-6xl mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <BackButton onClick={() => navigate('/')} variant="light" />
          </div>

          {/* Header Content */}
          <div className="text-center">
            <LeaderboardHeader />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-12 mt-12">
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{
              borderBottomColor: '#1a6b6b'
            }}></div>
          </div>
        ) : entries.length > 0 ? (
          <>
            <LeaderboardCard entries={entries} />
            <div className="mt-8 text-center text-sm text-gray-600 border-t border-gray-200 pt-6">
              <p>{entries.length} Entwickler in der Liste</p>
            </div>
          </>
        ) : (
          <div className="py-12 text-center">
            <p className="text-gray-600">Noch keine Einträge vorhanden</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaderboardPage;