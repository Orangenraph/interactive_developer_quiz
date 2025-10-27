import csv
import os
from threading import Lock
from pathlib import Path
from datetime import datetime
from typing import List
from ..models.leaderboard import LeaderboardEntry

# Thread-safe Lock für CSV-Operationen
csv_lock = Lock()

# Pfad zur CSV-Datei
CSV_FILE = Path(__file__).parent.parent.parent / "data" / "leaderboard.csv"


def ensure_csv_exists():
    """Erstellt die CSV-Datei mit Headers, falls sie nicht existiert"""
    CSV_FILE.parent.mkdir(parents=True, exist_ok=True)

    print(f"📁 CSV-Pfad: {CSV_FILE}")
    print(f"📁 CSV existiert: {CSV_FILE.exists()}")

    if not CSV_FILE.exists():
        print(f"📝 Erstelle neue CSV-Datei...")
        with open(CSV_FILE, 'w', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=['name', 'score', 'timeTaken', 'date', 'completed'])
            writer.writeheader()
    else:
        print(f"✅ CSV-Datei existiert bereits")


def read_leaderboard() -> List[LeaderboardEntry]:
    """Liest alle Einträge aus der CSV-Datei"""
    ensure_csv_exists()

    with csv_lock:
        entries = []
        try:
            with open(CSV_FILE, 'r', newline='', encoding='utf-8') as f:
                content = f.read()
                print(f"📄 CSV-Inhalt:\n{content[:200]}...")  # Erste 200 Zeichen

            with open(CSV_FILE, 'r', newline='', encoding='utf-8') as f:
                reader = csv.DictReader(f)
                print(f"📋 CSV Headers: {reader.fieldnames}")

                for row in reader:
                    print(f"📝 Lese Zeile: {row}")
                    if row and row.get('name'):  # Leere Zeilen ignorieren
                        try:
                            entry = LeaderboardEntry(
                                name=row['name'].strip(),
                                score=int(row['score']),
                                timeTaken=row['timeTaken'].strip(),
                                date=row['date'].strip(),
                                completed=row.get('completed', 'true').lower() == 'true'
                            )
                            entries.append(entry)
                            print(f"✅ Eintrag hinzugefügt: {entry.name}")
                        except ValueError as ve:
                            print(f"❌ Fehler beim Parsen der Zeile {row}: {ve}")
                            continue
        except Exception as e:
            print(f"❌ Fehler beim Lesen der CSV: {e}")
            print(f"📁 CSV-Pfad: {CSV_FILE}")
            print(f"📁 CSV existiert: {CSV_FILE.exists()}")
            return []

    print(f"✅ {len(entries)} Einträge aus CSV geladen")
    # Sortieren: Nach Score (absteigend), dann nach Zeit (aufsteigend)
    entries.sort(key=lambda x: (-x.score, x.timeTaken))
    return entries


def add_entry(entry: LeaderboardEntry) -> bool:
    """Fügt einen neuen Eintrag zur CSV hinzu"""
    ensure_csv_exists()

    with csv_lock:
        try:
            with open(CSV_FILE, 'a', newline='', encoding='utf-8') as f:
                writer = csv.DictWriter(f, fieldnames=['name', 'score', 'timeTaken', 'date', 'completed'])
                writer.writerow({
                    'name': entry.name,
                    'score': entry.score,
                    'timeTaken': entry.timeTaken,
                    'date': entry.date,
                    'completed': str(entry.completed).lower()
                })
            return True
        except Exception as e:
            print(f"Fehler beim Hinzufügen des Eintrags: {e}")
            return False


def clear_all_entries() -> bool:
    """Löscht alle Einträge aus der CSV (nur Headers bleiben)"""
    ensure_csv_exists()

    with csv_lock:
        try:
            with open(CSV_FILE, 'w', newline='', encoding='utf-8') as f:
                writer = csv.DictWriter(f, fieldnames=['name', 'score', 'timeTaken', 'date', 'completed'])
                writer.writeheader()
            return True
        except Exception as e:
            print(f"Fehler beim Löschen der Einträge: {e}")
            return False


def get_csv_content() -> str:
    """Gibt den rohen CSV-Inhalt zurück (für Download)"""
    ensure_csv_exists()

    with csv_lock:
        try:
            with open(CSV_FILE, 'r', encoding='utf-8') as f:
                return f.read()
        except Exception as e:
            print(f"Fehler beim Lesen der CSV für Download: {e}")
            return ""