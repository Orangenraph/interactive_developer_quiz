// src/data/questions/EasyQuestions.ts

import { McQuestion, TrueFalseQuestion, InputQuestions } from '../BaseQuestions';

export const EASY_QUESTIONS: (McQuestion | TrueFalseQuestion | InputQuestions)[] = [
  {
    id: 1,
    type: "mc",
    question: "Wer ist der Schöpfer von Python?",
    options: ["Bjarne Stroustrup", "James Gosling", "Guido van Rossum", "Rasmus Lerdorf"],
    correct: 2,
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 2,
    type: "mc",
    question: "Wofür steht die Abkürzung 'HTML'?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Transfer Markup Language"],
    correct: 0,
    timeLimit: 25,
    difficulty: "easy"
  },
  {
    id: 3,
    type: "mc",
    question: "Wer ist als 'Vater von Java' bekannt?",
    options: ["Dennis Ritchie", "Bjarne Stroustrup", "Guido van Rossum", "James Gosling"],
    correct: 3,
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 4,
    type: "mc",
    question: "Wer hat die Programmiersprache C entwickelt?",
    options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Ken Thompson"],
    correct: 1,
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 5,
    type: "mc",
    question: "Was war die primäre Motivation für die Entwicklung von JavaScript?",
    options: ["Clientseitige Interaktion in Webbrowsern.", "Schreiben von Betriebssystemen.", "Entwicklung von Serveranwendungen.", "Erstellung von Datenbanken."],
    correct: 0,
    timeLimit: 40,
    difficulty: "easy"
  },
  // Bestehende Fragen, IDs angepasst
  {
    id: 6,
    type: "mc",
    question: "Welches SQL-Schlüsselwort wird verwendet, um Daten aus einer Datenbank abzurufen?",
    options: ["SELECT", "GET", "FETCH", "EXTRACT"],
    correct: 0,
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 7,
    type: "truefalse",
    question: "Python ist eine statisch typisierte Sprache.",
    correct: false,
    timeLimit: 20,
    difficulty: "easy"
  },
  {
    id: 8,
    type: "input",
    question: "Wie nennt man die Hauptmethode in einem Java-Programm, die als Einstiegspunkt dient?",
    correct: "main",
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 9,
    type: "mc",
    question: "Welches Symbol wird in C verwendet, um die Adresse einer Variablen abzurufen?",
    options: ["*", "&", "#", "$"],
    correct: 1,
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 10,
    type: "truefalse",
    question: "Ein Primärschlüssel in einer SQL-Tabelle darf NULL-Werte enthalten.",
    correct: false,
    timeLimit: 25,
    difficulty: "easy"
  },
  {
    id: 11,
    type: "input",
    question: "Wofür steht die Abkürzung 'JVM' im Kontext von Java?",
    correct: "Java Virtual Machine",
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 12,
    type: "mc",
    question: "Welcher Datentyp wird in Python für eine geordnete und veränderliche Sammlung von Elementen verwendet?",
    options: ["Tuple", "List", "Set", "Dictionary"],
    correct: 1,
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 13,
    type: "truefalse",
    question: "COBOL ist eine der jüngsten Programmiersprachen.",
    correct: false,
    timeLimit: 20,
    difficulty: "easy"
  },
  {
    id: 14,
    type: "input",
    question: "Welcher HTTP-Statuscode signalisiert einen 'Not Found' Fehler?",
    correct: "404",
    timeLimit: 25,
    difficulty: "easy"
  },
  {
    id: 15,
    type: "mc",
    question: "Was gibt der `git status` Befehl aus?",
    options: ["Den Commit-Verlauf", "Alle vorhandenen Branches", "Den Zustand des Arbeitsverzeichnisses und der Staging Area", "Die Konfigurationseinstellungen"],
    correct: 2,
    timeLimit: 40,
    difficulty: "easy"
  },
  {
    id: 16,
    type: "truefalse",
    question: "Der `==` Operator in Java vergleicht bei Objekten die Speicheradressen (Referenzen).",
    correct: true,
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 17,
    type: "input",
    question: "Wie lautet die Dateiendung für eine C-Header-Datei?",
    correct: ".h",
    timeLimit: 20,
    difficulty: "easy"
  },
  {
    id: 18,
    type: "mc",
    question: "Aus wie vielen 'Divisions' besteht ein klassisches COBOL-Programm?",
    options: ["2", "3", "4", "5"],
    correct: 2,
    timeLimit: 45,
    difficulty: "easy"
  },
  {
    id: 19,
    type: "truefalse",
    question: "Ein Compiler übersetzt den Quellcode Zeile für Zeile während der Ausführung.",
    correct: false,
    timeLimit: 25,
    difficulty: "easy"
  },
  {
    id: 20,
    type: "input",
    question: "Welches Schlüsselwort wird in Python verwendet, um eine Funktion zu definieren?",
    correct: "def",
    timeLimit: 20,
    difficulty: "easy"
  },
  {
    id: 21,
    type: "mc",
    question: "Welche SQL-Klausel wird verwendet, um die Ergebnismenge zu sortieren?",
    options: ["SORT BY", "ORDER BY", "GROUP BY", "ARRANGE BY"],
    correct: 1,
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 22,
    type: "truefalse",
    question: "Java unterstützt die mehrfache Vererbung von Klassen.",
    correct: false,
    timeLimit: 25,
    difficulty: "easy"
  },
  {
    id: 23,
    type: "input",
    question: "Wie heißt die Standard-Bibliotheksfunktion in C, um formatierten Text auf der Konsole auszugeben?",
    correct: "printf",
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 24,
    type: "mc",
    question: "Welches Zahlensystem wird von Computern intern primär verwendet?",
    options: ["Dezimalsystem", "Hexadezimalsystem", "Binärsystem", "Oktalsystem"],
    correct: 2,
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 25,
    type: "truefalse",
    question: "HTML ist eine Programmiersprache.",
    correct: false,
    timeLimit: 20,
    difficulty: "easy"
  },
  {
    id: 26,
    type: "input",
    question: "Wofür steht 'API'?",
    correct: "Application Programming Interface",
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 27,
    type: "mc",
    question: "Welches der folgenden ist kein gültiger Datentyp in Java?",
    options: ["int", "char", "string", "boolean"],
    correct: 2,
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 28,
    type: "truefalse",
    question: "Der Index des ersten Elements in einem Python-Array (List) ist 1.",
    correct: false,
    timeLimit: 20,
    difficulty: "easy"
  },
  {
    id: 29,
    type: "input",
    question: "Welches Zeichen beendet die meisten Anweisungen in COBOL?",
    correct: ".",
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 30,
    type: "mc",
    question: "Welcher Befehl wird in SQL verwendet, um eine Tabelle zu löschen?",
    options: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE", "ERASE TABLE"],
    correct: 2,
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 31,
    type: "truefalse",
    question: "In C allokiert die Funktion `malloc()` Speicher auf dem Stack.",
    correct: false,
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 32,
    type: "input",
    question: "Welches Schlüsselwort wird in Java verwendet, um eine Konstante zu deklarieren?",
    correct: "final",
    timeLimit: 25,
    difficulty: "easy"
  },
  {
    id: 33,
    type: "mc",
    question: "Was bedeutet 'OOP'?",
    options: ["Object-Oriented Programming", "Open Office Protocol", "Original Object Plan", "Optimal Output Processing"],
    correct: 0,
    timeLimit: 25,
    difficulty: "easy"
  },
  {
    id: 34,
    type: "truefalse",
    question: "Ein `LEFT JOIN` in SQL gibt nur die Zeilen zurück, die in beiden Tabellen eine Übereinstimmung haben.",
    correct: false,
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 35,
    type: "input",
    question: "Welcher Befehl zeigt in der Kommandozeile den aktuellen Pfad an (unter Linux/macOS)?",
    correct: "pwd",
    timeLimit: 20,
    difficulty: "easy"
  },
  {
    id: 36,
    type: "mc",
    question: "Welcher Operator wird in Python für die Potenzierung verwendet?",
    options: ["^", "**", "pow()", "##"],
    correct: 1,
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 37,
    type: "truefalse",
    question: "Eine `while`-Schleife wird immer mindestens einmal ausgeführt.",
    correct: false,
    timeLimit: 20,
    difficulty: "easy"
  },
  {
    id: 38,
    type: "input",
    question: "Wie heißt die COBOL-Division, die die Programmlogik enthält?",
    correct: "PROCEDURE DIVISION",
    timeLimit: 40,
    difficulty: "easy"
  },
  {
    id: 39,
    type: "mc",
    question: "Was ist der Zweck der `finally`-Klausel in einem Java `try-catch`-Block?",
    options: ["Sie wird nur ausgeführt, wenn keine Exception auftritt.", "Sie wird nur ausgeführt, wenn eine Exception auftritt.", "Sie wird immer ausgeführt, unabhängig davon, ob eine Exception auftritt oder nicht.", "Sie beendet das Programm."],
    correct: 2,
    timeLimit: 45,
    difficulty: "easy"
  },
  {
    id: 40,
    type: "truefalse",
    question: "C++ ist eine rein prozedurale Programmiersprache.",
    correct: false,
    timeLimit: 25,
    difficulty: "easy"
  },
  {
    id: 41,
    type: "input",
    question: "Welche SQL-Anweisung wird verwendet, um Daten in einer Tabelle zu ändern?",
    correct: "UPDATE",
    timeLimit: 25,
    difficulty: "easy"
  },
  {
    id: 42,
    type: "mc",
    question: "Was ist `pip` im Kontext von Python?",
    options: ["Ein Web-Framework", "Eine Test-Bibliothek", "Ein Paket-Manager", "Ein Code-Editor"],
    correct: 2,
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 43,
    type: "truefalse",
    question: "`null` und `undefined` sind in JavaScript strikt gleich (`===`).",
    correct: false,
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 44,
    type: "input",
    question: "Wie deklariert man in C einen Zeiger auf einen Integer?",
    correct: "int *",
    timeLimit: 35,
    difficulty: "easy"
  },
  {
    id: 45,
    type: "mc",
    question: "Wofür steht COBOL?",
    options: ["Common Business-Oriented Language", "Computer Basic Object Language", "Central Business Operation Language", "Code On-Board Local"],
    correct: 0,
    timeLimit: 40,
    difficulty: "easy"
  },
  {
    id: 46,
    type: "truefalse",
    question: "Ein `Set` in Python kann doppelte Elemente enthalten.",
    correct: false,
    timeLimit: 20,
    difficulty: "easy"
  },
  {
    id: 47,
    type: "input",
    question: "Welches Schlüsselwort wird in Java verwendet, um eine Methode in einer Subklasse zu überschreiben?",
    correct: "@Override",
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 48,
    type: "mc",
    question: "Was ist ein 'Foreign Key' in einer SQL-Datenbank?",
    options: ["Ein Schlüssel, der eindeutig jede Zeile identifiziert.", "Ein Schlüssel, der auf den Primärschlüssel einer anderen Tabelle verweist.", "Ein Schlüssel, der zur Verschlüsselung verwendet wird.", "Ein Schlüssel, der keinen Index hat."],
    correct: 1,
    timeLimit: 45,
    difficulty: "easy"
  },
  {
    id: 49,
    type: "truefalse",
    question: "Jede `if`-Anweisung benötigt einen `else`-Block.",
    correct: false,
    timeLimit: 20,
    difficulty: "easy"
  },
  {
    id: 50,
    type: "input",
    question: "Welche Funktion in C gibt die Länge eines Strings zurück (ohne Nullterminator)?",
    correct: "strlen",
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 51,
    type: "mc",
    question: "Welches Protokoll wird standardmäßig für das Senden von E-Mails verwendet?",
    options: ["FTP", "SMTP", "HTTP", "POP3"],
    correct: 1,
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 52,
    type: "truefalse",
    question: "Java-Code wird direkt in Maschinencode kompiliert.",
    correct: false,
    timeLimit: 25,
    difficulty: "easy"
  },
  {
    id: 53,
    type: "input",
    question: "Wie heißt die COBOL-Division, die die verwendeten Dateien deklariert?",
    correct: "ENVIRONMENT DIVISION",
    timeLimit: 45,
    difficulty: "easy"
  },
  {
    id: 54,
    type: "mc",
    question: "Welche Aggregatfunktion in SQL gibt die Anzahl der Zeilen zurück?",
    options: ["SUM()", "MAX()", "COUNT()", "AVG()"],
    correct: 2,
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 55,
    type: "truefalse",
    question: "In Python ist die Einrückung (Indentation) nur für die Lesbarkeit wichtig und hat keinen Einfluss auf die Logik.",
    correct: false,
    timeLimit: 25,
    difficulty: "easy"
  },
  {
    id: 56,
    type: "input",
    question: "Wofür steht 'CPU'?",
    correct: "Central Processing Unit",
    timeLimit: 20,
    difficulty: "easy"
  },
  {
    id: 57,
    type: "mc",
    question: "Welche Datenstruktur arbeitet nach dem LIFO-Prinzip (Last-In, First-Out)?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correct: 1,
    timeLimit: 35,
    difficulty: "easy"
  },
  {
    id: 58,
    type: "truefalse",
    question: "Der Befehl `git pull` ist eine Kombination aus `git fetch` und `git merge`.",
    correct: true,
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 59,
    type: "input",
    question: "Welches Schlüsselwort leitet in Java eine Vererbung ein?",
    correct: "extends",
    timeLimit: 25,
    difficulty: "easy"
  },
  {
    id: 60,
    type: "mc",
    question: "Was ist der Zweck der `WHERE`-Klausel in einer SQL-Abfrage?",
    options: ["Sortieren der Ergebnisse", "Gruppieren von Ergebnissen", "Filtern von Zeilen", "Verbinden von Tabellen"],
    correct: 2,
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 61,
    type: "truefalse",
    question: "Ein 'Integer' in C kann Fließkommazahlen speichern.",
    correct: false,
    timeLimit: 20,
    difficulty: "easy"
  },
  {
    id: 62,
    type: "input",
    question: "Welches Dateisystem wird standardmäßig in den meisten modernen Linux-Distributionen verwendet?",
    correct: "ext4",
    timeLimit: 40,
    difficulty: "easy"
  },
  {
    id: 63,
    type: "mc",
    question: "Welches dieser Konzepte gehört nicht zu den vier Hauptprinzipien der OOP?",
    options: ["Vererbung", "Kapselung", "Polymorphie", "Iteration"],
    correct: 3,
    timeLimit: 40,
    difficulty: "easy"
  },
  {
    id: 64,
    type: "truefalse",
    question: "COBOL-Code ist bekannt für seine gute Lesbarkeit, da er natürlicher Sprache ähnelt.",
    correct: true,
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 65,
    type: "input",
    question: "Wie importiert man die `math`-Bibliothek in Python?",
    correct: "import math",
    timeLimit: 25,
    difficulty: "easy"
  },
  {
    id: 66,
    type: "mc",
    question: "Welcher `JOIN` gibt nur Datensätze zurück, die in beiden Tabellen einen übereinstimmenden Wert haben?",
    options: ["LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN", "INNER JOIN"],
    correct: 3,
    timeLimit: 35,
    difficulty: "easy"
  },
  {
    id: 67,
    type: "truefalse",
    question: "Ein Interface in Java kann konkrete Methodenimplementierungen enthalten.",
    correct: true,
    timeLimit: 35,
    difficulty: "easy"
  },
  {
    id: 68,
    type: "input",
    question: "Welches Zeichen wird verwendet, um in C eine einzelne Zeile zu kommentieren?",
    correct: "//",
    timeLimit: 20,
    difficulty: "easy"
  },
  {
    id: 69,
    type: "mc",
    question: "Was ist ein 'Constructor' in Java?",
    options: ["Eine Methode zum Zerstören von Objekten", "Eine spezielle Methode zur Initialisierung von Objekten", "Eine Methode, um Klassen zu verbinden", "Eine Variable, die die Objektanzahl speichert"],
    correct: 1,
    timeLimit: 40,
    difficulty: "easy"
  },
  {
    id: 70,
    type: "truefalse",
    question: "Die `TRUNCATE`-Anweisung in SQL kann mit einer `WHERE`-Klausel verwendet werden.",
    correct: false,
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 71,
    type: "input",
    question: "Welches Schlüsselwort wird in Python verwendet, um eine anonyme Funktion (Lambda-Funktion) zu erstellen?",
    correct: "lambda",
    timeLimit: 30,
    difficulty: "easy"
  },
  {
    id: 72,
    type: "mc",
    question: "Was beschreibt der Begriff 'Big O Notation'?",
    options: ["Die Größe des Programms", "Die Anzahl der Codezeilen", "Die Komplexität eines Algorithmus", "Die Anzahl der Programmierer im Team"],
    correct: 2,
    timeLimit: 45,
    difficulty: "easy"
  },
  {
    id: 73,
    type: "truefalse",
    question: "Ein `char` in C wird immer durch einfache Anführungszeichen (`) deklariert.",
    correct: true,
    timeLimit: 20,
    difficulty: "easy"
  },
  {
    id: 74,
    type: "input",
    question: "Wofür steht 'SQL'?",
    correct: "Structured Query Language",
    timeLimit: 25,
    difficulty: "easy"
  },
  {
    id: 75,
    type: "mc",
    question: "Welche der folgenden Schleifen wird in C mindestens einmal ausgeführt?",
    options: ["for", "while", "do-while", "if-else"],
    correct: 2,
    timeLimit: 30,
    difficulty: "easy"
  }
];