/* ==========================================================================
   TEST BANK — edit this file to add, remove, or change tests.
   You do NOT need to touch quiz.js or test.html to manage your tests.

   HOW IT WORKS
   ------------
   1. CLASS_OPTIONS and SUBJECT_OPTIONS fill the two dropdowns on the
      Online Test page.
   2. TESTS is keyed by "<class value>_<subject value>" (lowercase,
      underscores). When a student picks a class + subject, the site looks
      up that key. If it isn't in TESTS, the page shows
      "Test not available" automatically — you don't need to code that
      part, just leave the combination out of TESTS.
   3. Each test has a title, a time limit in minutes, and a list of
      questions. Two question types are supported:

      MCQ:
      {
        type: "mcq",
        question: "Question text",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctIndex: 0,   // index (starting at 0) of the correct option
        points: 1
      }

      SHORT ANSWER (auto-graded by matching against acceptable answers —
      not case sensitive, extra spaces ignored):
      {
        type: "short",
        question: "Question text",
        acceptableAnswers: ["answer one", "alternate accepted wording"],
        points: 1
      }

   To add a whole new test: copy an existing block inside TESTS, change
   the key (e.g. "10_chemistry"), and rewrite the questions.
   ========================================================================== */

const CLASS_OPTIONS = [
  { value: "3", label: "Class 3" },
  { value: "4", label: "Class 4" },
  { value: "5", label: "Class 5" },
  { value: "6", label: "Class 6" },
  { value: "7", label: "Class 7" },
  { value: "8", label: "Class 8" },
  { value: "9", label: "Class 9" },
  { value: "10", label: "Class 10" },
];

const SUBJECT_OPTIONS = [
  { value: "mathematics", label: "Mathematics" },
  { value: "English", label: "English" },
  { value: "Science", label: "Science" },
  { value: "Social Studies", label: "Social studies" },
  { value: "Islmiat", label: "Islamiat" },
  { value: "computer_science", label: "Computer Science" },
  { value: "urdu", label: "urdu" },
  { value: "sindhi", label: "sindhi" },
];
/* ACCESS CODES
   - Give each student one code. Each code works for ONE test attempt only.
   - APPS_SCRIPT_URL: leave "" for local mode. Paste your Google Apps Script
     web-app URL here to use server mode (codes then live in the Google Sheet
     and the CODES list below is ignored). */
const ACCESS_CONFIG = {
  APPS_SCRIPT_URL: "",
  CODES: [
     "RAEES.123",
    "AZWAR.123",
    "ALIYAAN.123",
    "SALAR.123",
     "AYAN.123"
    // add one code per student
  ]
};

