// src/data/questions/GoatedQuestions.ts

import { McQuestion, TrueFalseQuestion, InputQuestions, CodeQuestions } from '../BaseQuestions';

export const GOATED_QUESTIONS: (McQuestion | TrueFalseQuestion | InputQuestions | CodeQuestions)[] = [
  {
    id: 1,
    type: "input",
    question: "In C/C++, wie deklariert man einen konstanten Zeiger (dessen Adresse sich nicht ändern kann) auf einen veränderbaren Integer?",
    correct: "int * const",
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 2,
    type: "code",
    question: "Was ist der wahrscheinliche Output dieses C-Codes auf einem 64-Bit-System (angenommen `sizeof(int)` ist 4)?",
    code: `void func(int arr[10]) {\n  printf("%zu ", sizeof(arr));\n}\n\nint main() {\n  int arr[10];\n  printf("%zu ", sizeof(arr));\n  func(arr);\n  return 0;\n}`,
    correct: "40 8",
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 3,
    type: "mc",
    question: "Was deklariert der folgende C-Code? `void (*foo(int))[10];`",
    options: ["Eine Funktion `foo`, die einen int nimmt und einen Pointer auf ein Array von 10 Pointern auf void zurückgibt.", "Ein Pointer `foo` auf eine Funktion, die einen Pointer auf ein Array von 10 ints zurückgibt.", "Eine Funktion `foo`, die einen int nimmt und einen Pointer auf ein Array von 10 void-Elementen zurückgibt.", "Ein Pointer auf eine Funktion `foo`, die einen int nimmt und einen Pointer auf void zurückgibt."],
    correct: 0,
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 4,
    type: "mc",
    question: "Was ist laut C-Standard das Ergebnis von Zeigerarithmetik auf einem `void*`, wie z.B. in `void *p; p++;`?",
    options: ["Der Zeiger wird um 1 Byte verschoben (als wäre es ein char*).", "Der Zeiger wird um die Wortbreite der CPU verschoben.", "Es ist nicht erlaubt und führt zu einem Compiler-Fehler.", "Der Code kompiliert, führt aber zu undefiniertem Verhalten zur Laufzeit."],
    correct: 2,
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 5,
    type: "mc",
    question: "Was beschreibt in C++ der Begriff 'The Most Vexing Parse'?",
    options: ["Ein schwer zu findender Speicherfehler.", "Ein syntaktisch korrekter Code, den der Compiler als Funktionsdeklaration statt als Variableninitialisierung interpretiert.", "Ein Fehler bei der Template-Instanziierung.", "Ein Linker-Fehler bei mehrfacher Definition."],
    correct: 1,
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 6,
    type: "code",
    question: "Was ist der Output dieses C-Codes, wenn man von einer Little-Endian-Architektur und 4-Byte-Integers ausgeht?",
    code: `int i = 0x41424344; // Hex für 'ABCD'\nchar *c = (char*)&i;\nprintf("%c", *(c + 1));`,
    correct: "C",
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 7,
    type: "code",
    question: "In welcher Reihenfolge werden die Logs in der Konsole ausgegeben?",
    code: `console.log('A');\nsetTimeout(() => console.log('B'), 0);\nPromise.resolve().then(() => console.log('C'));\nconsole.log('D');`,
    correct: "A, D, C, B",
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 8,
    type: "input",
    question: "Welcher System Call (syscall) wird unter der Haube der `pthread_create`-Bibliotheksfunktion in Linux verwendet, um einen neuen Thread zu erzeugen?",
    correct: "clone",
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 9,
    type: "mc",
    question: "Welcher HTTP-Statuscode wird in einem Aprilscherz-RFC als 'I'm a teapot' definiert?",
    options: ["420", "418", "451", "499"],
    correct: 1,
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 10,
    type: "code",
    question: "Was ist das Ergebnis dieses JavaScript-Ausdrucks?",
    code: `console.log(Math.max() > Math.min())`,
    correct: "false",
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 11,
    type: "input",
    question: "Wie heißt die Speicherregion in der JVM, die in Java 8 die 'Permanent Generation' (PermGen) ersetzt hat?",
    correct: "Metaspace",
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 12,
    type: "code",
    question: "Was gibt dieser C-Code nach der Präprozessierung und Kompilierung aus?",
    code: `#define MERGE(a, b) a##b\n#define VAL 10\nint main() {\n  int MERGE(var, VAL) = 5;\n  printf("%d", var10);\n  return 0;\n}`,
    correct: "5",
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 13,
    type: "mc",
    question: "Das Halting Problem beweist, dass es unmöglich ist, einen allgemeinen Algorithmus zu schreiben, der für alle Programme und deren Eingaben bestimmt, ob sie...",
    options: ["korrekt sind.", "in polynomieller Zeit laufen.", "jemals terminieren werden.", "einen Speicherleck haben."],
    correct: 2,
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 14,
    type: "input",
    question: "Welcher Git-Befehl wird verwendet, um ein Protokoll der Änderungen an den Spitzen von Branches und anderen Referenzen im lokalen Repository anzuzeigen (oft als Sicherheitsnetz bezeichnet)?",
    correct: "git reflog",
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 15,
    type: "input",
    question: "Welches POSIX-Signal mit dem numerischen Wert 15 wird standardmäßig an einen Prozess gesendet, um eine saubere Beendigung anzufordern?",
    correct: "SIGTERM",
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 16,
    type: "code",
    question: "Was gibt dieser Python-Code aus, der das 'Diamond Problem' der Mehrfachvererbung zeigt?",
    code: `class A: pass\nclass B(A): pass\nclass C(A): pass\nclass D(B, C): pass\nprint([cls.__name__ for cls in D.__mro__])`,
    correct: "['D', 'B', 'C', 'A', 'object']",
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 17,
    type: "mc",
    question: "Welcher TCP-Staukontroll-Algorithmus ist der Standard im Linux-Kernel?",
    options: ["Reno", "Tahoe", "Vegas", "CUBIC"],
    correct: 3,
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 18,
    type: "mc",
    question: "Welcher der folgenden C-Codes führt zu einem Compiler-Fehler, da arithmetische Operationen auf diesem Zeigertyp nicht zulässig sind?",
    options: ["`int i; void* p = &i;`", "`char c; int *p = &c;`", "`void *p; p++;`", "`int a[5]; int *p = a+1;`"],
    correct: 2,
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 19,
    type: "code",
    question: "Was gibt `ptr->val` in diesem C-Code aus?",
    code: `struct s { int val; struct s *next; };\n\nint main() {\n  struct s a={1}, b={2}, c={3};\n  a.next = &b;\n  b.next = &c;\n  struct s *ptr = &a;\n  ptr = ptr->next->next;\n  printf("%d", ptr->val);\n  return 0;\n}`,
    correct: "3",
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 20,
    type: "code",
    question: "Was wird in der Konsole ausgegeben?",
    code: `const obj = {\n  val: 'obj',\n  log: function() {\n    setTimeout(() => {\n      console.log(this.val);\n    }, 10);\n  }\n};\n\nobj.log();`,
    correct: "obj",
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 21,
    type: "mc",
    question: "Was ist das Ergebnis der bitweisen XOR-Operation `5 ^ 3`?",
    options: ["2", "5", "6", "8"],
    correct: 2,
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 22,
    type: "input",
    question: "Welches COBOL-Verb wird verwendet, um alle elementaren Felder innerhalb eines Gruppenfeldes auf ihre Standardwerte (z.B. Nullen für numerische, Leerzeichen für alphanumerische) zurückzusetzen?",
    correct: "INITIALIZE",
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 23,
    type: "input",
    question: "Welcher informierte Suchalgorithmus erweitert Dijkstra, indem er eine Heuristik verwendet, um die Kosten zum Ziel effizienter abzuschätzen?",
    correct: "A*",
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 24,
    type: "mc",
    question: "Was ist der Hauptunterschied zwischen `List<?>` (unbounded wildcard) und `List<Object>` in Java?",
    options: ["Es gibt keinen Unterschied.", "`List<Object>` kann jedes Objekt halten, aber in `List<?>` kann man keine Elemente (außer null) einfügen.", "`List<?>` kann nur null-Werte halten.", "`List<Object>` ist nicht typsicher."],
    correct: 1,
    timeLimit: 60,
    difficulty: "goated"
  },
  {
    id: 25,
    type: "mc",
    question: "Welches der folgenden Konzepte ist KEINE der vier Coffman-Bedingungen für einen Deadlock?",
    options: ["Mutual Exclusion", "Hold and Wait", "No Preemption", "Starvation"],
    correct: 3,
    timeLimit: 60,
    difficulty: "goated"
  }
];