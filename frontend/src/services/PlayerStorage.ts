import { apiClient, type LeaderboardEntry } from './api';

// Exportiere den Type für die Verwendung in anderen Komponenten
export type { LeaderboardEntry };

export class PlayerStorage {
  /**
   * Speichert das Quiz-Ergebnis im Backend
   */
  static async savePlayerResult(entry: LeaderboardEntry): Promise<void> {
    try {
      await apiClient.saveQuizResult({
        name: entry.name,
        score: entry.score,
        timeTaken: entry.timeTaken,
        date: entry.date,
        completed: entry.completed ?? true,
      });
    } catch (error) {
      console.error('Fehler beim Speichern des Ergebnisses:', error);
      throw error;
    }
  }

  /**
   * Laden aller Quiz-Ergebnisse vom Backend
   */
  static async loadAllResults(): Promise<LeaderboardEntry[]> {
    try {
      return await apiClient.getLeaderboard();
    } catch (error) {
      console.error('Fehler beim Laden der Ergebnisse:', error);
      return [];
    }
  }

  /**
   * Gibt das Leaderboard sortiert zurück
   */
  static async getLeaderboard(): Promise<LeaderboardEntry[]> {
    try {
      return await apiClient.getLeaderboard();
    } catch (error) {
      console.error('Fehler beim Laden des Leaderboards:', error);
      return [];
    }
  }

  /**
   * Löscht alle Quiz-Ergebnisse
   */
  static async clearAllResults(): Promise<void> {
    try {
      await apiClient.clearLeaderboard();
    } catch (error) {
      console.error('Fehler beim Löschen der Ergebnisse:', error);
      throw error;
    }
  }

  /**
   * Lädt das Leaderboard als CSV herunter
   */
  static async downloadLeaderboard(): Promise<void> {
    try {
      await apiClient.downloadLeaderboard();
    } catch (error) {
      console.error('Fehler beim Download:', error);
      throw error;
    }
  }
}