// API Base URL - anpassen falls Backend auf anderem Port/Host läuft
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export interface LeaderboardEntry {
  name: string;
  score: number;
  timeTaken: string;
  date: string;
  completed: boolean;
}

export interface LeaderboardResponse {
  entries: LeaderboardEntry[];
  count: number;
}

class ApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = API_BASE_URL;
  }

  /**
   * GET /api/leaderboard
   * Holt alle Leaderboard-Einträge vom Backend
   */
  async getLeaderboard(): Promise<LeaderboardEntry[]> {
    try {
      const response = await fetch(`${this.baseUrl}/api/leaderboard`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: LeaderboardResponse = await response.json();
      return data.entries;
    } catch (error) {
      console.error('Fehler beim Abrufen des Leaderboards:', error);
      throw error;
    }
  }

  /**
   * POST /api/leaderboard
   * Speichert einen neuen Quiz-Eintrag
   */
  async saveQuizResult(entry: LeaderboardEntry): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/api/leaderboard`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(entry),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.detail || `HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Fehler beim Speichern des Quiz-Ergebnisses:', error);
      throw error;
    }
  }

  /**
   * DELETE /api/leaderboard/clear
   * Löscht alle Leaderboard-Einträge
   */
  async clearLeaderboard(): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/api/leaderboard/clear`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Fehler beim Löschen des Leaderboards:', error);
      throw error;
    }
  }

  /**
   * GET /api/leaderboard/download
   * Lädt das Leaderboard als CSV herunter
   */
  async downloadLeaderboard(): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/api/leaderboard/download`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `quiz_results_${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Fehler beim Download des Leaderboards:', error);
      throw error;
    }
  }

  /**
   * Health Check - testet ob Backend erreichbar ist
   */
  async healthCheck(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/health`);
      return response.ok;
    } catch (error) {
      console.error('Backend nicht erreichbar:', error);
      return false;
    }
  }
}

// Singleton Export
export const apiClient = new ApiClient();