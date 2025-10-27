# Raiffeisen Interactive Developer Quiz

Ein interaktives Quiz, entwickelt für die Raiffeisen Developer Conference 2025. Diese Full-Stack Web-Anwendung testet das Wissen von Entwicklern mit verschiedenen Fragetypen in einem zeitlich begrenzten Spielmodus. Die Ergebnisse werden persistent in einer CSV-Datei gespeichert.

---

## Features

*   **Verschiedene Fragetypen:** Unterstützt Multiple-Choice-, Code-, Richtig/Falsch- und Texteingabe-Fragen.
*   **Zeitlimit pro Frage:** Ein dynamischer Timer mit einer visuellen ProgressBar setzt die Spieler unter Druck.
*   **Sofortiges Feedback:** Spieler erfahren direkt nach jeder Antwort, ob sie richtig lagen. Das Spiel endet bei der ersten falschen Antwort.
*   **Fortschrittsanzeige:** Eine Leiste zeigt den aktuellen Fortschritt im Quiz an.
*   **Dynamische Ergebnisseiten:** Je nach Ausgang des Spiels werden unterschiedliche Animationen und Ergebnis-Bildschirme angezeigt (Gewinner vs. Verlierer).
*   **Leaderboard:** Alle Quiz-Ergebnisse werden angezeigt, sortiert nach Score und Zeit.
*   **CSV-Export:** Leaderboard kann als CSV-Datei heruntergeladen werden.
*   **Persistente Datenspeicherung:** Alle Ergebnisse bleiben über Server-Neustarts erhalten.
*   **Responsive Design:** Optimiert für eine gute Darstellung auf verschiedenen Bildschirmgrößen.

---

## Architektur

Das Projekt hat eine **Client-Server Architektur**:

### Frontend (React + Vite + TypeScript)
*   Benutzerinteraktion und Quiz-Logik
*   Kommuniziert mit dem Backend über HTTP-Requests
*   Responsive UI mit Tailwind CSS

### Backend (FastAPI + Python)
*   REST API für Leaderboard-Verwaltung
*   CSV-Persistierung der Quiz-Ergebnisse
*   Thread-safe Datenzugriff

---

## Tech Stack

