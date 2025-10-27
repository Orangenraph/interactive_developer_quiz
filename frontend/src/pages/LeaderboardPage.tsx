import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, Trash2 } from 'lucide-react';
import LeaderboardCard from '../components/leaderboard/LeaderboardCard';
import LeaderboardHeader from '../components/leaderboard/LeaderboardHeader';
import BackButton from '../components/leaderboard/BackButton';
import { PlayerStorage, type LeaderboardEntry } from '../services/PlayerStorage';

const LeaderboardPage = () => {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    loadLeaderboard();
  }, []);

  const loadLeaderboard = async () => {
    setIsLoading(true);
    try {
      const leaderboard = await PlayerStorage.getLeaderboard();
      setEntries(leaderboard);
    } catch (error) {
      console.error('Fehler beim Laden des Leaderboards:', error);
      setMessage('Fehler beim Laden des Leaderboards');
      setTimeout(() => setMessage(''), 3000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownloadCSV = async () => {
    try {
      await PlayerStorage.downloadLeaderboard();
      setMessage('CSV erfolgreich heruntergeladen!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Fehler beim Download:', error);
      setMessage('Fehler beim Download der CSV');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleClearResults = async () => {
    if (window.confirm('Möchtest du wirklich alle Ergebnisse löschen?')) {
      try {
        await PlayerStorage.clearAllResults();
        setEntries([]);
        setMessage('Alle Ergebnisse gelöscht');
        setTimeout(() => setMessage(''), 3000);
      } catch (error) {
        console.error('Fehler beim Löschen:', error);
        setMessage('Fehler beim Löschen der Ergebnisse');
        setTimeout(() => setMessage(''), 3000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="w-full text-white py-20" style={{
        background: '#007179',
        borderBottomLeftRadius: '120px'
      }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <BackButton onClick={() => navigate('/')} variant="light" />
          </div>

          <div className="text-center">
            <LeaderboardHeader />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-12 mt-12">
        {/* Controls */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <button
            onClick={handleDownloadCSV}
            className="flex items-center gap-2 px-4 py-2 bg-[#007179] text-white rounded-lg hover:bg-[#00383C] transition-colors font-medium"
          >
            <Download className="w-4 h-4" />
            CSV herunterladen
          </button>

          {entries.length > 0 && (
            <button
              onClick={handleClearResults}
              className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
            >
              <Trash2 className="w-4 h-4" />
              Alle löschen
            </button>
          )}
        </div>

        {/* Message Display */}
        {message && (
          <div className="mb-6 p-4 bg-blue-100 border border-blue-300 text-blue-800 rounded-lg text-center font-medium">
            {message}
          </div>
        )}

        {/* Leaderboard Display */}
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2" style={{
              borderBottomColor: '#1a6b6b'
            }}></div>
          </div>
        ) : entries.length > 0 ? (
          <>
            <LeaderboardCard entries={entries.map((entry, index) => ({
              rank: index + 1,
              name: entry.name,
              score: entry.score.toString(),
              timeTaken: entry.timeTaken,
              date: entry.date
            }))} />
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