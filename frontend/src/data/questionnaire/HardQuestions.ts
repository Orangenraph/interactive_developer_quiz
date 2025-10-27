import { McQuestion, InputQuestions, CodeQuestions } from '../BaseQuestions';

export const HARD_QUESTIONS: (McQuestion | InputQuestions | CodeQuestions)[] = [

  {
    id: 1,
    type: "code",
    question: "Diese Java Singleton-Implementierung ist fehlerhaft und nicht threadsicher. Was fehlt, um das 'double-checked locking' korrekt zu implementieren?",
    code: `public class Singleton {\n    private static Singleton instance;\n    private Singleton() {}\n\n    public static Singleton getInstance() {\n        if (instance == null) {\n            synchronized (Singleton.class) {\n                instance = new Singleton();\n            }\n        }\n        return instance;\n    }\n}`,
    correct: "Das 'volatile' Schlüsselwort und eine zweite 'null'-Prüfung im synchronized-Block",
    timeLimit: 75,
    difficulty: "hard"
  },
  {
    id: 2,
    type: "mc",
    question: "Welches der folgenden Konzepte ist eine der größten Innovationen von Rust?",
    options: [
      "Garbage Collection",
      "Dynamisches Typing",
      "Das Besitz- und Ausleihsystem (ownership and borrowing system)",
      "Statische Typisierung"
    ],
    correct: 2,
    timeLimit: 60,
    difficulty: "hard"
  },
  {
    id: 3,
    type: "code",
    question: "Dieser C++ Code führt zu undefiniertem Verhalten, weil der Destruktor der abgeleiteten Klasse nicht aufgerufen wird. Wie korrigiert man das?",
    code: `class Base {\npublic:\n    ~Base() { /*...*/ }\n};\nclass Derived : public Base {\npublic:\n    ~Derived() { /*...*/ }\n};\n\nBase* ptr = new Derived();\ndelete ptr;`,
    correct: "Den Destruktor der Base-Klasse als 'virtual' deklarieren.",
    timeLimit: 70,
    difficulty: "hard"
  },
  {
    id: 4,
    type: "code",
    question: "Dieser C# Code kann zu einem Deadlock führen. Was ist die Ursache?",
    code: `Thread t1 = new Thread(() => { lock(A) { Thread.Sleep(100); lock(B); } });\nThread t2 = new Thread(() => { lock(B) { Thread.Sleep(100); lock(A); } });`,
    correct: "Die Threads erwerben die Sperren (Locks) in unterschiedlicher Reihenfolge.",
    timeLimit: 65,
    difficulty: "hard"
  },
  {
    id: 5,
    type: "mc",
    question: "Welcher Informatiker prägte den Begriff 'Objektorientierte Programmierung' und war der Hauptentwickler von Smalltalk?",
    options: [
      "Bjarne Stroustrup",
      "Dennis Ritchie",
      "Alan Kay",
      "James Gosling"
    ],
    correct: 2,
    timeLimit: 60,
    difficulty: "hard"
  },
  {
    id: 6,
    type: "code",
    question: "Dieser C++ Code führt zu einem 'double free' Fehler. Was fehlt in der Klasse, um dies gemäß der 'Rule of Three' zu verhindern?",
    code: `class MyClass {\npublic:\n    int* data;\n    MyClass(int val) { data = new int(val); }\n    ~MyClass() { delete data; }\n};\n\nint main() {\n    MyClass obj1(10);\n    MyClass obj2 = obj1;\n}`,
    correct: "Ein expliziter Kopierkonstruktor (Copy Constructor)",
    timeLimit: 70,
    difficulty: "hard"
  },
  {
    id: 7,
    type: "mc",
    question: "Welcher Transaktionsisolationslevel in SQL schützt vor 'Phantom Reads'?",
    options: ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"],
    correct: 3,
    timeLimit: 60,
    difficulty: "hard"
  },
  {
    id: 8,
    type: "mc",
    question: "Gemäß dem CAP-Theorem muss ein verteiltes System im Falle einer Netzwerkpartition (Partition Tolerance) zwischen welchen beiden Garantien wählen?",
    options: ["Consistency und Durability", "Availability und Scalability", "Consistency und Availability", "Latency und Throughput"],
    correct: 2,
    timeLimit: 60,
    difficulty: "hard"
  },
  {
    id: 9,
    type: "input",
    question: "Wie nennt man in Python eine Funktion, deren Ausführung pausiert und später wieder aufgenommen werden kann und dabei ihren Zustand beibehält?",
    correct: "Generator",
    timeLimit: 50,
    difficulty: "hard"
  },
  {
    id: 10,
    type: "code",
    question: "Was ist der Wert von `x` nach diesem C-Code? (Das Verhalten ist undefiniert, aber was ist ein wahrscheinliches Ergebnis auf gängigen Compilern?)",
    code: `int i = 5;\nint x = ++i + i++;`,
    correct: "12",
    timeLimit: 70,
    difficulty: "hard"
  },
  {
    id: 11,
    type: "mc",
    question: "Was ist der Zweck des `volatile`-Schlüsselworts in Java?",
    options: ["Es verhindert, dass eine Variable serialisiert wird.", "Es stellt sicher, dass Änderungen an einer Variable sofort für andere Threads sichtbar sind.", "Es markiert eine Methode als veraltet.", "Es deklariert eine Variable als unveränderlich."],
    correct: 1,
    timeLimit: 65,
    difficulty: "hard"
  },
  {
    id: 12,
    type: "mc",
    question: "Warum kann Dijkstra's Algorithmus nicht mit negativen Kantengewichten umgehen, der Bellman-Ford-Algorithmus aber schon?",
    options: ["Dijkstra verwendet eine Prioritätswarteschlange, die bei negativen Werten versagt.", "Dijkstra's gieriger Ansatz geht fälschlicherweise davon aus, dass ein einmal besuchter Knoten den kürzesten Weg hat, was bei negativen Kanten nicht mehr gilt.", "Bellman-Ford ist ein Brute-Force-Algorithmus.", "Dijkstra funktioniert nur auf azyklischen Graphen."],
    correct: 1,
    timeLimit: 75,
    difficulty: "hard"
  },
  {
    id: 13,
    type: "input",
    question: "Welcher Mechanismus erlaubt es einer Python-Klasse, das Verhalten von Operatoren wie `+` oder `[]` für ihre Instanzen zu definieren?",
    correct: "Magic Methods",
    timeLimit: 55,
    difficulty: "hard"
  },
  {
    id: 14,
    type: "mc",
    question: "Welcher Datentyp in COBOL wird verwendet, um gepackte Dezimalzahlen effizient zu speichern?",
    options: ["PIC 9", "COMP", "COMP-3", "BINARY"],
    correct: 2,
    timeLimit: 70,
    difficulty: "hard"
  },
  {
    id: 15,
    type: "code",
    question: "Was gibt dieser JavaScript-Code aus?",
    code: `(function() {\n  var a = b = 3;\n})();\n\nconsole.log(typeof a, typeof b);`,
    correct: "undefined number",
    timeLimit: 75,
    difficulty: "hard"
  },
  {
    id: 16,
    type: "input",
    question: "Wie nennt man das Regressionsmodell, das L1-Regularisierung verwendet, um Merkmalsselektion durchzuführen?",
    correct: "Lasso",
    timeLimit: 65,
    difficulty: "hard"
  },
  {
    id: 17,
    type: "input",
    question: "Wie nennt man den Zustand in einem verteilten System, bei dem aufgrund einer Netzwerkpartition mehrere Knoten fälschlicherweise glauben, der einzige 'Master' zu sein?",
    correct: "Split-Brain",
    timeLimit: 60,
    difficulty: "hard"
  },
  {
    id: 18,
    type: "mc",
    question: "Was ist eine 'Closure' in der Programmierung?",
    options: ["Eine Methode, die eine Klasse schließt.", "Eine Funktion, die sich an die Variablen aus ihrem lexikalischen Geltungsbereich erinnert, auch wenn sie außerhalb dieses Bereichs ausgeführt wird.", "Ein Fehler, der durch eine Endlosschleife verursacht wird.", "Eine Datenstruktur zum schnellen Nachschlagen."],
    correct: 1,
    timeLimit: 55,
    difficulty: "hard"
  },
  {
    id: 19,
    type: "code",
    question: "Was ist der Output dieses C-Codes auf einem 64-Bit-System?",
    code: `int arr[5];\nprintf("%d", (char*)(&arr + 1) - (char*)(&arr[0]));`,
    correct: "20",
    timeLimit: 80,
    difficulty: "hard"
  },
  {
    id: 20,
    type: "code",
    question: "Welches Ergebnis liefert diese SQL-Abfrage in PostgreSQL?",
    code: `SELECT CAST('123' AS INTEGER) + '4';`,
    correct: "127",
    timeLimit: 60,
    difficulty: "hard"
  },
  {
    id: 21,
    type: "input",
    question: "Wie heißt das Entwurfsmuster, das es einem Objekt ermöglicht, sein Verhalten zu ändern, wenn sich sein interner Zustand ändert?",
    correct: "State",
    timeLimit: 60,
    difficulty: "hard"
  },
  {
    id: 22,
    type: "mc",
    question: "Was ist der Hauptunterschied zwischen einem AVL-Baum und einem Rot-Schwarz-Baum?",
    options: ["AVL-Bäume erlauben keine Duplikate.", "Rot-Schwarz-Bäume sind immer perfekt balanciert.", "AVL-Bäume haben strengere Balancierungsregeln und sind daher bei Suchen schneller, aber bei Einfüge- und Löschvorgängen langsamer.", "AVL-Bäume verwenden Farben zur Balancierung."],
    correct: 2,
    timeLimit: 75,
    difficulty: "hard"
  },
  {
    id: 23,
    type: "mc",
    question: "Welches Konzept im Java Memory Model (JMM) definiert eine partielle Ordnung von Speicheroperationen, um die Sichtbarkeit von Änderungen zwischen Threads zu garantieren?",
    options: ["Memory Barrier", "Happens-Before Relationship", "Thread-Local Storage", "Atomic Operation"],
    correct: 1,
    timeLimit: 70,
    difficulty: "hard"
  },
  {
    id: 24,
    type: "input",
    question: "Welcher Konsensalgorithmus wird von Systemen wie etcd und Consul verwendet, um einen fehlertoleranten, verteilten Zustand zu verwalten?",
    correct: "Raft",
    timeLimit: 65,
    difficulty: "hard"
  },
  {
    id: 25,
    type: "code",
    question: "Was ist der Wert von `s` in diesem Python-Code?",
    code: `s = 'hello'\ns[0] = 'H'`,
    correct: "TypeError",
    timeLimit: 50,
    difficulty: "hard"
  },
  {
    id: 26,
    type: "mc",
    question: "Was beschreibt das 'Covariance' und 'Contravariance' Prinzip in der Typtheorie?",
    options: ["Wie sich Subtyping bei einfachen Typen verhält.", "Wie sich Subtyping bei komplexen Typen (z.B. Generics, Funktionssignaturen) verhält.", "Wie Variablen im Speicher angeordnet werden.", "Wie die Garbage Collection funktioniert."],
    correct: 1,
    timeLimit: 70,
    difficulty: "hard"
  },
  {
    id: 27,
    type: "input",
    question: "Welcher Git-Befehl wird verwendet, um eine Serie von Commits interaktiv zu bearbeiten, neu anzuordnen oder zusammenzufassen?",
    correct: "git rebase -i",
    timeLimit: 60,
    difficulty: "hard"
  },
  {
    id: 28,
    type: "input",
    question: "Wie nennt man eine Funktion höherer Ordnung, die eine Funktion nimmt und eine neue Funktion mit erweitertem Verhalten zurückgibt?",
    correct: "Decorator",
    timeLimit: 50,
    difficulty: "hard"
  },
  {
    id: 29,
    type: "mc",
    question: "In der Transformer-Architektur (ML), was ist der Hauptzweck des 'Self-Attention'-Mechanismus?",
    options: ["Die Rechenzeit zu reduzieren.", "Die Wichtigkeit verschiedener Wörter in einer Sequenz relativ zueinander zu gewichten.", " overfitting zu vermeiden.", "Die Eingabedaten zu normalisieren."],
    correct: 1,
    timeLimit: 75,
    difficulty: "hard"
  },
  {
    id: 30,
    type: "mc",
    question: "Was unterscheidet eine 'Materialized View' von einer normalen SQL 'VIEW'?",
    options: ["Sie kann nicht indiziert werden.", "Sie speichert das Abfrageergebnis physisch und muss manuell oder automatisch aktualisiert werden.", "Sie ist nur in NoSQL-Datenbanken verfügbar.", "Sie kann keine Joins enthalten."],
    correct: 1,
    timeLimit: 65,
    difficulty: "hard"
  },
  {
    id: 31,
    type: "code",
    question: "Was gibt dieser Java-Code aus?",
    code: `Integer i1 = 127;\nInteger i2 = 127;\nSystem.out.println(i1 == i2);`,
    correct: "true",
    timeLimit: 65,
    difficulty: "hard"
  },
  {
    id: 32,
    type: "input",
    question: "Welcher TCP-Mechanismus verhindert, dass ein schneller Sender einen langsamen Empfänger überlastet?",
    correct: "Flow Control",
    timeLimit: 60,
    difficulty: "hard"
  },
  {
    id: 33,
    type: "mc",
    question: "Was ist 'Memory Alignment' in C?",
    options: ["Das manuelle Freigeben von Speicher.", "Die Art und Weise, wie Daten an bestimmten Adressgrenzen im Speicher abgelegt werden, um die Leistung zu optimieren.", "Ein Fehler, bei dem auf ungültigen Speicher zugegriffen wird.", "Das Sortieren von Daten im Speicher."],
    correct: 1,
    timeLimit: 70,
    difficulty: "hard"
  },
  {
    id: 34,
    type: "code",
    question: "Welcher Fehler wird durch diesen Python-Code ausgelöst?",
    code: `my_dict = {}\nmy_list = [1, 2]\nmy_dict[my_list] = "value"`,
    correct: "TypeError: unhashable type: 'list'",
    timeLimit: 50,
    difficulty: "hard"
  },
  {
    id: 35,
    type: "input",
    question: "Wie heißt das Phänomen in Machine Learning, bei dem die Gradienten während des Trainings sehr klein werden und das Lernen verlangsamen oder stoppen?",
    correct: "Vanishing Gradient Problem",
    timeLimit: 65,
    difficulty: "hard"
  },
  {
    id: 36,
    type: "mc",
    question: "Was unterscheidet das 'Observer Pattern' vom 'Pub/Sub Pattern'?",
    options: ["Es gibt keinen Unterschied.", "Im Observer-Pattern kennen sich Subject und Observer direkt; im Pub/Sub sind sie durch einen Broker entkoppelt.", "Das Observer-Pattern ist asynchron, Pub/Sub ist synchron.", "Das Pub/Sub-Pattern kann nur einen einzigen Subscriber haben."],
    correct: 1,
    timeLimit: 75,
    difficulty: "hard"
  },
  {
    id: 37,
    type: "mc",
    question: "Welche Eigenschaft beschreibt eine Operation, die mehrmals ausgeführt werden kann, ohne das Ergebnis über die erste Ausführung hinaus zu verändern?",
    options: ["Idempotenz", "Atomarität", "Assoziativität", "Transitivität"],
    correct: 0,
    timeLimit: 60,
    difficulty: "hard"
  },
  {
    id: 38,
    type: "code",
    question: "Was gibt dieser JavaScript-Code aus?",
    code: `console.log([] + []);`,
    correct: "",
    timeLimit: 50,
    difficulty: "hard"
  },
  {
    id: 39,
    type: "input",
    question: "Welches SOLID-Prinzip besagt, dass abgeleitete Klassen in der Lage sein müssen, ihre Basisklassen zu ersetzen, ohne das Programm zu beeinträchtigen?",
    correct: "Liskov Substitution Principle",
    timeLimit: 60,
    difficulty: "hard"
  },
  {
    id: 40,
    type: "mc",
    question: "Was ist 'Tail Call Optimization'?",
    options: ["Eine Optimierung, um den letzten Wert einer Liste schnell zu finden.", "Eine Methode, bei der ein rekursiver Aufruf am Ende einer Funktion durch einen Sprungbefehl (goto) ersetzt wird, um Stack-Overflow-Fehler zu vermeiden.", "Ein Algorithmus zur Optimierung von SQL-Abfragen.", "Eine Hardware-Beschleunigung für Matrixmultiplikationen."],
    correct: 1,
    timeLimit: 70,
    difficulty: "hard"
  },
  {
    id: 41,
    type: "mc",
    question: "Was ist die primäre Anwendung eines Bloom-Filters?",
    options: ["Sortieren von großen Datenmengen.", "Eine speichereffiziente, probabilistische Datenstruktur, um zu testen, ob ein Element Mitglied einer Menge ist.", "Verlustfreie Kompression von Texten.", "Sichere Speicherung von Passwörtern."],
    correct: 1,
    timeLimit: 65,
    difficulty: "hard"
  },
  {
    id: 42,
    type: "input",
    question: "Wie heißt die Datenstruktur, die häufig für die Implementierung von 'Least Recently Used' (LRU) Caches verwendet wird?",
    correct: "Doubly Linked List",
    timeLimit: 65,
    difficulty: "hard"
  },
  {
    id: 43,
    type: "code",
    question: "Was ist der Wert von `x` in diesem C-Code?",
    code: `int x = printf("Hello");`,
    correct: "5",
    timeLimit: 50,
    difficulty: "hard"
  },
  {
    id: 44,
    type: "mc",
    question: "In SQL, was ist der Zweck von 'Window Functions' wie `ROW_NUMBER()` oder `LAG()`?",
    options: ["Grafische Fenster in der Anwendung zu erstellen.", "Berechnungen über eine Menge von Zeilen durchzuführen, die mit der aktuellen Zeile in Beziehung stehen.", "Den Zugriff auf die Datenbank zu beschränken.", "Daten zu verschlüsseln."],
    correct: 1,
    timeLimit: 65,
    difficulty: "hard"
  },
  {
    id: 45,
    type: "input",
    question: "Welches Entwurfsmuster verwendet typischerweise private Konstruktoren und eine statische Methode, um sicherzustellen, dass nur eine Instanz einer Klasse existiert?",
    correct: "Singleton",
    timeLimit: 55,
    difficulty: "hard"
  },
  {
    id: 46,
    type: "input",
    question: "Welches Architekturmuster trennt Lese- und Schreiboperationen in unterschiedliche Modelle?",
    correct: "CQRS",
    timeLimit: 60,
    difficulty: "hard"
  },
  {
    id: 47,
    type: "mc",
    question: "Was ist eine 'Turing Machine'?",
    options: ["Ein früher Supercomputer.", "Ein theoretisches Modell der Berechnung, das definiert, was algorithmisch berechenbar ist.", "Ein Framework für künstliche Intelligenz.", "Ein Verschlüsselungsalgorithmus."],
    correct: 1,
    timeLimit: 60,
    difficulty: "hard"
  },
  {
    id: 48,
    type: "mc",
    question: "Was ist der primäre Zweck des Diffie-Hellman-Schlüsselaustausch-Algorithmus?",
    options: ["Asymmetrische Verschlüsselung von Nachrichten.", "Digitale Signaturen zu erstellen.", "Zwei Parteien zu ermöglichen, einen gemeinsamen geheimen Schlüssel über einen unsicheren Kanal zu vereinbaren.", "Passwörter zu hashen."],
    correct: 2,
    timeLimit: 70,
    difficulty: "hard"
  },
  {
    id: 49,
    type: "code",
    question: "Was gibt dieser Python-Code aus?",
    code: `class Parent: pass\nclass Child1(Parent): pass\nclass Child2(Parent): pass\nprint(issubclass(Child1, Child2))`,
    correct: "False",
    timeLimit: 55,
    difficulty: "hard"
  },
  {
    id: 50,
    type: "input",
    question: "Wie nennt man den Vorgang, bei dem ein Objekt einer abgeleiteten Klasse als Objekt seiner Basisklasse behandelt wird?",
    correct: "Upcasting",
    timeLimit: 50,
    difficulty: "hard"
  },
  {
    id: 51,
    type: "mc",
    question: "Was ist ein 'side effect' in der funktionalen Programmierung?",
    options: ["Ein unerwarteter Fehler im Code.", "Jede Interaktion einer Funktion mit der Außenwelt, die nicht über ihre Rückgabewerte erfolgt (z.B. Ändern einer globalen Variable, I/O).", "Eine Leistungsoptimierung durch den Compiler.", "Eine zusätzliche, nützliche Funktion eines Algorithmus."],
    correct: 1,
    timeLimit: 60,
    difficulty: "hard"
  },
  {
    id: 52,
    type: "mc",
    question: "Was ist die definierende Eigenschaft eines B+ Baumes im Vergleich zu einem B-Baum?",
    options: ["Er ist immer ein binärer Baum.", "Nur Blattknoten speichern die eigentlichen Daten (oder Zeiger darauf), was Scans über Bereiche effizienter macht.", "Er hat eine geringere Höhe.", "Er kann negative Schlüssel speichern."],
    correct: 1,
    timeLimit: 65,
    difficulty: "hard"
  },
  {
    id: 53,
    type: "input",
    question: "Wie heißt die Python Enhancement Proposal (PEP), die den Style Guide für Python-Code definiert?",
    correct: "PEP 8",
    timeLimit: 40,
    difficulty: "hard"
  },
  {
    id: 54,
    type: "mc",
    question: "Was ist der Zweck des 'Y-Combinator' in der theoretischen Informatik?",
    options: ["Ein Startup-Inkubator im Silicon Valley.", "Ein Fixpunkt-Kombinator, der die Implementierung von Rekursion in Sprachen ermöglicht, die sie nicht direkt unterstützen (wie das Lambda-Kalkül).", "Ein Algorithmus zur Graphen-Traversierung.", "Ein Kompressionsalgorithmus."],
    correct: 1,
    timeLimit: 80,
    difficulty: "hard"
  },
  {
    id: 55,
    type: "mc",
    question: "Was ist der Hauptvorteil von WebAssembly (Wasm)?",
    options: ["Es ersetzt JavaScript vollständig.", "Es bietet ein performantes, portables Binärformat als Kompilierungsziel für Sprachen wie C++, C# und Rust im Web.", "Es kann nur in Google Chrome ausgeführt werden.", "Es ist eine neue JavaScript-Bibliothek."],
    correct: 1,
    timeLimit: 70,
    difficulty: "hard"
  },
  {
    id: 56,
    type: "code",
    question: "Was gibt dieser Java-Code aus?",
    code: `System.out.println(1.0 / 0.0);`,
    correct: "Infinity",
    timeLimit: 50,
    difficulty: "hard"
  },
  {
    id: 57,
    type: "input",
    question: "Welches Paradigma der nebenläufigen Programmierung vermeidet 'shared state' und setzt stattdessen auf die Übergabe von Nachrichten zwischen Prozessen?",
    correct: "Actor Model",
    timeLimit: 65,
    difficulty: "hard"
  },
  {
    id: 58,
    type: "mc",
    question: "Was ist 'Type Erasure' in Java Generics?",
    options: ["Der Prozess des Löschens ungenutzter Typen.", "Der Compiler ersetzt zur Laufzeit alle generischen Typparameter durch ihre Grenzen oder durch `Object`.", "Ein Fehler, bei dem ein falscher Typ verwendet wird.", "Das automatische Konvertieren von Typen."],
    correct: 1,
    timeLimit: 70,
    difficulty: "hard"
  },
  {
    id: 59,
    type: "input",
    question: "Ein Min-Heap wird durch das Array [3, 5, 8, 10, 6] dargestellt. Wie sieht das Array nach dem Einfügen des Werts 2 aus?",
    correct: "[2, 5, 3, 10, 6, 8]",
    timeLimit: 75,
    difficulty: "hard"
  },
  {
    id: 60,
    type: "input",
    question: "Wie nennt man den Versuch eines Angreifers, durch wiederholtes Senden von SYN-Paketen die Ressourcen eines Servers zu erschöpfen?",
    correct: "SYN Flood",
    timeLimit: 55,
    difficulty: "hard"
  },
  {
    id: 61,
    type: "code",
    question: "Was ist der Output dieses JavaScript Codes?",
    code: `console.log(NaN === NaN);`,
    correct: "false",
    timeLimit: 45,
    difficulty: "hard"
  },
  {
    id: 62,
    type: "mc",
    question: "Welches Problem versucht der 'Circuit Breaker' Pattern zu lösen?",
    options: ["Diebstahl von elektrischem Strom.", "Verhinderung von kaskadierenden Fehlern in verteilten Systemen, indem Anrufe an einen ausgefallenen Dienst gestoppt werden.", "Endlosschleifen in der Programmierung.", "Sicherheitslücken durch SQL-Injection."],
    correct: 1,
    timeLimit: 60,
    difficulty: "hard"
  },
  {
    id: 63,
    type: "code",
    question: "Was ist der wahrscheinliche Output dieses C-Codes auf einem 64-Bit-System mit typischem Alignment?",
    code: `struct Example { char a; int b; char c; };\nprintf("%zu", sizeof(struct Example));`,
    correct: "12",
    timeLimit: 70,
    difficulty: "hard"
  },
  {
    id: 64,
    type: "input",
    question: "Wie heißt der Prozess in neuronalen Netzen, bei dem die Gewichte basierend auf dem Fehler angepasst werden?",
    correct: "Backpropagation",
    timeLimit: 55,
    difficulty: "hard"
  },
  {
    id: 65,
    type: "mc",
    question: "Was ist 'Currying' in der funktionalen Programmierung?",
    options: ["Eine Methode, um scharfes Essen zuzubereiten.", "Das Würzen von Code mit unnötigen Features.", "Die Technik, eine Funktion, die mehrere Argumente entgegennimmt, in eine Sequenz von Funktionen umzuwandeln, die jeweils nur ein Argument nehmen.", "Das Speichern von Zwischenergebnissen von Funktionen."],
    correct: 2,
    timeLimit: 65,
    difficulty: "hard"
  },
  {
    id: 66,
    type: "input",
    question: "Welche spezielle Python-Methode muss in einer Klasse implementiert werden, damit deren Instanzen wie Funktionen aufgerufen werden können?",
    correct: "__call__",
    timeLimit: 55,
    difficulty: "hard"
  },
  {
    id: 67,
    type: "code",
    question: "Welchen Wert hat `x` in diesem SQL Statement (in den meisten Dialekten)?",
    code: `SELECT 1 IS NOT NULL AS x;`,
    correct: "1",
    timeLimit: 60,
    difficulty: "hard"
  },
  {
    id: 68,
    type: "input",
    question: "Wie heißt das Architekturkonzept, bei dem der Zustand einer Anwendung als eine Folge von Ereignissen gespeichert wird?",
    correct: "Event Sourcing",
    timeLimit: 65,
    difficulty: "hard"
  },
  {
    id: 69,
    type: "mc",
    question: "Was ist eine 'Monade' in der funktionalen Programmierung?",
    options: ["Eine einzelne, unteilbare Code-Einheit.", "Ein Entwurfsmuster, das einen sequenziellen Berechnungsfluss in einem rein funktionalen Kontext ermöglicht.", "Eine Variable, die nur einmal zugewiesen werden kann.", "Ein Datentyp für ganze Zahlen."],
    correct: 1,
    timeLimit: 80,
    difficulty: "hard"
  },
  {
    id: 70,
    type: "mc",
    question: "Welche Ebene der Chomsky-Hierarchie beschreibt die Grammatiken, die von einem Pushdown-Automaten erkannt werden können?",
    options: ["Typ-0 (Rekursiv aufzählbar)", "Typ-1 (Kontextsensitiv)", "Typ-2 (Kontextfrei)", "Typ-3 (Regulär)"],
    correct: 2,
    timeLimit: 75,
    difficulty: "hard"
  },
  {
    id: 71,
    type: "input",
    question: "Wie nennt man eine Datenstruktur, die ein 'Prefix Tree' ist und zur effizienten Speicherung und zum Abruf von Strings verwendet wird?",
    correct: "Trie",
    timeLimit: 60,
    difficulty: "hard"
  },
  {
    id: 72,
    type: "code",
    question: "Was gibt dieser Java-Code aus?",
    code: `Integer i3 = 128;\nInteger i4 = 128;\nSystem.out.println(i3 == i4);`,
    correct: "false",
    timeLimit: 65,
    difficulty: "hard"
  },
  {
    id: 73,
    type: "mc",
    question: "Was ist 'Amortized Time Complexity'?",
    options: ["Die durchschnittliche Zeitkomplexität über alle möglichen Eingaben.", "Die Zeitkomplexität im schlechtesten Fall.", "Die durchschnittliche Zeit, die eine Operation über eine Sequenz von Operationen benötigt.", "Die Speicherkomplexität eines Algorithmus."],
    correct: 2,
    timeLimit: 75,
    difficulty: "hard"
  },
  {
    id: 74,
    type: "input",
    question: "Wie hieß das interne Cluster-Management-System bei Google, das als Vorläufer und Inspiration für Kubernetes gilt?",
    correct: "Borg",
    timeLimit: 60,
    difficulty: "hard"
  },
  {
    id: 75,
    type: "input",
    question: "Welcher DNS-Record-Typ wird verwendet, um einen Mailserver für eine Domain anzugeben?",
    correct: "MX",
    timeLimit: 45,
    difficulty: "hard"
  }
];