const TESTS = {
  "3_English": {
    "title": "Class 3 English — Unit 5 - Keep in touch (100 MCQs)",
    "timeMinutes": 60,
    "timeLimitMinutes": 60,
    "questions": [
      {
        "type": "mcq",
        "question": "Where can you buy stamps or post a letter?",
        "options": [
          "stamp album",
          "boarding school",
          "post office",
          "fan club"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "A post office is a place where you buy stamps or post a letter.",
        "topic": "Vocabulary",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Letters sent in an aeroplane are called ______.",
        "options": [
          "air mail",
          "fan mail",
          "boarding mail",
          "outback"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Air mail = letters and mail items sent in an aeroplane.",
        "topic": "Vocabulary",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "The details of where someone lives are called an ______.",
        "options": [
          "album",
          "creator",
          "enquiry",
          "address"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Your address tells where you live.",
        "topic": "Vocabulary",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "In Clarice and Betty’s letter, “avid readers” means ______ readers.",
        "options": [
          "angry",
          "new",
          "keen",
          "lazy"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Avid means keen.",
        "topic": "Vocabulary",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "To “double-check” something means to ______.",
        "options": [
          "ignore it",
          "write it twice",
          "check it twice",
          "break it in two"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Double-check = check twice.",
        "topic": "Vocabulary",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Which word is used at the start of each letter to greet the reader?",
        "options": [
          "Yours",
          "Love",
          "Truly",
          "Dear"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Letters begin with “Dear” plus the name.",
        "topic": "Letters",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "What is the name of the villain in Run for it Ruby?",
        "options": [
          "Moody",
          "Hogrotter",
          "Stacey",
          "Tapiwa"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "The arch villain is Hogrotter.",
        "topic": "Comprehension",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "A boarding school is a school where students ______ during term time.",
        "options": [
          "only play football",
          "never study",
          "write letters only",
          "live"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Boarding school = students live there during term.",
        "topic": "Vocabulary",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Which word comes first in a dictionary?",
        "options": [
          "football",
          "album",
          "bed",
          "tie"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "a comes before b, f and t.",
        "topic": "Alphabetical order",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "would has the same “ou” sound as ______.",
        "options": [
          "house",
          "should",
          "touch",
          "group"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "would, should and could rhyme.",
        "topic": "ou words",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "The plural of fox is ______.",
        "options": [
          "foxies",
          "fox",
          "foxes",
          "foxs"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Words ending in x add es.",
        "topic": "Singular & plural",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "The plural of baby is ______.",
        "options": [
          "babyes",
          "babies",
          "babyies",
          "babys"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Consonant + y: change y to i and add es.",
        "topic": "Singular & plural",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "The plural of glass is ______.",
        "options": [
          "glasses",
          "glases",
          "glassies",
          "glasss"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Words ending in ss add es.",
        "topic": "Singular & plural",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "The plural of class is ______.",
        "options": [
          "clases",
          "classies",
          "classs",
          "classes"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Words ending in ss add es.",
        "topic": "Singular & plural",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "The plural of brush is ______.",
        "options": [
          "brushes",
          "brushies",
          "brushess",
          "brushs"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Words ending in sh add es.",
        "topic": "Singular & plural",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "The plural of lunch is ______.",
        "options": [
          "lunchs",
          "lunchess",
          "lunches",
          "lunchies"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Words ending in ch add es.",
        "topic": "Singular & plural",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "The plural of box is ______.",
        "options": [
          "boxess",
          "boxies",
          "boxs",
          "boxes"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Words ending in x add es.",
        "topic": "Singular & plural",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "The plural of church is ______.",
        "options": [
          "churchs",
          "churches",
          "churchess",
          "churchies"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Words ending in ch add es.",
        "topic": "Singular & plural",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Which word means “male teachers”?",
        "options": [
          "springs",
          "creators",
          "masters",
          "thieves"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Masters = male teachers.",
        "topic": "Vocabulary",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "A book where you keep the stamps you collect is a ______.",
        "options": [
          "address",
          "air mail",
          "stamp album",
          "fan club"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Stamp album = book for collected stamps.",
        "topic": "Vocabulary",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "A person who makes something new is the ______.",
        "options": [
          "master",
          "creator",
          "address",
          "villain"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Creator = person who makes something new.",
        "topic": "Vocabulary",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "The ______ of the story wrote back to the girls.",
        "options": [
          "stamp",
          "creator",
          "address",
          "springs"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "The author is the creator of the books.",
        "topic": "Vocabulary",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Roald Dahl wrote to his mother from his ______ school.",
        "options": [
          "air",
          "post",
          "fan",
          "boarding"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "He lived at boarding school during term time.",
        "topic": "Vocabulary",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "An “arch villain” is ______.",
        "options": [
          "the chief bad person in a story",
          "a friendly teacher",
          "a letter writer",
          "a type of book"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Arch villain = bad person or chief criminal.",
        "topic": "Vocabulary",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "An “enquiry” is ______.",
        "options": [
          "a question asking for information",
          "a school bed",
          "a type of stamp",
          "a goodbye word"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Clarice and Betty sent an enquiry about the next book.",
        "topic": "Vocabulary",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The next Ruby book “will be published this autumn.” Published means ______.",
        "options": [
          "lost in the post",
          "read aloud",
          "printed and sold",
          "written in pencil"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Published = printed and sold.",
        "topic": "Vocabulary",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What mistake did Clarice and Betty find in the book?",
        "options": [
          "Ruby’s name was spelt wrongly",
          "The book had no pages",
          "Ruby wore her glasses, then later could not see because she had no glasses",
          "The villain had no name"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "On page 33 Ruby wears glasses, but later she can’t see well without them.",
        "topic": "Comprehension",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Roald Dahl asked his mother to send his stamp album and some ______.",
        "options": [
          "jerseys",
          "springs",
          "masters",
          "swaps"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "He asked for his stamp album and quite a lot of swaps.",
        "topic": "Comprehension",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which word comes first in a dictionary?",
        "options": [
          "tomorrow",
          "tonight",
          "today",
          "tomatoes"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "All start with t-o. The third letters are d (today), n (tonight), m (tomorrow, tomatoes). d comes first, so today is first.",
        "topic": "Alphabetical order",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The letters “ou” in enough sound like the vowel in ______.",
        "options": [
          "food",
          "book",
          "hut",
          "how"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "enough sounds like “enuff” – the u in hut.",
        "topic": "ou words",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which plural is spelt correctly?",
        "options": [
          "tomatoeses",
          "tomatoies",
          "tomatoz",
          "tomatoes"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Words ending in o (like tomato, mango) add es in this book.",
        "topic": "Singular & plural",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The plural of child is ______.",
        "options": [
          "childs",
          "children",
          "childrens",
          "childes"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Child is irregular.",
        "topic": "Singular & plural",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The short form (contraction) of cannot is ______.",
        "options": [
          "cann’t",
          "can’t",
          "ca’nt",
          "cant’"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "n and o are missing: can’t.",
        "topic": "Apostrophes",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "You write a formal letter to Mr Lopez. How do you end it?",
        "options": [
          "See you",
          "Yours sincerely",
          "Yours faithfully",
          "Love from"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "You know the name, so use Yours sincerely.",
        "topic": "Formal letter",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "In Maria’s formal letter, the introduction ______.",
        "options": [
          "asks for a reply",
          "lists the bullet points",
          "explains why you are writing",
          "gives the date"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "The introduction states the purpose; the conclusion asks for a reply.",
        "topic": "Formal letter",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The plural of city is ______.",
        "options": [
          "cities",
          "cityes",
          "citys",
          "citees"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Consonant + y: change y to i and add es.",
        "topic": "Singular & plural",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The plural of pony is ______.",
        "options": [
          "ponees",
          "ponyes",
          "ponys",
          "ponies"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Consonant + y: change y to i and add es.",
        "topic": "Singular & plural",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The plural of lady is ______.",
        "options": [
          "ladyes",
          "ladys",
          "ladies",
          "ladees"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Consonant + y: change y to i and add es.",
        "topic": "Singular & plural",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The plural of mango is ______ (as in this book).",
        "options": [
          "mangoes",
          "mangoees",
          "mangoss",
          "mangoies"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Words ending in o add es in this book.",
        "topic": "Singular & plural",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The plural of potato is ______.",
        "options": [
          "potatoss",
          "potatoies",
          "potatoees",
          "potatoes"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Words ending in o add es in this book.",
        "topic": "Singular & plural",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The plural of piano is ______.",
        "options": [
          "pianos",
          "pianoss",
          "pianoes",
          "pianoies"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Piano is an exception: it only adds s.",
        "topic": "Singular & plural",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which word is the same in the singular and the plural?",
        "options": [
          "glass",
          "fox",
          "deer",
          "baby"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Deer (and sheep) do not change.",
        "topic": "Singular & plural",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which plural is spelt wrongly?",
        "options": [
          "babys",
          "foxes",
          "babies",
          "watches"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Baby ends in consonant + y, so the plural is babies.",
        "topic": "Singular & plural",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which noun is plural?",
        "options": [
          "address",
          "country",
          "countries",
          "pony"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Countries means more than one country.",
        "topic": "Singular & plural",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which noun is singular?",
        "options": [
          "books",
          "foxes",
          "address",
          "letters"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Address means just one.",
        "topic": "Singular & plural",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The short form (contraction) of “I will” is ______.",
        "options": [
          "I’wil",
          "I’ll",
          "Ill",
          "I’l’l"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "I will → I’ll; the apostrophe replaces the missing letters.",
        "topic": "Apostrophes",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The short form (contraction) of “do not” is ______.",
        "options": [
          "don’t",
          "d’ont",
          "dont",
          "do’nt"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "do not → don’t; the apostrophe replaces the missing letters.",
        "topic": "Apostrophes",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The short form (contraction) of “I am” is ______.",
        "options": [
          "Im",
          "I’am",
          "I’m",
          "Ia’m"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "I am → I’m; the apostrophe replaces the missing letters.",
        "topic": "Apostrophes",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The short form (contraction) of “was not” is ______.",
        "options": [
          "wa’snt",
          "was’nt",
          "wasnt",
          "wasn’t"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "was not → wasn’t; the apostrophe replaces the missing letters.",
        "topic": "Apostrophes",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The short form (contraction) of “did not” is ______.",
        "options": [
          "didn’t",
          "di’dnt",
          "did’nt",
          "didnt"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "did not → didn’t; the apostrophe replaces the missing letters.",
        "topic": "Apostrophes",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The short form (contraction) of “that is” is ______.",
        "options": [
          "thats",
          "that’s",
          "that’is",
          "tha’ts"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "that is → that’s; the apostrophe replaces the missing letters.",
        "topic": "Apostrophes",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The short form (contraction) of “they are” is ______.",
        "options": [
          "theyre",
          "they’re",
          "they’are",
          "the’yre"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "they are → they’re; the apostrophe replaces the missing letters.",
        "topic": "Apostrophes",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The short form (contraction) of “we will” is ______.",
        "options": [
          "w’ell",
          "we’wll",
          "well",
          "we’ll"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "we will → we’ll; the apostrophe replaces the missing letters.",
        "topic": "Apostrophes",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The short form (contraction) of “is not” is ______.",
        "options": [
          "is’nt",
          "i’snt",
          "isn’t",
          "isnt"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "is not → isn’t; the apostrophe replaces the missing letters.",
        "topic": "Apostrophes",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The short form (contraction) of “he is” is ______.",
        "options": [
          "hes",
          "he’s",
          "h’es",
          "he’is"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "he is → he’s; the apostrophe replaces the missing letters.",
        "topic": "Apostrophes",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The short form (contraction) of “would not” is ______.",
        "options": [
          "would’nt",
          "woul’dnt",
          "wouldn’t",
          "wouldnt"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "would not → wouldn’t; the apostrophe replaces the missing letters.",
        "topic": "Apostrophes",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The short form (contraction) of “you are” is ______.",
        "options": [
          "yo’ure",
          "youre",
          "you’are",
          "you’re"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "you are → you’re; the apostrophe replaces the missing letters.",
        "topic": "Apostrophes",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The short form (contraction) of “does not” is ______.",
        "options": [
          "does’nt",
          "doesn’t",
          "doesnt",
          "doe’snt"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "does not → doesn’t; the apostrophe replaces the missing letters.",
        "topic": "Apostrophes",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "“don’t” is the short form of ______.",
        "options": [
          "did not",
          "have not",
          "do not",
          "does not"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "The apostrophe replaces the o in not.",
        "topic": "Apostrophes",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "“I’m” is the short form of ______.",
        "options": [
          "I am",
          "I will",
          "I have",
          "I had"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "The a in am is missing.",
        "topic": "Apostrophes",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "“isn’t” is the short form of ______.",
        "options": [
          "did not",
          "was not",
          "has not",
          "is not"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "The o in not is missing.",
        "topic": "Apostrophes",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What do we call a short word made by joining two words with an apostrophe?",
        "options": [
          "a clause",
          "a plural",
          "a prefix",
          "a contraction"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "A contraction is a shorter word.",
        "topic": "Apostrophes",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What does the apostrophe show in “can’t”?",
        "options": [
          "the letters n and o are missing",
          "a question is asked",
          "the word is a name",
          "the word is plural"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "can’t = cannot, with the letters n and o left out.",
        "topic": "Apostrophes",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which word comes first: series, swaps, school, stamp?",
        "options": [
          "series",
          "school",
          "stamp",
          "swaps"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "All start with s; sc comes before se, st and sw.",
        "topic": "Alphabetical order",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which word comes second: avid, answer, autumn, announced?",
        "options": [
          "announced",
          "answer",
          "avid",
          "autumn"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Order: announced, answer, autumn, avid.",
        "topic": "Alphabetical order",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "A dictionary lists words in ______ order.",
        "options": [
          "alphabetical",
          "random",
          "colour",
          "size"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Words go from a to z.",
        "topic": "Alphabetical order",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The letters “ou” in touch sound like the vowel sound in ______.",
        "options": [
          "food",
          "hut",
          "how",
          "book"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "touch has the same “ou” sound as hut.",
        "topic": "ou words",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The letters “ou” in shout sound like the vowel sound in ______.",
        "options": [
          "hut",
          "how",
          "book",
          "food"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "shout has the same “ou” sound as how.",
        "topic": "ou words",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The letters “ou” in group sound like the vowel sound in ______.",
        "options": [
          "book",
          "how",
          "hut",
          "food"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "group has the same “ou” sound as food.",
        "topic": "ou words",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The letters “ou” in could sound like the vowel sound in ______.",
        "options": [
          "food",
          "hut",
          "book",
          "how"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "could has the same “ou” sound as book.",
        "topic": "ou words",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The letters “ou” in country sound like the vowel sound in ______.",
        "options": [
          "how",
          "hut",
          "book",
          "food"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "country has the same “ou” sound as hut.",
        "topic": "ou words",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The letters “ou” in cloud sound like the vowel sound in ______.",
        "options": [
          "how",
          "hut",
          "book",
          "food"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "cloud has the same “ou” sound as how.",
        "topic": "ou words",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The letters “ou” in through sound like the vowel sound in ______.",
        "options": [
          "hut",
          "book",
          "how",
          "food"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "through has the same “ou” sound as food.",
        "topic": "ou words",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The letters “ou” in trouble sound like the vowel sound in ______.",
        "options": [
          "hut",
          "food",
          "book",
          "how"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "trouble has the same “ou” sound as hut.",
        "topic": "ou words",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The letters “ou” in house sound like the vowel sound in ______.",
        "options": [
          "hut",
          "food",
          "book",
          "how"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "house has the same “ou” sound as how.",
        "topic": "ou words",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The letters “ou” in out sound like the vowel sound in ______.",
        "options": [
          "hut",
          "how",
          "book",
          "food"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "out has the same “ou” sound as how.",
        "topic": "ou words",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Who wrote the first letter to Patricia Maplin Stacey?",
        "options": [
          "Clarice and Betty",
          "Maria",
          "Roald Dahl",
          "Hogrotter"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Clarice and Betty wrote to the author.",
        "topic": "Comprehension",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which series of books did Clarice and Betty love?",
        "options": [
          "Hill View",
          "Ruby Redfort",
          "Boy",
          "Utterly Me"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "They were avid readers of the Ruby Redfort series.",
        "topic": "Comprehension",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What did the girls first want to know?",
        "options": [
          "where the author lives",
          "how much the book costs",
          "when the next Ruby Redfort book is coming out",
          "how many pages the book has"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "They asked when the next book would be out and what it would be called.",
        "topic": "Comprehension",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "On what date did Roald Dahl write his letter?",
        "options": [
          "23rd Sept",
          "14th June",
          "1st November",
          "3rd May"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "The letter begins “23rd Sept”.",
        "topic": "Comprehension",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What do the boys at Roald’s school play every day?",
        "options": [
          "cricket",
          "football",
          "hockey",
          "tennis"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "We play football every day.",
        "topic": "Comprehension",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which of these did Roald say he had got?",
        "options": [
          "a belt, tie and school jersey",
          "a bicycle",
          "a radio",
          "a stamp album"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "He asked for the stamp album, so he did not have it yet.",
        "topic": "Comprehension",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Where are the details of the fan club listed?",
        "options": [
          "at the school",
          "at the post office",
          "in a stamp album",
          "on the Ruby Redfort website"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "The reply says details are on the website.",
        "topic": "Comprehension",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Who wrote the book Utterly Me, Clarice Bean, which the letters come from?",
        "options": [
          "Alexander McCall Smith",
          "Kit Wright",
          "Lauren Child",
          "John Malam"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "The extract is from the book by Lauren Child.",
        "topic": "Comprehension",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Roald Dahl’s letter to his mother is ______.",
        "options": [
          "formal",
          "a report",
          "informal",
          "an email"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "He writes to family: “Dear Mama … Love from Boy”.",
        "topic": "Comprehension",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "When do you end a letter with “Yours faithfully”?",
        "options": [
          "when you do not know the person’s name",
          "when you write to a friend",
          "when you know the name",
          "when you write an email"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Dear Sir/Madam … Yours faithfully.",
        "topic": "Formal letter",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What is the correct greeting for a letter to head teacher Mr Lopez?",
        "options": [
          "Dear Mr Lopez,",
          "Dear Sir/Madam,",
          "Hi Lopez",
          "To Lopez"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Use the greeting with the name.",
        "topic": "Formal letter",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Maria wrote to Mr Lopez to ask for ______.",
        "options": [
          "a party on the last day of term",
          "a school picnic",
          "more homework",
          "a new bus"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Class 3 wanted a party.",
        "topic": "Formal letter",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "A bullet point is ______.",
        "options": [
          "a speech mark",
          "a full stop",
          "a black dot before each important idea in a list",
          "a kind of stamp"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Bullet points mark each item in a list.",
        "topic": "Formal letter",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Formal means ______.",
        "options": [
          "official or businesslike",
          "funny",
          "secret",
          "friendly"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Formal = official or businesslike.",
        "topic": "Formal letter",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The conclusion of a formal letter ______.",
        "options": [
          "asks for a reply or action",
          "gives the date",
          "gives your address",
          "greets the reader"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Maria ends by asking Mr Lopez to reply.",
        "topic": "Formal letter",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What should you do after the greeting in a formal letter?",
        "options": [
          "write your name",
          "draw a picture",
          "write the date again",
          "leave a line before the first paragraph"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Leave a line before paragraph 1.",
        "topic": "Formal letter",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which is NOT on the formal letter checklist?",
        "options": [
          "end with “Yours sincerely”",
          "check your spelling",
          "use capital letters and full stops",
          "draw cartoons in the margin"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Cartoons are not part of a formal letter.",
        "topic": "Formal letter",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which sentence suits the introduction of a formal letter?",
        "options": [
          "I am writing to ask if our class can visit the library.",
          "Love from Sara",
          "See you soon!",
          "Yours sincerely,"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "The introduction explains why you are writing.",
        "topic": "Formal letter",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which ending is for a letter to a friend?",
        "options": [
          "Yours faithfully",
          "Yours truly, Sir",
          "Yours sincerely",
          "Love from"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Informal letters end with friendly words.",
        "topic": "Formal letter",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which one is sent on a computer or phone?",
        "options": [
          "a stamp",
          "an email",
          "a letter",
          "air mail"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "An email is sent on a computer or phone.",
        "topic": "Formal letter",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "A note is ______.",
        "options": [
          "a long report",
          "a book of stamps",
          "a school",
          "a short message, often on a scrap of paper"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Notes are short messages.",
        "topic": "Formal letter",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What spelling mistake did the author make in her reply?",
        "options": [
          "She wrote “truly” as “truely”",
          "She wrote “Betty” as “Bety”",
          "She wrote “autumn” as “autum”",
          "She wrote “Clarace” instead of “Clarice”"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "The reply begins “Dear Betty and Clarace”.",
        "topic": "Comprehension",
        "difficulty": "Hard"
      },
      {
        "type": "mcq",
        "question": "Which word comes first: answer, autumn, announced, avid?",
        "options": [
          "avid",
          "answer",
          "autumn",
          "announced"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "All start with a. Second letters: n, u, n, v. announced and answer both have n – third letters n and s, so announced is first.",
        "topic": "Alphabetical order",
        "difficulty": "Hard"
      },
      {
        "type": "mcq",
        "question": "Which sentence has the apostrophe in the correct place?",
        "options": [
          "Ruby was’nt wearing her glasses.",
          "Ruby wasn’t wearing her glasses.",
          "Ruby wasnt’ wearing her glasses.",
          "Ruby wa’snt wearing her glasses."
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Was not → wasn’t; the apostrophe replaces the missing o.",
        "topic": "Apostrophes",
        "difficulty": "Hard"
      }
    ],
    "chapter": "Unit 5: Keep in touch"
  },
  "5_English": {
    "title": "Class 5 English - Unit 5: Introduce Yourself (100 MCQs)",
    "timeMinutes": 60,
    "timeLimitMinutes": 60,
    "questions": [
      {
        "type": "mcq",
        "question": "What is the plural of 'berry'?",
        "options": [
          "berry's",
          "berries",
          "berryes",
          "berrys"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Consonant + y changes y to ie before s.",
        "topic": "Plurals",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "What is the plural of 'key'?",
        "options": [
          "keies",
          "keyes",
          "key's",
          "keys"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "A vowel comes before y, so just add s.",
        "topic": "Plurals",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "What is the plural of 'lunch'?",
        "options": [
          "lunchs'",
          "lunchs",
          "lunchies",
          "lunches"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Words ending in ch add es.",
        "topic": "Plurals",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Which is the correct plural of 'calf'?",
        "options": [
          "calfs",
          "calves",
          "calvs",
          "calfes"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "f changes to ves in calf/calves.",
        "topic": "Plurals",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which plural is spelt correctly?",
        "options": [
          "potatose",
          "potatoes",
          "potatoies",
          "potatos"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Tricky o-words like potato add es.",
        "topic": "Plurals",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "'We spent lunch break playing football.' This is written in the ___ person.",
        "options": [
          "none",
          "third",
          "second",
          "first"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "We is a first-person pronoun.",
        "topic": "Pronouns",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "'You take 2 kilograms of flour and add water.' This is the ___ person.",
        "options": [
          "fourth",
          "second",
          "third",
          "first"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "You shows second person.",
        "topic": "Pronouns",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Which pronoun is third person?",
        "options": [
          "I",
          "we",
          "them",
          "you"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "He, she, it, they, him, her, them are third person.",
        "topic": "Pronouns",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Rewrite 'They are going to the cinema' in the first person. Which is correct?",
        "options": [
          "You are going to the cinema.",
          "It is going to the cinema.",
          "We are going to the cinema.",
          "He is going to the cinema."
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Changing the viewpoint to first person plural gives We.",
        "topic": "Pronouns",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which one is a FACT about Hunter?",
        "options": [
          "He was born in Texas, USA.",
          "Germany is the best country.",
          "Beijing is the nicest city.",
          "School is boring."
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "A fact can be proved. The others are opinions.",
        "topic": "Fact vs Opinion",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Which one is an OPINION?",
        "options": [
          "Mary was the kindest nurse ever.",
          "Mary Seacole was born in 1805.",
          "Mary opened the British Hotel.",
          "Mary died in London in 1881."
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "'Kindest' shows what someone thinks.",
        "topic": "Fact vs Opinion",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "A biography tells events in which order?",
        "options": [
          "Backwards only",
          "Chronological order",
          "Alphabetical order",
          "Any order"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Biographies follow time order.",
        "topic": "Biography",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Where did Mary Seacole go in 1851?",
        "options": [
          "Crimea",
          "Panama",
          "London",
          "Germany"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "She went to stay with her brother in Panama.",
        "topic": "Biography",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Which sentence is written in correct direct speech?",
        "options": [
          "I \"am hungry,\" said Ali.",
          "\"I am hungry said Ali.\"",
          "\"I am hungry,\" said Ali.",
          "I am hungry, said Ali."
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Spoken words and the comma go inside speech marks.",
        "topic": "Direct Speech",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Reported speech of: \"I am hungry,\" said Ali.",
        "options": [
          "Ali says I was hungry.",
          "Ali said that I am hungry.",
          "Ali said, he is hungry.",
          "Ali said that he was hungry."
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Pronoun I becomes he; am becomes was.",
        "topic": "Reported Speech",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "In reported speech, 'can' usually changes to:",
        "options": [
          "will",
          "cans",
          "could",
          "must"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "The tense moves one step back.",
        "topic": "Reported Speech",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which sentence has the commas in the right place?",
        "options": [
          "Laura, Dekker the youngest sailor arrived in St Maarten.",
          "Laura Dekker the youngest sailor arrived, in St Maarten.",
          "Laura Dekker, the youngest sailor, arrived in St Maarten.",
          "Laura Dekker the youngest, sailor arrived in St Maarten."
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "A pair of commas surrounds the extra information.",
        "topic": "Commas",
        "difficulty": "Hard"
      },
      {
        "type": "mcq",
        "question": "In 'My cousin, who is ten, plays cricket', what is the extra information?",
        "options": [
          "My cousin",
          "who is ten",
          "plays cricket",
          "cricket"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "The words between the commas can be removed.",
        "topic": "Commas",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "'Circumnavigate' means:",
        "options": [
          "to sail around something completely",
          "to jump into water",
          "to stay at home",
          "to sail slowly"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Laura Dekker circumnavigated the globe.",
        "topic": "Vocabulary",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which is NOT a feature of a diary?",
        "options": [
          "Formal language for a general audience",
          "First person",
          "Past tense",
          "Date"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Diaries use informal, personal language.",
        "topic": "Diary",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What is the plural of 'baby'?",
        "options": [
          "baby's",
          "babys",
          "babyes",
          "babies"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Rule: consonant + y changes to ies.",
        "topic": "Plurals",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What is the plural of 'story'?",
        "options": [
          "stories",
          "story's",
          "storys",
          "storyes"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Rule: consonant + y changes to ies.",
        "topic": "Plurals",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What is the plural of 'puppy'?",
        "options": [
          "puppyes",
          "puppies",
          "puppy's",
          "puppys"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Rule: consonant + y changes to ies.",
        "topic": "Plurals",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What is the plural of 'boy'?",
        "options": [
          "boies",
          "boys",
          "boy's",
          "boyes"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Rule: vowel + y just adds s.",
        "topic": "Plurals",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "What is the plural of 'monkey'?",
        "options": [
          "monkey's",
          "monkeys",
          "monkies",
          "monkeyes"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Rule: vowel + y just adds s.",
        "topic": "Plurals",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What is the plural of 'box'?",
        "options": [
          "boxies",
          "boxs",
          "boxes",
          "box's"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Rule: words ending in s, x, ch, sh, ss add es.",
        "topic": "Plurals",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "What is the plural of 'dish'?",
        "options": [
          "dishes",
          "dishs",
          "dishies",
          "dish's"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Rule: words ending in s, x, ch, sh, ss add es.",
        "topic": "Plurals",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "What is the plural of 'church'?",
        "options": [
          "churchies",
          "churches",
          "church's",
          "churchs"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Rule: words ending in s, x, ch, sh, ss add es.",
        "topic": "Plurals",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What is the plural of 'glass'?",
        "options": [
          "glassies",
          "glasses",
          "glasss",
          "glass's"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Rule: words ending in s, x, ch, sh, ss add es.",
        "topic": "Plurals",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What is the plural of 'knife'?",
        "options": [
          "knifees",
          "knives",
          "knifes",
          "knive"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Rule: f/fe changes to ves.",
        "topic": "Plurals",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What is the plural of 'thief'?",
        "options": [
          "thieves",
          "thieve",
          "thiefes",
          "thiefs"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Rule: f/fe changes to ves.",
        "topic": "Plurals",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What is the plural of 'shelf'?",
        "options": [
          "shelve",
          "shelfes",
          "shelves",
          "shelfs"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Rule: f/fe changes to ves.",
        "topic": "Plurals",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What is the plural of 'loaf'?",
        "options": [
          "loave",
          "loafes",
          "loaves",
          "loafs"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Rule: f/fe changes to ves.",
        "topic": "Plurals",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What is the plural of 'tomato'?",
        "options": [
          "tomatoies",
          "tomato's",
          "tomatos",
          "tomatoes"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Rule: tricky o-words add es.",
        "topic": "Plurals",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which rule explains key/keys?",
        "options": [
          "Add es",
          "Change y to ves",
          "A vowel comes before y, so just add s",
          "Change y to ie"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Vowel + y just adds s.",
        "topic": "Plurals",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "'I am going home to change my clothes.' This sentence is written in the ___ person.",
        "options": [
          "third",
          "fourth",
          "second",
          "first"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Pronouns: first = I/we/me/us; second = you; third = he/she/it/they/him/her/them.",
        "topic": "Pronouns & Point of View",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "'They are going the wrong way.' This sentence is written in the ___ person.",
        "options": [
          "third",
          "fourth",
          "second",
          "first"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Pronouns: first = I/we/me/us; second = you; third = he/she/it/they/him/her/them.",
        "topic": "Pronouns & Point of View",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "'You should wear a helmet when you ride.' This sentence is written in the ___ person.",
        "options": [
          "first",
          "third",
          "second",
          "fourth"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Pronouns: first = I/we/me/us; second = you; third = he/she/it/they/him/her/them.",
        "topic": "Pronouns & Point of View",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "'The teacher told us a story.' This sentence is written in the ___ person.",
        "options": [
          "second",
          "third",
          "fourth",
          "first"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Pronouns: first = I/we/me/us; second = you; third = he/she/it/they/him/her/them.",
        "topic": "Pronouns & Point of View",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "'Give me the book, please.' This sentence is written in the ___ person.",
        "options": [
          "third",
          "second",
          "fourth",
          "first"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Pronouns: first = I/we/me/us; second = you; third = he/she/it/they/him/her/them.",
        "topic": "Pronouns & Point of View",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "'She likes to read before bed.' This sentence is written in the ___ person.",
        "options": [
          "fourth",
          "second",
          "third",
          "first"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Pronouns: first = I/we/me/us; second = you; third = he/she/it/they/him/her/them.",
        "topic": "Pronouns & Point of View",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "'We like to fly the kite on windy days.' This sentence is written in the ___ person.",
        "options": [
          "first",
          "third",
          "second",
          "fourth"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Pronouns: first = I/we/me/us; second = you; third = he/she/it/they/him/her/them.",
        "topic": "Pronouns & Point of View",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "'It was raining all day.' This sentence is written in the ___ person.",
        "options": [
          "fourth",
          "third",
          "second",
          "first"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Pronouns: first = I/we/me/us; second = you; third = he/she/it/they/him/her/them.",
        "topic": "Pronouns & Point of View",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Which of these is a second-person pronoun?",
        "options": [
          "I",
          "they",
          "she",
          "you"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "You is the only second-person pronoun.",
        "topic": "Pronouns & Point of View",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Why do writers use many pronouns in an interview like 'Home country, what's that?'",
        "options": [
          "To make it personal and avoid repeating names",
          "To make it a poem",
          "To make the text longer",
          "To confuse the reader"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Pronouns make a text personal and smooth.",
        "topic": "Pronouns & Point of View",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Is this a fact or an opinion? 'Germany is the best country in the world.'",
        "options": [
          "Fact",
          "Opinion",
          "A command",
          "A question"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "A fact can be proved; an opinion is a feeling or belief.",
        "topic": "Fact vs Opinion",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Is this a fact or an opinion? 'Mary Seacole was born in 1805.'",
        "options": [
          "A command",
          "Fact",
          "Opinion",
          "A question"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "A fact can be proved; an opinion is a feeling or belief.",
        "topic": "Fact vs Opinion",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Is this a fact or an opinion? 'Mary Seacole was the bravest nurse ever.'",
        "options": [
          "Opinion",
          "A question",
          "A command",
          "Fact"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "A fact can be proved; an opinion is a feeling or belief.",
        "topic": "Fact vs Opinion",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Is this a fact or an opinion? 'Laura Dekker first sailed solo when she was six.'",
        "options": [
          "A question",
          "Fact",
          "Opinion",
          "A command"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "A fact can be proved; an opinion is a feeling or belief.",
        "topic": "Fact vs Opinion",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Is this a fact or an opinion? 'In Germany parents give a Schultuete on a child's first day of school.'",
        "options": [
          "Fact",
          "A question",
          "Opinion",
          "A command"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "A fact can be proved; an opinion is a feeling or belief.",
        "topic": "Fact vs Opinion",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Is this a fact or an opinion? 'Kites are more fun than football.'",
        "options": [
          "A command",
          "Opinion",
          "Fact",
          "A question"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "A fact can be proved; an opinion is a feeling or belief.",
        "topic": "Fact vs Opinion",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Where was Mary Seacole born?",
        "options": [
          "Panama",
          "Kingston, Jamaica",
          "London, England",
          "Crimea"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Stated in the biography of Mary Seacole.",
        "topic": "Biography - Mary Seacole",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "In which year did Mary's husband die?",
        "options": [
          "1851",
          "1856",
          "1836",
          "1844"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Stated in the biography of Mary Seacole.",
        "topic": "Biography - Mary Seacole",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "In which year did Mary marry?",
        "options": [
          "1844",
          "1805",
          "1836",
          "1881"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Stated in the biography of Mary Seacole.",
        "topic": "Biography - Mary Seacole",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which disease broke out in Panama while Mary was there?",
        "options": [
          "measles",
          "chicken pox",
          "cholera",
          "flu"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Stated in the biography of Mary Seacole.",
        "topic": "Biography - Mary Seacole",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which war began in 1853, before Mary travelled to the Crimea?",
        "options": [
          "The Crimean War",
          "The Jamaican War",
          "The Panama War",
          "The Cholera War"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Stated in the biography of Mary Seacole.",
        "topic": "Biography - Mary Seacole",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Why was Mary bankrupt when she returned to London?",
        "options": [
          "She lost her book",
          "She bought a ship",
          "She did not work",
          "Soldiers had run up debts at the British Hotel"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Stated in the biography of Mary Seacole.",
        "topic": "Biography - Mary Seacole",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Who started a charity to raise money for Mary?",
        "options": [
          "The newspapers",
          "Her brother",
          "The Panama doctors",
          "The cholera patients"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Stated in the biography of Mary Seacole.",
        "topic": "Biography - Mary Seacole",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Mary's autobiography became a:",
        "options": [
          "school textbook",
          "failure",
          "poem",
          "bestseller"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Stated in the biography of Mary Seacole.",
        "topic": "Biography - Mary Seacole",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "In which year did Mary Seacole die?",
        "options": [
          "1857",
          "1805",
          "1851",
          "1881"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Stated in the biography of Mary Seacole.",
        "topic": "Biography - Mary Seacole",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Is this direct or reported speech? Mary Seacole said she wanted to nurse injured soldiers.",
        "options": [
          "A question",
          "A title",
          "Direct speech",
          "Reported speech"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Direct speech has speech marks; reported speech does not.",
        "topic": "Direct & Reported Speech",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Is this direct or reported speech? Hunter declared, \"I'm from Germany!\"",
        "options": [
          "Reported speech",
          "A question",
          "A title",
          "Direct speech"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Direct speech has speech marks; reported speech does not.",
        "topic": "Direct & Reported Speech",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Is this direct or reported speech? \"I enjoyed reading the biography!\" he exclaimed.",
        "options": [
          "Direct speech",
          "Reported speech",
          "A title",
          "A question"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Direct speech has speech marks; reported speech does not.",
        "topic": "Direct & Reported Speech",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Is this direct or reported speech? She said that she was tired.",
        "options": [
          "Direct speech",
          "Reported speech",
          "A title",
          "A question"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Direct speech has speech marks; reported speech does not.",
        "topic": "Direct & Reported Speech",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Is this direct or reported speech? \"Come here,\" called the teacher.",
        "options": [
          "A question",
          "A title",
          "Reported speech",
          "Direct speech"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Direct speech has speech marks; reported speech does not.",
        "topic": "Direct & Reported Speech",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Is this direct or reported speech? The boy said that he liked cricket.",
        "options": [
          "A question",
          "Reported speech",
          "Direct speech",
          "A title"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Direct speech has speech marks; reported speech does not.",
        "topic": "Direct & Reported Speech",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Is this direct or reported speech? Sara shouted, \"Watch out!\"",
        "options": [
          "A title",
          "A question",
          "Direct speech",
          "Reported speech"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Direct speech has speech marks; reported speech does not.",
        "topic": "Direct & Reported Speech",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Choose the correct reported speech for: \"I am tired,\" said Sara.",
        "options": [
          "Sara said that I am tired.",
          "Sara said that she was tired.",
          "Sara said that she is tired.",
          "Sara said she were tired."
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Change the pronoun and move the tense one step back.",
        "topic": "Direct & Reported Speech",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Choose the correct reported speech for: \"We are playing football,\" said the boys.",
        "options": [
          "The boys said that we were playing football.",
          "The boys said that they are playing football.",
          "The boys said they was playing football.",
          "The boys said that they were playing football."
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Change the pronoun and move the tense one step back.",
        "topic": "Direct & Reported Speech",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Choose the correct reported speech for: \"I can swim,\" said Ali.",
        "options": [
          "Ali said that he can swim.",
          "Ali said that he could swim.",
          "Ali said that I could swim.",
          "Ali said he cans swim."
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Change the pronoun and move the tense one step back.",
        "topic": "Direct & Reported Speech",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Choose the correct reported speech for: \"I have finished my work,\" said Noor.",
        "options": [
          "Noor said that she had finished her work.",
          "Noor said that she has finished her work.",
          "Noor said she have finished her work.",
          "Noor said that I had finished my work."
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Change the pronoun and move the tense one step back.",
        "topic": "Direct & Reported Speech",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Choose the correct reported speech for: \"I live in Quetta,\" said Amna.",
        "options": [
          "Amna said that she lived in Quetta.",
          "Amna said that she is living in Quetta.",
          "Amna said that she live in Quetta.",
          "Amna said that I lived in Quetta."
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Change the pronoun and move the tense one step back.",
        "topic": "Direct & Reported Speech",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Choose the correct reported speech for: \"I like swimming!\" she declared.",
        "options": [
          "She declared that she liked swimming.",
          "She declared she like swimming.",
          "She declared that I liked swimming.",
          "She declared that she likes swimming."
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Change the pronoun and move the tense one step back.",
        "topic": "Direct & Reported Speech",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which sentence is punctuated correctly?",
        "options": [
          "\"I would like to go to the beach\", he said.",
          "I would like to go to the beach, he said.",
          "\"I would like to go to the beach,\" he said.",
          "\"I would like to go to the beach\" he said."
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "A comma goes inside the speech marks before the reporting clause.",
        "topic": "Direct Speech Punctuation",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Where do question marks and exclamation marks go in direct speech?",
        "options": [
          "After the reporting clause only",
          "They are not used",
          "Outside the speech marks",
          "Inside the speech marks"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "They are part of the spoken words.",
        "topic": "Direct Speech Punctuation",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "In which position is the reporting clause? He exclaimed, \"I hope you score many goals!\"",
        "options": [
          "At the end",
          "In the middle",
          "There is none",
          "At the start"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "'He exclaimed' comes before the speech.",
        "topic": "Direct Speech Punctuation",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Which sentence uses a pair of commas correctly?",
        "options": [
          "Fatima Khan, an Olympic team member, set a personal best.",
          "Fatima Khan an, Olympic team member set a personal best.",
          "Fatima Khan an Olympic team member, set a personal best.",
          "Fatima, Khan an Olympic team member set a personal best."
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Commas go around the extra information.",
        "topic": "Commas",
        "difficulty": "Hard"
      },
      {
        "type": "mcq",
        "question": "What is the extra information in: 'The doctor, who is 34 years old, will see you in five minutes.'",
        "options": [
          "will see you",
          "in five minutes",
          "The doctor",
          "who is 34 years old"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "The words between the commas are extra.",
        "topic": "Commas",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What does a pair of commas do in a multi-clause sentence?",
        "options": [
          "Separates off extra information",
          "Joins two words into one",
          "Shows a question",
          "Shows speech"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "They mark non-essential information.",
        "topic": "Commas",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Which sentence is correct?",
        "options": [
          "Dan filled, with despair slumped to the ground.",
          "Dan, filled with despair, slumped to the ground.",
          "Dan filled with, despair, slumped to the ground.",
          "Dan, filled with despair slumped, to the ground."
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "'filled with despair' is the extra information.",
        "topic": "Commas",
        "difficulty": "Hard"
      },
      {
        "type": "mcq",
        "question": "Remove the extra information: 'Laura Dekker, who started sailing solo at six, circumnavigated the globe.'",
        "options": [
          "Laura started sailing solo at six.",
          "Laura Dekker circumnavigated the globe.",
          "Laura Dekker who circumnavigated.",
          "Who started sailing circumnavigated."
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "The sentence must still make sense.",
        "topic": "Commas",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What does 'traditional healer' mean?",
        "options": [
          "the shape, climate and people of a place",
          "crashes",
          "someone who uses old ideas to cure illness",
          "a severe infectious disease"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Glossary meaning from the unit.",
        "topic": "Vocabulary",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What does 'cholera' mean?",
        "options": [
          "sail around something completely",
          "a severe infectious disease",
          "get well again",
          "place where soldiers fight"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Glossary meaning from the unit.",
        "topic": "Vocabulary",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What does 'battle front' mean?",
        "options": [
          "crashes",
          "sail around something completely",
          "someone who uses old ideas to cure illness",
          "place where soldiers fight"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Glossary meaning from the unit.",
        "topic": "Vocabulary",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What does 'bankrupt' mean?",
        "options": [
          "moved quickly to avoid",
          "the shape, climate and people of a place",
          "a severe infectious disease",
          "not able to pay the money you owe"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Glossary meaning from the unit.",
        "topic": "Vocabulary",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What does 'jammed' mean?",
        "options": [
          "stuck",
          "moved quickly to avoid",
          "crashes",
          "get well again"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Glossary meaning from the unit.",
        "topic": "Vocabulary",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What does 'dodged' mean?",
        "options": [
          "stuck",
          "moved quickly to avoid",
          "the shape, climate and people of a place",
          "crashes"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Glossary meaning from the unit.",
        "topic": "Vocabulary",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What does 'collisions' mean?",
        "options": [
          "alone",
          "sail around something completely",
          "crashes",
          "moved quickly to avoid"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Glossary meaning from the unit.",
        "topic": "Vocabulary",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Where did Laura Dekker arrive on 21 January 2012?",
        "options": [
          "Panama",
          "New Zealand",
          "Cape Town",
          "St Maarten"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "She arrived at the Caribbean island of St Maarten.",
        "topic": "Reading - Sailing Solo",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "What happened when Laura was thirteen?",
        "options": [
          "She sailed solo from the Netherlands to England and back",
          "She left school",
          "She arrived in St Maarten",
          "She got lost in Panama"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Stated in 'She was born to sail'.",
        "topic": "Reading - Sailing Solo",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What is a storm jib?",
        "options": [
          "A cargo ship",
          "A type of fish",
          "A sail used in storms",
          "A school bag"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "The article says a storm jib is a sail used in storms.",
        "topic": "Reading - Sailing Solo",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What did Laura mostly eat at sea?",
        "options": [
          "Pizza",
          "Cake",
          "Fish only",
          "Rice and pasta"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "She lived on rice and pasta.",
        "topic": "Reading - Sailing Solo",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Which country did Hunter say he was from in his presentation?",
        "options": [
          "Germany",
          "France",
          "Ireland",
          "China"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "He proudly answered Germany.",
        "topic": "Reading - Hunter's Interview",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "What is a 'Schultuete'?",
        "options": [
          "A German festival",
          "A kind of boat",
          "A school bag",
          "A gift of sweets and school supplies on the first day of school"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "From Hunter's grandparents' customs.",
        "topic": "Reading - Hunter's Interview",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The saying 'Home is where you hang your hat' means:",
        "options": [
          "You must hang a hat at home",
          "Home is far away",
          "Hats are made at home",
          "You can make a home wherever you live"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Stated in the interview.",
        "topic": "Reading - Hunter's Interview",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which feature shows when a diary entry was written?",
        "options": [
          "The title",
          "The map",
          "The glossary",
          "The date"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Diaries start with the date.",
        "topic": "Diary Writing",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Which of these is an adverbial of time?",
        "options": [
          "cockroach",
          "The boat",
          "Just then",
          "rough"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Adverbials of time connect events.",
        "topic": "Diary Writing",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "'I didn't sleep well because I was so nervous' shows:",
        "options": [
          "a map",
          "thoughts and feelings",
          "a biography",
          "only dates"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Diaries record feelings.",
        "topic": "Diary Writing",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which tone suits a diary?",
        "options": [
          "Very formal",
          "Scientific",
          "Legal",
          "Informal and personal"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "A diary is personal.",
        "topic": "Diary Writing",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Which tense do most diary entries use?",
        "options": [
          "No tense",
          "Future tense only",
          "Past tense",
          "Present tense only"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "They record what has happened.",
        "topic": "Diary Writing",
        "difficulty": "Easy"
      }
    ],
    "chapter": "Unit 5: Introduce Yourself"
  },
  "7_English": {
    "title": "Unit 8: Peace - Grammar & Vocabulary Test",
    "timeMinutes": 20,
    "timeLimitMinutes": 20,
    "questions": [
      {
        "type": "mcq",
        "question": "In the sentence 'She felt at peace by the lake', what does 'peace' mean?",
        "options": [
          "A time with no war",
          "A peace treaty",
          "A calm, quiet feeling",
          "A loud celebration"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "'At peace' here means calm inside, not the absence of war.",
        "topic": "Meanings of peace",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "The word 'peace' comes from the Latin word:",
        "options": [
          "pax",
          "ori",
          "scriptum",
          "strictus"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Peace comes from Latin 'pax'; a related word is 'pacify'.",
        "topic": "Word origins",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Bulat Okudzhava, who wrote 'Don't Believe in War', was:",
        "options": [
          "An English poet who died in the First World War",
          "An American novelist",
          "A Japanese artist",
          "A Russian folk singer and writer who served in the Second World War"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Okudzhava (1924-1997) was a Russian folk singer and writer and a soldier in WWII.",
        "topic": "Poetry: Don't Believe in War",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "'War constricts the heart, lad, a pair of boots too tight' is an example of a:",
        "options": [
          "simile",
          "metaphor",
          "irony",
          "alliteration"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "The poet says war IS like tight boots without using 'like' or 'as', so it is a metaphor.",
        "topic": "Figurative language",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "In the poem, 'constricts' means:",
        "options": [
          "loosens",
          "tightens or restricts",
          "breaks",
          "cleans"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Constrict means to tighten or restrict the flow of something.",
        "topic": "Vocabulary",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "A 'lad' is:",
        "options": [
          "an old man",
          "a horse",
          "a type of gun",
          "a boy or young man"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Glossary: lad = boy or young man.",
        "topic": "Vocabulary",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "In 'Futility' by Wilfred Owen, who does 'him' refer to?",
        "options": [
          "A dead soldier",
          "The poet",
          "A farmer who is still alive",
          "The sun"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "The poet asks for the dead soldier's body to be moved into the sun.",
        "topic": "Poetry: Futility",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "'The kind old sun will know' is an example of:",
        "options": [
          "onomatopoeia",
          "irony",
          "personification",
          "a simile"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "The sun is given human feelings (kindness and knowledge).",
        "topic": "Figurative language",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What does 'futility' mean?",
        "options": [
          "great happiness",
          "a long journey",
          "pointlessness; no useful result",
          "great courage"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Futility = incapability of producing any useful result.",
        "topic": "Vocabulary",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The word 'fatuous' means:",
        "options": [
          "silly and pointless",
          "very tall",
          "very brave",
          "peaceful"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Glossary: fatuous = silly and pointless.",
        "topic": "Vocabulary",
        "difficulty": "Hard"
      },
      {
        "type": "mcq",
        "question": "Naveed Khan decided to leave his job as a war reporter after:",
        "options": [
          "winning an award",
          "meeting Paul Nash",
          "a long holiday",
          "a horrific school attack"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "He resigned a day after a horrific school attack and left for Hunza.",
        "topic": "Seeking peace in Hunza",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which word means 'the type of land, such as rough or flat'?",
        "options": [
          "migration",
          "terrain",
          "tourist",
          "inspiration"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Terrain describes the nature of an area of land.",
        "topic": "Vocabulary",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "A topic sentence is:",
        "options": [
          "the last sentence of a text",
          "a sentence that gives the main idea of a paragraph",
          "a question at the end of a lesson",
          "a sentence with a metaphor"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "The topic sentence presents the main idea; the others support it.",
        "topic": "Topic sentences",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "Paul Nash was a:",
        "options": [
          "war reporter",
          "poet",
          "yachtswoman",
          "war artist"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "Nash was an official war artist on the Western Front.",
        "topic": "Paul Nash and war landscapes",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "'Irony' is:",
        "options": [
          "saying the opposite of what you mean to make a point",
          "comparing two things using 'like'",
          "repeating the same sound",
          "giving a human feeling to an object"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "Example: 'Oh, what a lovely war!' when war is horrible.",
        "topic": "Irony",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "What does 'atomic bomb' mean in the glossary?",
        "options": [
          "a type of aeroplane",
          "a bomb made of wood",
          "a bomb using the rapid release of nuclear energy",
          "a war game"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "An atomic bomb causes damage through heat, blast and radioactivity.",
        "topic": "Vocabulary",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "How many cranes did Sadako's friends fold to make the total 1,000?",
        "options": [
          "580",
          "644",
          "356",
          "1,000"
        ],
        "correctIndex": 2,
        "points": 1,
        "explanation": "Sadako folded 644, so her friends folded 356 (644 + 356 = 1,000).",
        "topic": "1,000 cranes for peace",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "The origami crane is a traditional symbol of peace in:",
        "options": [
          "Japan",
          "Alaska",
          "Scandinavia",
          "Russia"
        ],
        "correctIndex": 0,
        "points": 1,
        "explanation": "The crane is a traditional symbol for peace in Japan.",
        "topic": "Peace symbols",
        "difficulty": "Easy"
      },
      {
        "type": "mcq",
        "question": "In a DIALOGUE, people:",
        "options": [
          "argue to win",
          "stay silent",
          "write poems",
          "share different views to understand each other"
        ],
        "correctIndex": 3,
        "points": 1,
        "explanation": "A dialogue builds understanding; a debate argues a case.",
        "topic": "Dialogue vs debate",
        "difficulty": "Medium"
      },
      {
        "type": "mcq",
        "question": "Which word means 'words that explain who a memorial is dedicated to'?",
        "options": [
          "inspiration",
          "inscription",
          "extinguished",
          "unveiled"
        ],
        "correctIndex": 1,
        "points": 1,
        "explanation": "Inscription = words on a memorial; unveiled = covering removed.",
        "topic": "Vocabulary",
        "difficulty": "Hard"
      }
    ],
    "chapter": "Unit 8: Peace"
  }
};

function findTest(classValue, subjectValue) {
  var key = classValue + "_" + subjectValue;
  return TESTS[key] || null;
}
