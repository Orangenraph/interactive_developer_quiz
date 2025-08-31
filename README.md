# Raiffeisen Interactive Developer Quiz

Ein interaktives Quiz, entwickelt für die Raiffeisen Developer Conference 2025. Diese Web-Anwendung testet das Wissen von Entwicklern mit verschiedenen Fragetypen in einem zeitlich begrenzten Spielmodus.

---

## ✨ Features

*   **Verschiedene Fragetypen:** Unterstützt Multiple-Choice-, Code-, Richtig/Falsch- und Texteingabe-Fragen.
*   **Zeitlimit pro Frage:** Ein dynamischer Timer mit einer visuellen ProgressBar setzt die Spieler unter Druck.
*   **Sofortiges Feedback:** Spieler erfahren direkt nach jeder Antwort, ob sie richtig lagen. Das Spiel endet bei der ersten falschen Antwort.
*   **Fortschrittsanzeige:** Eine Leiste zeigt den aktuellen Fortschritt im Quiz an.
*   **Dynamische Ergebnisseiten:** Je nach Ausgang des Spiels werden unterschiedliche Animationen und Ergebnis-Bildschirme angezeigt (Gewinner vs. Verlierer).
*   **Responsive Design:** Optimiert für eine gute Darstellung auf verschiedenen Bildschirmgrößen.

---

## 🚀 Tech Stack

Dieses Projekt wurde mit modernen Web-Technologien erstellt:

*   **Framework:** [React](https://reactjs.org/)
*   **Build-Tool:** [Vite](https://vitejs.dev/)
*   **Sprache:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Routing:** [React Router DOM](https://reactrouter.com/)

---

## ⚙️ Getting Started

Folge dieser Anleitung, um das Projekt lokal auf deinem Computer auszuführen und weiterzuentwickeln.

### Voraussetzungen

Bevor du beginnst, stelle sicher, dass die folgende Software auf deinem System installiert ist. Du kannst die Installation und Version ganz einfach über dein Terminal (z.B. CMD, PowerShell, Bash oder das integrierte Terminal in deinem Code-Editor) überprüfen.

1.  **Node.js** (Version 18.x oder höher empfohlen)
    *   **Zweck:** Node.js ist die Laufzeitumgebung, um JavaScript außerhalb des Browsers auszuführen.
    *   **Überprüfung:** Öffne dein Terminal und gib den folgenden Befehl ein:
        ```bash
        node -v
        ```
    *   **Erwartete Ausgabe:** Du solltest eine Versionsnummer sehen, z.B. `v18.18.0`.
    *   **Fehlerbehebung:** Wenn der Befehl nicht gefunden wird oder die Version älter als 18.x ist, lade dir bitte die empfohlene **LTS-Version** von der [offiziellen Node.js-Website](https://nodejs.org/) herunter und installiere sie.

2.  **npm (Node Package Manager)**
    *   **Zweck:** npm wird automatisch mit Node.js installiert und wird benötigt, um die Projektabhängigkeiten (die "Packages") zu verwalten.
    *   **Überprüfung:** Gib nach der Installation von Node.js diesen Befehl im Terminal ein:
        ```bash
        npm -v
        ```
    *   **Erwartete Ausgabe:** Du solltest eine Versionsnummer sehen, z.B. `9.8.1`.
    *   **Fehlerbehebung:** Falls `node -v` funktioniert, aber dieser Befehl fehlschlägt, ist deine Node.js-Installation möglicherweise fehlerhaft. Eine Neuinstallation von Node.js löst dieses Problem in der Regel.

### Installation & Ausführung

1.  **Klone das Repository:**
    ```bash
    git clone https://github.com/orangenraph/interactive_developer_quiz.git
    ```

2.  **Navigiere in das Projektverzeichnis:**
    ```bash
    cd interactive_developer_quiz
    ```

3.  **Installiere die Abhängigkeiten:**
    Dieser Befehl lädt alle benötigten Pakete aus der `package.json`-Datei herunter.
    ```bash
    npm install
    ```

4.  **Starte den Entwicklungsserver:**
    Dieser Befehl startet die Anwendung im Entwicklungsmodus mit Hot-Reloading.
    ```bash
    npm run dev
    ```

5.  **Öffne die Anwendung im Browser:**
    Öffne deinen Webbrowser und navigiere zu der Adresse, die im Terminal angezeigt wird (normalerweise `http://localhost:5173`).

### Build für die Produktion

Wenn du die Anwendung für das Deployment vorbereiten möchtest, führe den folgenden Befehl aus:
```bash
npm run build
```
Dieser Befehl erstellt einen optimierten, statischen Build des Projekts im `dist`-Ordner.

---

## 📁 Projektstruktur

Das Projekt ist wie folgt strukturiert, um eine klare Trennung der Verantwortlichkeiten zu gewährleisten:

```
/
├── public/              # Statische Assets
├── src/
│   ├── assets/          # Bilder, SVGs, etc.
│   ├── components/      # Wiederverwendbare UI-Komponenten
│   │   ├── questions/   # Komponenten für die verschiedenen Fragetypen
│   │   ├── quiz/        # UI-Elemente für das Quiz (Timer, ProgressBar)
│   │   └── results/     # Komponenten für die Ergebnisseiten (Animationen)
│   ├── data/            # Statische Daten (Quiz-Fragen)
│   │   └── questions.ts
│   ├── pages/           # Hauptansichten der Anwendung (Start, Quiz, Resultat)
│   ├── styles/          # Globale CSS-Dateien
│   ├── App.tsx          # Hauptkomponente mit dem Routing
│   └── main.tsx         # Einstiegspunkt der Anwendung
├── .gitignore
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

## ✏️ Fragen anpassen

Alle Quiz-Fragen sind zentral in einer Datei gespeichert. Um Fragen hinzuzufügen, zu entfernen oder zu ändern, bearbeite einfach die Datei:

**`src/data/questions.ts`**

Folge der bestehenden `QuizQuestion`-Struktur, um sicherzustellen, dass die Fragen korrekt angezeigt werden.