### Frontend
*   **Framework:** [React](https://reactjs.org/)
*   **Build-Tool:** [Vite](https://vitejs.dev/)
*   **Sprache:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Routing:** [React Router DOM](https://reactrouter.com/)

### Backend
*   **Framework:** [FastAPI](https://fastapi.tiangelo.com/)
*   **Server:** [Uvicorn](https://www.uvicorn.org/)
*   **Sprache:** Python 3.10+
*   **Datenvalidierung:** [Pydantic](https://docs.pydantic.dev/)

---

## Getting Started

Folge dieser Anleitung, um das Projekt lokal auf deinem Computer auszuführen.

### Voraussetzungen

1.  **Node.js** (Version 18.x oder höher empfohlen)
    *   **Überprüfung:** `node -v`
    *   **Download:** [nodejs.org](https://nodejs.org/)

2.  **npm (Node Package Manager)**
    *   **Überprüfung:** `npm -v`
    *   Wird automatisch mit Node.js installiert

3.  **Python** (Version 3.10 oder höher empfohlen)
    *   **Überprüfung:** `python --version`
    *   **Download:** [python.org](https://www.python.org/)

### Installation & Ausführung

#### 1. Repository klonen
```bash
git clone https://github.com/orangenraph/interactive_developer_quiz.git
cd interactive_developer_quiz
```

#### 2. Backend Setup

```bash
cd backend

# Virtuelle Python-Umgebung erstellen (optional aber empfohlen)
python -m venv venv

# Virtuelle Umgebung aktivieren
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Abhängigkeiten installieren
pip install -r requirements.txt

# Backend starten
python -m src.main
```

Backend läuft dann unter: `http://localhost:8000`

#### 3. Frontend Setup (in neuem Terminal)

```bash
cd frontend

# Abhängigkeiten installieren
npm install

# Frontend starten
npm run dev
```

Frontend läuft dann unter: `http://localhost:5173` (oder die angezeigte URL)

#### 4. Anwendung öffnen

Öffne deinen Browser und navigiere zu `http://localhost:5173`

---

## Projektstruktur

```
interactive_developer_quiz/
├── backend/
│   ├── data/
│   │   └── leaderboard.csv          # Persistierte Quiz-Ergebnisse
│   ├── src/
│   │   ├── models/
│   │   │   └── leaderboard.py       # Datenmodelle (Pydantic)
│   │   ├── routes/
│   │   │   └── leaderboard.py       # API-Endpoints
│   │   ├── services/
│   │   │   └── csv_handler.py       # CSV-Lese/Schreib-Logik
│   │   └── main.py                  # FastAPI App
│   └── requirements.txt              # Python-Abhängigkeiten
│
├── frontend/
│   ├── public/                       # Statische Assets
│   ├── src/
│   │   ├── assets/                  # Bilder, SVGs, etc.
│   │   ├── components/
│   │   │   ├── leaderboard/         # Leaderboard-Komponenten
│   │   │   ├── questions/           # Fragetyp-Komponenten
│   │   │   ├── quiz/                # Quiz-UI Elemente
│   │   │   └── results/             # Ergebnis-Komponenten
│   │   ├── data/                    # Quiz-Fragen & Datenquellen
│   │   │   ├── questionnaire/       # Fragen nach Schwierigkeit
│   │   │   │   ├── EasyQuestions.ts     # Einfache Fragen
│   │   │   │   ├── MediumQuestions.ts   # Mittelschwere Fragen
│   │   │   │   ├── HardQuestions.ts     # Schwere Fragen
│   │   │   │   └── GoatedQuestions.ts   # Extrem schwere/Special Fragen
│   │   │   └── index.ts             # Zentrale Verwaltung aller Fragen
│   │   ├── pages/                   # Hauptseiten (Start, Quiz, Leaderboard)
│   │   ├── services/
│   │   │   ├── api.ts               # HTTP-Client
│   │   │   └── PlayerStorage.ts     # Backend-Integration
│   │   ├── styles/                  # Globale CSS
│   │   ├── App.tsx                  # Hauptkomponente
│   │   └── main.tsx                 # Einstiegspunkt
│   ├── .env                         # Umgebungsvariablen
│   ├── package.json                 # npm-Abhängigkeiten
│   └── vite.config.ts               # Vite-Konfiguration
│
└── README.md
```

---

## API-Endpoints

Das Backend stellt folgende REST-Endpoints bereit:

| Methode | Endpoint | Beschreibung |
|---------|----------|-------------|
| `GET` | `/api/leaderboard` | Alle Einträge abrufen |
| `POST` | `/api/leaderboard` | Neuen Eintrag speichern |
| `DELETE` | `/api/leaderboard/clear` | Alle Einträge löschen |
| `GET` | `/api/leaderboard/download` | CSV-Download |
| `GET` | `/health` | Health-Check |

**Beispiel: Leaderboard abrufen**
```bash
curl http://localhost:8000/api/leaderboard
```

**Interaktive API-Dokumentation:** http://localhost:8000/docs

---

## Quiz-Fragen anpassen

Alle Quiz-Fragen sind zentral in einer Datei gespeichert und sind nach Schwierigkeit organisiert:

**Fragen nach Schwierigkeit** (in `frontend/src/data/questionnaire/`):
*   `EasyQuestions.ts` - Einfache Fragen
*   `MediumQuestions.ts` - Mittelschwere Fragen
*   `HardQuestions.ts` - Schwere Fragen
*   `GoatedQuestions.ts` - Extrem schwere / Special Fragen

**Zentrale Verwaltung** (in `frontend/src/data/`):
*   `index.ts` - Importiert und kombiniert alle Fragen

Um Fragen hinzuzufügen, zu entfernen oder zu ändern, bearbeite die entsprechende Datei nach Schwierigkeit. Folge der bestehenden `QuizQuestion`-Struktur, um sicherzustellen, dass die Fragen korrekt angezeigt werden.

---

## CSV-Format

Die Quiz-Ergebnisse werden in `backend/data/leaderboard.csv` gespeichert:

```csv
name,score,timeTaken,date,completed
Max Mustermann,10,5:23,2025-10-27,true
Alice Smith,8,4:15,2025-10-27,false
Bob Johnson,10,6:10,2025-10-26,true
```

---

## Entwicklung

### Frontend bauen
```bash
cd frontend
npm run build
```

Der optimierte Build wird im `dist/`-Ordner erstellt.

### Backend testen
```bash
cd backend
# Mit Debug-Output starten
python -m src.main
```

Öffne http://localhost:8000/docs für die interaktive API-Dokumentation (Swagger UI).

---

## Debugging

### Backend Console-Ausgabe
Der Backend-Server gibt Informationen zum Starten, zur Datenverarbeitung und zu Fehlern aus.

### Frontend Browser Console (F12)
Überprüfe die Browser-Console auf API-Fehler und andere Warnungen.

### CSV-Datei überprüfen
Die Datei `backend/data/leaderboard.csv` enthält die Rohdaten. Stelle sicher, dass:
1. Die Header-Zeile vorhanden ist: `name,score,timeTaken,date,completed`
2. Alle Datenzeilen korrekt formatiert sind

---

## Umgebungsvariablen

### Frontend (`.env`)
```
VITE_API_URL=http://localhost:8000
```

### Backend
Keine zusätzlichen Umgebungsvariablen nötig (falls gewünscht, können über `.env` hinzugefügt werden).

---

## Deployment

### Frontend
```bash
cd frontend
npm run build
# Deploy den `dist/` Ordner auf einen Web-Server
```

### Backend
```bash
cd backend
pip install -r requirements.txt
python -m src.main
# Oder mit Gunicorn in Produktion:
gunicorn -w 4 -k uvicorn.workers.UvicornWorker src.main:app
```

---

## Lizenz

Dieses Projekt wurde für die Raiffeisen Developer Conference 2025 entwickelt.

---

## Entwickler

Entwickelt von **innovAIte** für **RSG DevCon 2025**