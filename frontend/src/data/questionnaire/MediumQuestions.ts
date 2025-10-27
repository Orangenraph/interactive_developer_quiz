// src/data/questions/MediumQuestions.ts

import { McQuestion, TrueFalseQuestion, InputQuestions, CodeQuestions } from '../BaseQuestions';

export const MEDIUM_QUESTIONS: (McQuestion | TrueFalseQuestion | InputQuestions | CodeQuestions)[] = [
  {
    id: 1,
    type: "code",
    question: "Dieser Python-Code soll separate Listen erstellen, gibt aber [1] und [1, 2] aus. Was ist die korrekte Implementierung der Funktion?",
    code: `def add_to_list(element, my_list=[]):\n    my_list.append(element)\n    return my_list\n\nlist1 = add_to_list(1)\nlist2 = add_to_list(2)`,
    correct: "def add_to_list(element, my_list=None):\n    if my_list is None:\n        my_list = []\n    my_list.append(element)\n    return my_list",
    timeLimit: 60,
    difficulty: "medium"
  },
  {
    id: 2,
    type: "mc",
    question: "Was war die größte Herausforderung bei der Einführung von 64-Bit-Architekturen für bestehende 32-Bit-Software?",
    options: [
      "Verdopplung der Integer-Größe führte zu Speicherlecks.",
      "Die Änderung der Pointer-Größe brach die Speichermodelle.",
      "Höhere Kosten für 64-Bit-Prozessoren.",
      "Alle Betriebssysteme mussten neu geschrieben werden."
    ],
    correct: 1,
    timeLimit: 55,
    difficulty: "medium"
  },
  {
    id: 3,
    type: "code",
    question: "Dieser Java-Code soll doppelte 'Person'-Objekte in einem HashSet verhindern. Was ist die Ausgabe von `people.size()`?",
    code: `class Person {\n    private String name;\n    private int age;\n    public Person(String name, int age) { this.name = name; this.age = age; }\n}\n\nSet<Person> people = new HashSet<>();\npeople.add(new Person("Alice", 30));\npeople.add(new Person("Alice", 30));`,
    correct: "2",
    timeLimit: 60,
    difficulty: "medium"
  },
  {
    id: 4,
    type: "code",
    question: "Welcher Destruktor wird in diesem C++ Code aufgerufen, was zu einem Speicherleck führt?",
    code: `class Base { public: ~Base() { /*...*/ } };\nclass Derived : public Base { public: ~Derived() { /*...*/ } };\n\nBase* ptr = new Derived();\ndelete ptr;`,
    correct: "Nur der Base-Destruktor",
    timeLimit: 55,
    difficulty: "medium"
  },
  {
    id: 5,
    type: "mc",
    question: "Welches war der primäre Anwendungsbereich für die Programmiersprache COBOL?",
    options: [
      "Wissenschaftliche Berechnungen",
      "Militärprogramme",
      "Geschäftsanwendungen",
      "Robotersteuerung"
    ],
    correct: 2,
    timeLimit: 45,
    difficulty: "medium"
  },
  {
    id: 6,
    type: "code",
    question: "Diese C-Funktion hat einen Fehler und greift auf ungültigen Speicher zu. An welcher Stelle tritt der Fehler auf?",
    code: `int sum_array(int *arr, int size) {\n    int sum = 0;\n    for (int i = 0; i <= size; i++) {\n        sum += arr[i];\n    }\n    return sum;\n}`,
    correct: "Die Schleifenbedingung (i <= size)",
    timeLimit: 50,
    difficulty: "medium"
  },
  // Bestehende Fragen, IDs angepasst
  {
    id: 7,
    type: "mc",
    question: "Welcher der folgenden Sortieralgorithmen hat im Worst-Case die beste Zeitkomplexität?",
    options: ["Bubble Sort", "Quick Sort", "Merge Sort", "Insertion Sort"],
    correct: 2,
    timeLimit: 50,
    difficulty: "medium"
  },
  {
    id: 8,
    type: "truefalse",
    question: "Ein Hash-Tabellen-Konflikt (Collision) tritt auf, wenn zwei verschiedene Schlüssel den gleichen Hash-Wert erzeugen.",
    correct: true,
    timeLimit: 35,
    difficulty: "medium"
  },
  {
    id: 9,
    type: "input",
    question: "Welches Entwurfsmuster (Design Pattern) stellt sicher, dass eine Klasse nur eine einzige Instanz hat?",
    correct: "Singleton",
    timeLimit: 40,
    difficulty: "medium"
  },
  {
    id: 10,
    type: "code",
    question: "Was ist der Wert von 'x' nach Ausführung dieses Python-Codes?",
    code: `x = [1, 2, 3]\ny = x\ny.append(4)\n# Was ist x?`,
    correct: "[1, 2, 3, 4]",
    timeLimit: 50,
    difficulty: "medium"
  },
  {
    id: 11,
    type: "mc",
    question: "Was ist 'Overfitting' im Kontext des Machine Learning?",
    options: ["Das Modell ist zu einfach und kann die Daten nicht erfassen.", "Das Modell lernt die Trainingsdaten zu gut, inklusive Rauschen, und generalisiert schlecht.", "Das Modell wurde mit zu wenigen Daten trainiert.", "Das Modell konvergiert nicht während des Trainings."],
    correct: 1,
    timeLimit: 60,
    difficulty: "medium"
  },
  {
    id: 12,
    type: "truefalse",
    question: "In C führt `int* ptr = (int*)malloc(sizeof(int));` zu einer Speicherallokation auf dem Stack.",
    correct: false,
    timeLimit: 40,
    difficulty: "medium"
  },
  {
    id: 13,
    type: "input",
    question: "Welches SQL-Statement wird verwendet, um Zeilen aus zwei oder mehr Tabellen basierend auf einer verknüpften Spalte zu kombinieren?",
    correct: "JOIN",
    timeLimit: 35,
    difficulty: "medium"
  },
  {
    id: 14,
    type: "code",
    question: "Welchen Wert hat `result` in diesem Java-Code?",
    code: `String s1 = "Hello";\nString s2 = new String("Hello");\nboolean result = s1 == s2;`,
    correct: "false",
    timeLimit: 55,
    difficulty: "medium"
  },
  {
    id: 15,
    type: "mc",
    question: "Welche Datenstruktur ist am besten geeignet, um eine hierarchische Beziehung darzustellen, wie z.B. einen Dateisystembaum?",
    options: ["Queue", "Stack", "Graph", "Tree"],
    correct: 3,
    timeLimit: 45,
    difficulty: "medium"
  },
  {
    id: 16,
    type: "truefalse",
    question: "Polymorphie ermöglicht es, dass Methoden mit demselben Namen je nach Objekt unterschiedliche Dinge tun können.",
    correct: true,
    timeLimit: 35,
    difficulty: "medium"
  },
  {
    id: 17,
    type: "input",
    question: "Wie lautet der Fachbegriff für eine Funktion, die sich selbst aufruft?",
    correct: "Rekursion",
    timeLimit: 30,
    difficulty: "medium"
  },
  {
    id: 18,
    type: "mc",
    question: "Was ist ein 'Deadlock'?",
    options: ["Ein Fehler, der das Programm zum Absturz bringt.", "Ein Zustand, in dem zwei oder mehr Prozesse ewig aufeinander warten.", "Ein Speicherleck.", "Ein ungesicherter Endpunkt in einem Netzwerk."],
    correct: 1,
    timeLimit: 50,
    difficulty: "medium"
  },
  {
    id: 19,
    type: "truefalse",
    question: "Eine abstrakte Klasse in Java kann nicht instanziiert werden.",
    correct: true,
    timeLimit: 30,
    difficulty: "medium"
  },
  {
    id: 20,
    type: "code",
    question: "Was gibt dieser SQL-Befehl zurück?",
    code: `SELECT COUNT(CASE WHEN score > 90 THEN 1 END) FROM students;`,
    correct: "Die Anzahl der Studenten mit einer Punktzahl größer als 90",
    timeLimit: 60,
    difficulty: "medium"
  },
  {
    id: 21,
    type: "input",
    question: "Welcher Begriff aus dem 'supervised Machine Learning' beschreibt ein Modell, das kontinuierliche Werte vorhersagt (z.B. einen Preis)?",
    correct: "Regression",
    timeLimit: 45,
    difficulty: "medium"
  },
  {
    id: 22,
    type: "mc",
    question: "Was ist der Hauptzweck eines Indexes in einer Datenbank?",
    options: ["Speicherplatz sparen", "Datenkonsistenz sicherstellen", "Datenabfragen beschleunigen", "Backup-Erstellung vereinfachen"],
    correct: 2,
    timeLimit: 45,
    difficulty: "medium"
  },
  {
    id: 23,
    type: "truefalse",
    question: "Ein Tuple in Python ist nach seiner Erstellung veränderbar (mutable).",
    correct: false,
    timeLimit: 30,
    difficulty: "medium"
  },
  {
    id: 24,
    type: "input",
    question: "Wie heißt das Konzept in der OOP, bei dem Daten und die Methoden, die auf den Daten arbeiten, in einer Einheit gebündelt werden?",
    correct: "Kapselung",
    timeLimit: 40,
    difficulty: "medium"
  },
  {
    id: 25,
    type: "code",
    question: "Was ist der Output dieses C-Codes, angenommen `sizeof(int)` ist 4?",
    code: `int arr[] = {1, 2, 3};\nint *p = arr;\nint *q = arr + 1;\nprintf("%d", (int)(q - p));`,
    correct: "1",
    timeLimit: 60,
    difficulty: "medium"
  },
  {
    id: 26,
    type: "mc",
    question: "Was unterscheidet einen Prozess von einem Thread?",
    options: ["Threads haben keinen eigenen Speicherbereich, Prozesse schon.", "Prozesse sind immer schneller als Threads.", "Ein Prozess kann mehrere Threads haben, aber ein Thread nicht mehrere Prozesse.", "Es gibt keinen Unterschied."],
    correct: 2,
    timeLimit: 55,
    difficulty: "medium"
  },
  {
    id: 27,
    type: "truefalse",
    question: "Der COBOL `PERFORM` Befehl ist vergleichbar mit einer Schleife oder einem Funktionsaufruf in modernen Sprachen.",
    correct: true,
    timeLimit: 40,
    difficulty: "medium"
  },
  {
    id: 28,
    type: "input",
    question: "Welches Architekturmuster trennt eine Anwendung in Datenmodell, Präsentationslogik und Steuerungslogik?",
    correct: "MVC",
    timeLimit: 40,
    difficulty: "medium"
  },
  {
    id: 29,
    type: "mc",
    question: "Was ist 'Garbage Collection' in Sprachen wie Java?",
    options: ["Das manuelle Freigeben von Speicher.", "Ein Prozess, der ungenutzten Speicher automatisch bereinigt.", "Das Komprimieren von alten Dateien.", "Das Löschen von temporären Dateien."],
    correct: 1,
    timeLimit: 45,
    difficulty: "medium"
  },
  {
    id: 30,
    type: "truefalse",
    question: "Ein `UNION` Operator in SQL kombiniert die Ergebnisse von zwei `SELECT`-Anweisungen und entfernt dabei standardmäßig Duplikate.",
    correct: true,
    timeLimit: 40,
    difficulty: "medium"
  },
  {
    id: 31,
    type: "code",
    question: "Was gibt dieser Python-Code aus?",
    code: `def my_func(a, b=[]):\n    b.append(a)\n    return b\n\nprint(my_func(1))\nprint(my_func(2))`,
    correct: "[1, 2]",
    timeLimit: 65,
    difficulty: "medium"
  },
  {
    id: 32,
    type: "input",
    question: "Welcher TCP/IP-Port wird standardmäßig für HTTPS verwendet?",
    correct: "443",
    timeLimit: 30,
    difficulty: "medium"
  },
  {
    id: 33,
    type: "mc",
    question: "Was beschreibt der Begriff 'Idempotenz' bei einer REST-API-Operation?",
    options: ["Die Operation kann nur einmal ausgeführt werden.", "Die Operation gibt immer dieselbe Antwort zurück.", "Mehrfache Ausführung der Operation hat den gleichen Effekt wie eine einmalige Ausführung.", "Die Operation ist besonders schnell."],
    correct: 2,
    timeLimit: 55,
    difficulty: "medium"
  },
  {
    id: 34,
    type: "truefalse",
    question: "Ein 'Dangling Pointer' in C zeigt auf eine Speicheradresse, die bereits freigegeben wurde.",
    correct: true,
    timeLimit: 35,
    difficulty: "medium"
  },
  {
    id: 35,
    type: "input",
    question: "Wie nennt man den Prozess der Umwandlung von Daten in ein Format, das über ein Netzwerk übertragen oder gespeichert werden kann?",
    correct: "Serialisierung",
    timeLimit: 45,
    difficulty: "medium"
  },
  {
    id: 36,
    type: "mc",
    question: "Welches der folgenden ist ein Beispiel für 'Unsupervised Learning'?",
    options: ["Spam-Erkennung in E-Mails", "Vorhersage von Aktienkursen", "Clustering von Kundendaten in Gruppen", "Bilderkennung von Katzen"],
    correct: 2,
    timeLimit: 50,
    difficulty: "medium"
  },
  {
    id: 37,
    type: "truefalse",
    question: "Die `static`-Modifikator in Java bedeutet, dass eine Variable oder Methode zur Klasse gehört und nicht zu einer Instanz der Klasse.",
    correct: true,
    timeLimit: 35,
    difficulty: "medium"
  },
  {
    id: 38,
    type: "code",
    question: "Was ist der Wert von `c`?",
    code: `int a = 5; // Binär: 0101\nint b = 3; // Binär: 0011\nint c = a & b; // Bitweises AND`,
    correct: "1",
    timeLimit: 50,
    difficulty: "medium"
  },
  {
    id: 39,
    type: "input",
    question: "Wie nennt man die Datenstruktur, die nach dem FIFO-Prinzip (First-In, First-Out) arbeitet?",
    correct: "Queue",
    timeLimit: 30,
    difficulty: "medium"
  },
  {
    id: 40,
    type: "mc",
    question: "In COBOL, was definiert die `PIC` Klausel?",
    options: ["Die Position des Codes", "Den Datentyp und die Größe einer Variablen", "Ein Bild, das angezeigt werden soll", "Die Priorität einer Anweisung"],
    correct: 1,
    timeLimit: 55,
    difficulty: "medium"
  },
  {
    id: 41,
    type: "truefalse",
    question: "Ein `PRIMARY KEY` in einer SQL-Tabelle erzwingt automatisch ein `UNIQUE`- und ein `NOT NULL`-Constraint.",
    correct: true,
    timeLimit: 30,
    difficulty: "medium"
  },
  {
    id: 42,
    type: "input",
    question: "Welcher Algorithmus wird oft zur Wegfindung in Graphen verwendet, z.B. in Navigationssystemen?",
    correct: "Dijkstra",
    timeLimit: 50,
    difficulty: "medium"
  },
  {
    id: 43,
    type: "code",
    question: "Was gibt dieser JavaScript-Code aus?",
    code: `console.log(0.1 + 0.2 === 0.3);`,
    correct: "false",
    timeLimit: 45,
    difficulty: "medium"
  },
  {
    id: 44,
    type: "mc",
    question: "Was ist der Zweck der `GROUP BY`-Klausel in SQL?",
    options: ["Zeilen nach einem bestimmten Kriterium zu filtern.", "Zeilen mit identischen Werten in Spalten zu Gruppen zusammenzufassen.", "Die Ergebnismenge zu sortieren.", "Mehrere Tabellen zu verbinden."],
    correct: 1,
    timeLimit: 45,
    difficulty: "medium"
  },
  {
    id: 45,
    type: "truefalse",
    question: "Ein 'Decorator' in Python ist eine Funktion, die eine andere Funktion als Argument entgegennimmt und eine neue Funktion zurückgibt.",
    correct: true,
    timeLimit: 40,
    difficulty: "medium"
  },
  {
    id: 46,
    type: "input",
    question: "Wie nennt man den Ansatz, Software in kleinen, unabhängigen und lose gekoppelten Diensten zu entwickeln?",
    correct: "Microservices",
    timeLimit: 40,
    difficulty: "medium"
  },
  {
    id: 47,
    type: "mc",
    question: "Welche Normalform stellt sicher, dass es keine transitiven funktionalen Abhängigkeiten gibt?",
    options: ["Erste Normalform (1NF)", "Zweite Normalform (2NF)", "Dritte Normalform (3NF)", "Boyce-Codd-Normalform (BCNF)"],
    correct: 2,
    timeLimit: 60,
    difficulty: "medium"
  },
  {
    id: 48,
    type: "truefalse",
    question: "In einem Binärbaum hat jeder Knoten maximal zwei Kinder.",
    correct: true,
    timeLimit: 30,
    difficulty: "medium"
  },
  {
    id: 49,
    type: "code",
    question: "Was wird in der Konsole ausgegeben?",
    code: `for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 10);\n}`,
    correct: "3 3 3",
    timeLimit: 65,
    difficulty: "medium"
  },
  {
    id: 50,
    type: "input",
    question: "Wofür steht die Abkürzung 'ACID' im Kontext von Datenbanktransaktionen?",
    correct: "Atomicity, Consistency, Isolation, Durability",
    timeLimit: 60,
    difficulty: "medium"
  },
  {
    id: 51,
    type: "mc",
    question: "Was macht ein `git rebase` Befehl?",
    options: ["Erstellt einen neuen Branch.", "Führt zwei Branches zusammen und erzeugt einen Merge-Commit.", "Überträgt eine Folge von Commits auf einen neuen Basis-Commit.", "Löscht den letzten Commit."],
    correct: 2,
    timeLimit: 55,
    difficulty: "medium"
  },
  {
    id: 52,
    type: "truefalse",
    question: "Die Global Interpreter Lock (GIL) in CPython ermöglicht es, dass mehrere Threads gleichzeitig Python-Bytecode ausführen.",
    correct: false,
    timeLimit: 50,
    difficulty: "medium"
  },
  {
    id: 53,
    type: "input",
    question: "Welches HTTP-Verb ist idempotent, aber nicht sicher (safe)?",
    correct: "PUT",
    timeLimit: 50,
    difficulty: "medium"
  },
  {
    id: 54,
    type: "mc",
    question: "In welcher COBOL Division wird der Autor des Programms deklariert?",
    options: ["PROCEDURE DIVISION", "DATA DIVISION", "ENVIRONMENT DIVISION", "IDENTIFICATION DIVISION"],
    correct: 3,
    timeLimit: 45,
    difficulty: "medium"
  },
  {
    id: 55,
    type: "truefalse",
    question: "Eine `final` deklarierte Methode in Java kann in einer Unterklasse überschrieben werden.",
    correct: false,
    timeLimit: 30,
    difficulty: "medium"
  },
  {
    id: 56,
    type: "code",
    question: "Was ist der Rückgabewert dieser Java-Methode?",
    code: `public int test() {\n  try {\n    return 1;\n  } finally {\n    return 2;\n  }\n}`,
    correct: "2",
    timeLimit: 55,
    difficulty: "medium"
  },
  {
    id: 57,
    type: "input",
    question: "Wie nennt man den Prozess, bei dem ein Modell an neuen, ungesehenen Daten getestet wird, um seine Leistung zu bewerten?",
    correct: "Validierung",
    timeLimit: 40,
    difficulty: "medium"
  },
  {
    id: 58,
    type: "mc",
    question: "Was ist ein 'Memory Leak'?",
    options: ["Ein unautorisierter Zugriff auf den Speicher.", "Ein Hardwarefehler im RAM.", "Wenn ein Programm Speicher belegt, ihn aber nicht mehr freigibt, obwohl er nicht mehr benötigt wird.", "Ein zu langsamer Speicherzugriff."],
    correct: 2,
    timeLimit: 45,
    difficulty: "medium"
  },
  {
    id: 59,
    type: "truefalse",
    question: "`String` ist in Java ein primitiver Datentyp.",
    correct: false,
    timeLimit: 25,
    difficulty: "medium"
  },
  {
    id: 60,
    type: "input",
    question: "Welches Protokoll liegt dem World Wide Web zugrunde?",
    correct: "HTTP",
    timeLimit: 30,
    difficulty: "medium"
  },
  {
    id: 61,
    type: "code",
    question: "Was ist der Wert von `result` in diesem Python-Code?",
    code: `a = {1, 2, 3}\nb = {3, 4, 5}\nresult = a | b`,
    correct: "{1, 2, 3, 4, 5}",
    timeLimit: 50,
    difficulty: "medium"
  },
  {
    id: 62,
    type: "mc",
    question: "Was ist der Unterschied zwischen `==` und `.equals()` bei Strings in Java?",
    options: ["Es gibt keinen Unterschied.", "`==` vergleicht den Inhalt, `.equals()` die Referenz.", "`==` vergleicht die Referenz, `.equals()` den Inhalt.", "`==` ist schneller, aber unzuverlässiger."],
    correct: 2,
    timeLimit: 50,
    difficulty: "medium"
  },
  {
    id: 63,
    type: "truefalse",
    question: "Ein 'Stack Overflow' Fehler tritt auf, wenn der für den Heap reservierte Speicherplatz erschöpft ist.",
    correct: false,
    timeLimit: 40,
    difficulty: "medium"
  },
  {
    id: 64,
    type: "input",
    question: "Wie heißt die Komponente eines Compilers, die den Quellcode in eine Folge von Tokens zerlegt?",
    correct: "Lexer",
    timeLimit: 55,
    difficulty: "medium"
  },
  {
    id: 65,
    type: "mc",
    question: "Welche der folgenden Operationen ist in einer Transaktion nicht atomar?",
    options: ["COMMIT", "ROLLBACK", "SELECT", "SAVEPOINT"],
    correct: 2,
    timeLimit: 45,
    difficulty: "medium"
  },
  {
    id: 66,
    type: "truefalse",
    question: "Docker-Container virtualisieren das gesamte Betriebssystem.",
    correct: false,
    timeLimit: 40,
    difficulty: "medium"
  },
  {
    id: 67,
    type: "code",
    question: "Was gibt dieser C-Code aus?",
    code: `char s[] = "hello";\nchar *p = s;\nprintf("%c", p[1]);`,
    correct: "e",
    timeLimit: 45,
    difficulty: "medium"
  },
  {
    id: 68,
    type: "input",
    question: "Welches Konzept beschreibt die Fähigkeit eines neuronalen Netzes, aus Daten zu lernen und Muster zu erkennen?",
    correct: "Backpropagation",
    timeLimit: 60,
    difficulty: "medium"
  },
  {
    id: 69,
    type: "mc",
    question: "Was ist der Hauptvorteil von asynchroner Programmierung?",
    options: ["Der Code ist einfacher zu schreiben.", "Sie verbessert die Reaktionsfähigkeit von Anwendungen durch nicht-blockierende Operationen.", "Sie benötigt weniger Speicher.", "Sie ist immer schneller als synchrone Programmierung."],
    correct: 1,
    timeLimit: 50,
    difficulty: "medium"
  },
  {
    id: 70,
    type: "truefalse",
    question: "Die `HAVING`-Klausel in SQL wird verwendet, um Zeilen zu filtern, bevor eine Gruppierung stattfindet.",
    correct: false,
    timeLimit: 45,
    difficulty: "medium"
  },
  {
    id: 71,
    type: "input",
    question: "Wie lautet der Name des Standard-Build-Automatisierungstools, das in der Java-Welt weit verbreitet ist und auf XML zur Konfiguration setzt?",
    correct: "Maven",
    timeLimit: 40,
    difficulty: "medium"
  },
  {
    id: 72,
    type: "code",
    question: "Was ist der Wert von `x`?",
    code: `let x = 10;\nif (true) {\n  let x = 20;\n}\n// Was ist x?`,
    correct: "10",
    timeLimit: 40,
    difficulty: "medium"
  },
  {
    id: 73,
    type: "mc",
    question: "Welches der SOLID-Prinzipien besagt, dass Klassen für Erweiterungen offen, aber für Änderungen geschlossen sein sollten?",
    options: ["Single Responsibility Principle", "Open/Closed Principle", "Liskov Substitution Principle", "Dependency Inversion Principle"],
    correct: 1,
    timeLimit: 50,
    difficulty: "medium"
  },
  {
    id: 74,
    type: "truefalse",
    question: "Ein TCP-Handshake besteht aus vier Schritten.",
    correct: false,
    timeLimit: 35,
    difficulty: "medium"
  },
  {
    id: 75,
    type: "input",
    question: "Wie nennt man den Algorithmus, der eine 'teile und herrsche' Strategie verwendet, um ein Array zu sortieren?",
    correct: "Merge Sort",
    timeLimit: 45,
    difficulty: "medium"
  }
];