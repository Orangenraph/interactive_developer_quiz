// src/services/PlayerStorage.ts

export interface PlayerRecord {
  name: string;
  score: number;
  totalQuestions: number;
  timeTaken: string;
  date: string;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  score: string;
  timeTaken: string;
  date: string;
}

const CSV_FILENAME = 'quiz_results.csv';

// Helper: Convert array to CSV string
const arrayToCSV = (data: PlayerRecord[]): string => {
  const headers = ['Name', 'Score', 'Zeit', 'Datum'];
  const headerRow = headers.join(',');

  const dataRows = data.map(record => {
    return [
      `"${record.name.replace(/"/g, '""')}"`,
      record.score,
      record.timeTaken,
      record.date
    ].join(',');
  });

  return [headerRow, ...dataRows].join('\n');
};

// Helper: Parse time string to seconds for sorting
const timeToSeconds = (timeStr: string): number => {
  const parts = timeStr.split(':');
  const minutes = parseInt(parts[0]) || 0;
  const seconds = parseInt(parts[1]) || 0;
  return minutes * 60 + seconds;
};

// Helper: Parse CSV string to array
const csvToArray = (csvString: string): PlayerRecord[] => {
  const lines = csvString.split('\n').filter(line => line.trim());
  if (lines.length < 2) return [];

  const records: PlayerRecord[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];

    // Parse CSV line (handle quoted fields)
    const fields: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let j = 0; j < line.length; j++) {
      const char = line[j];

      if (char === '"') {
        if (inQuotes && line[j + 1] === '"') {
          current += '"';
          j++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === ',' && !inQuotes) {
        fields.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    fields.push(current.trim());

    const record: PlayerRecord = {
      name: fields[0]?.replace(/^"|"$/g, '') || '',
      score: parseInt(fields[1]) || 0,
      totalQuestions: parseInt(fields[2]) || 10,
      timeTaken: fields[2] || '00:00',
      date: fields[3] || ''
    };

    if (record.name) {
      records.push(record);
    }
  }

  return records;
};

export const PlayerStorage = {
  // Save a player result
  savePlayerResult: (playerRecord: PlayerRecord): void => {
    try {
      const existingData = PlayerStorage.loadAllResults();
      existingData.push(playerRecord);

      // Save to sessionStorage for leaderboard display
      sessionStorage.setItem('playerResults', JSON.stringify(existingData));
    } catch (error) {
      console.error('Error saving player result:', error);
    }
  },

  // Load all results from sessionStorage
  loadAllResults: (): PlayerRecord[] => {
    try {
      const stored = sessionStorage.getItem('playerResults');
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading results:', error);
      return [];
    }
  },

  // Load from CSV file
  loadFromCSV: (file: File): Promise<void> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const csv = e.target?.result as string;
          const data = csvToArray(csv);
          sessionStorage.setItem('playerResults', JSON.stringify(data));
          resolve();
        } catch (error) {
          reject(error);
        }
      };

      reader.onerror = () => {
        reject(new Error('Fehler beim Lesen der Datei'));
      };

      reader.readAsText(file);
    });
  },

  // Get leaderboard sorted by score, then by time
  getLeaderboard: (): LeaderboardEntry[] => {
    const allResults = PlayerStorage.loadAllResults();

    return allResults
      .sort((a, b) => {
        // First, sort by score (descending)
        if (b.score !== a.score) {
          return b.score - a.score;
        }
        // If scores are equal, sort by time (ascending - faster is better)
        return timeToSeconds(a.timeTaken) - timeToSeconds(b.timeTaken);
      })
      .map((record, index) => ({
        rank: index + 1,
        name: record.name,
        score: `${record.score}/${record.totalQuestions}`,
        timeTaken: record.timeTaken,
        date: record.date
      }));
  },

  // Clear all results
  clearAllResults: (): void => {
    sessionStorage.removeItem('playerResults');
  },

  // Export to CSV (manual download only)
  exportToCSV: (): string => {
    const allResults = PlayerStorage.loadAllResults();
    return arrayToCSV(allResults);
  }
};