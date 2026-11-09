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
    "AZWAR-123",
    "ALIYAAN.123",
    "SALAR.123",
     "AYAN.123"
    // add one code per student
  ]
};
const TESTS = { 
/* Unit 8: Peace - Grammar & Vocabulary Test
   Class 7 English - 20 MCQs.
   Columns: question, option_a-d, correct_answer, marks, topic, difficulty, explanation.
   Include this file in test.html and it adds itself to GRADE7_ENGLISH_TESTS. */

var GRADE7_ENGLISH_TESTS = (typeof GRADE7_ENGLISH_TESTS !== "undefined") ? GRADE7_ENGLISH_TESTS : [];

GRADE7_ENGLISH_TESTS.push({
  "id": "g7-eng-unit8-peace",
  "class": "Class 7",
  "subject": "English - Unit 8 Peace",
  "title": "Unit 8: Peace - Grammar & Vocabulary Test",
  "timeMinutes": 20,
  "questions": [
    {
      "question": "In the sentence 'She felt at peace by the lake', what does 'peace' mean?",
      "option_a": "A time with no war",
      "option_b": "A peace treaty",
      "option_c": "A calm, quiet feeling",
      "option_d": "A loud celebration",
      "correct_answer": "C",
      "marks": 1,
      "topic": "Meanings of peace",
      "difficulty": "Easy",
      "explanation": "'At peace' here means calm inside, not the absence of war."
    },
    {
      "question": "The word 'peace' comes from the Latin word:",
      "option_a": "pax",
      "option_b": "ori",
      "option_c": "scriptum",
      "option_d": "strictus",
      "correct_answer": "A",
      "marks": 1,
      "topic": "Word origins",
      "difficulty": "Easy",
      "explanation": "Peace comes from Latin 'pax'; a related word is 'pacify'."
    },
    {
      "question": "Bulat Okudzhava, who wrote 'Don't Believe in War', was:",
      "option_a": "An English poet who died in the First World War",
      "option_b": "An American novelist",
      "option_c": "A Japanese artist",
      "option_d": "A Russian folk singer and writer who served in the Second World War",
      "correct_answer": "D",
      "marks": 1,
      "topic": "Poetry: Don't Believe in War",
      "difficulty": "Easy",
      "explanation": "Okudzhava (1924-1997) was a Russian folk singer and writer and a soldier in WWII."
    },
    {
      "question": "'War constricts the heart, lad, a pair of boots too tight' is an example of a:",
      "option_a": "simile",
      "option_b": "metaphor",
      "option_c": "irony",
      "option_d": "alliteration",
      "correct_answer": "B",
      "marks": 1,
      "topic": "Figurative language",
      "difficulty": "Medium",
      "explanation": "The poet says war IS like tight boots without using 'like' or 'as', so it is a metaphor."
    },
    {
      "question": "In the poem, 'constricts' means:",
      "option_a": "loosens",
      "option_b": "tightens or restricts",
      "option_c": "breaks",
      "option_d": "cleans",
      "correct_answer": "B",
      "marks": 1,
      "topic": "Vocabulary",
      "difficulty": "Easy",
      "explanation": "Constrict means to tighten or restrict the flow of something."
    },
    {
      "question": "A 'lad' is:",
      "option_a": "an old man",
      "option_b": "a horse",
      "option_c": "a type of gun",
      "option_d": "a boy or young man",
      "correct_answer": "D",
      "marks": 1,
      "topic": "Vocabulary",
      "difficulty": "Easy",
      "explanation": "Glossary: lad = boy or young man."
    },
    {
      "question": "In 'Futility' by Wilfred Owen, who does 'him' refer to?",
      "option_a": "A dead soldier",
      "option_b": "The poet",
      "option_c": "A farmer who is still alive",
      "option_d": "The sun",
      "correct_answer": "A",
      "marks": 1,
      "topic": "Poetry: Futility",
      "difficulty": "Easy",
      "explanation": "The poet asks for the dead soldier's body to be moved into the sun."
    },
    {
      "question": "'The kind old sun will know' is an example of:",
      "option_a": "onomatopoeia",
      "option_b": "irony",
      "option_c": "personification",
      "option_d": "a simile",
      "correct_answer": "C",
      "marks": 1,
      "topic": "Figurative language",
      "difficulty": "Medium",
      "explanation": "The sun is given human feelings (kindness and knowledge)."
    },
    {
      "question": "What does 'futility' mean?",
      "option_a": "great happiness",
      "option_b": "a long journey",
      "option_c": "pointlessness; no useful result",
      "option_d": "great courage",
      "correct_answer": "C",
      "marks": 1,
      "topic": "Vocabulary",
      "difficulty": "Medium",
      "explanation": "Futility = incapability of producing any useful result."
    },
    {
      "question": "The word 'fatuous' means:",
      "option_a": "silly and pointless",
      "option_b": "very tall",
      "option_c": "very brave",
      "option_d": "peaceful",
      "correct_answer": "A",
      "marks": 1,
      "topic": "Vocabulary",
      "difficulty": "Hard",
      "explanation": "Glossary: fatuous = silly and pointless."
    },
    {
      "question": "Naveed Khan decided to leave his job as a war reporter after:",
      "option_a": "winning an award",
      "option_b": "meeting Paul Nash",
      "option_c": "a long holiday",
      "option_d": "a horrific school attack",
      "correct_answer": "D",
      "marks": 1,
      "topic": "Seeking peace in Hunza",
      "difficulty": "Medium",
      "explanation": "He resigned a day after a horrific school attack and left for Hunza."
    },
    {
      "question": "Which word means 'the type of land, such as rough or flat'?",
      "option_a": "migration",
      "option_b": "terrain",
      "option_c": "tourist",
      "option_d": "inspiration",
      "correct_answer": "B",
      "marks": 1,
      "topic": "Vocabulary",
      "difficulty": "Easy",
      "explanation": "Terrain describes the nature of an area of land."
    },
    {
      "question": "A topic sentence is:",
      "option_a": "the last sentence of a text",
      "option_b": "a sentence that gives the main idea of a paragraph",
      "option_c": "a question at the end of a lesson",
      "option_d": "a sentence with a metaphor",
      "correct_answer": "B",
      "marks": 1,
      "topic": "Topic sentences",
      "difficulty": "Easy",
      "explanation": "The topic sentence presents the main idea; the others support it."
    },
    {
      "question": "Paul Nash was a:",
      "option_a": "war reporter",
      "option_b": "poet",
      "option_c": "yachtswoman",
      "option_d": "war artist",
      "correct_answer": "D",
      "marks": 1,
      "topic": "Paul Nash and war landscapes",
      "difficulty": "Easy",
      "explanation": "Nash was an official war artist on the Western Front."
    },
    {
      "question": "'Irony' is:",
      "option_a": "saying the opposite of what you mean to make a point",
      "option_b": "comparing two things using 'like'",
      "option_c": "repeating the same sound",
      "option_d": "giving a human feeling to an object",
      "correct_answer": "A",
      "marks": 1,
      "topic": "Irony",
      "difficulty": "Medium",
      "explanation": "Example: 'Oh, what a lovely war!' when war is horrible."
    },
    {
      "question": "What does 'atomic bomb' mean in the glossary?",
      "option_a": "a type of aeroplane",
      "option_b": "a bomb made of wood",
      "option_c": "a bomb using the rapid release of nuclear energy",
      "option_d": "a war game",
      "correct_answer": "C",
      "marks": 1,
      "topic": "Vocabulary",
      "difficulty": "Medium",
      "explanation": "An atomic bomb causes damage through heat, blast and radioactivity."
    },
    {
      "question": "How many cranes did Sadako's friends fold to make the total 1,000?",
      "option_a": "580",
      "option_b": "644",
      "option_c": "356",
      "option_d": "1,000",
      "correct_answer": "C",
      "marks": 1,
      "topic": "1,000 cranes for peace",
      "difficulty": "Medium",
      "explanation": "Sadako folded 644, so her friends folded 356 (644 + 356 = 1,000)."
    },
    {
      "question": "The origami crane is a traditional symbol of peace in:",
      "option_a": "Japan",
      "option_b": "Alaska",
      "option_c": "Scandinavia",
      "option_d": "Russia",
      "correct_answer": "A",
      "marks": 1,
      "topic": "Peace symbols",
      "difficulty": "Easy",
      "explanation": "The crane is a traditional symbol for peace in Japan."
    },
    {
      "question": "In a DIALOGUE, people:",
      "option_a": "argue to win",
      "option_b": "stay silent",
      "option_c": "write poems",
      "option_d": "share different views to understand each other",
      "correct_answer": "D",
      "marks": 1,
      "topic": "Dialogue vs debate",
      "difficulty": "Medium",
      "explanation": "A dialogue builds understanding; a debate argues a case."
    },
    {
      "question": "Which word means 'words that explain who a memorial is dedicated to'?",
      "option_a": "inspiration",
      "option_b": "inscription",
      "option_c": "extinguished",
      "option_d": "unveiled",
      "correct_answer": "B",
      "marks": 1,
      "topic": "Vocabulary",
      "difficulty": "Hard",
      "explanation": "Inscription = words on a memorial; unveiled = covering removed."
    }
  ]
});
// Class 5 English - Unit 5: Introduce Yourself (100 MCQs)
// Marks: 1 each. Time: 60 minutes (change timeMinutes if needed).
window.PREPCREST_TESTS = window.PREPCREST_TESTS || [];
window.PREPCREST_TESTS.push({
  "class": "Class 5",
  "subject": "English",
  "chapter": "Unit 5: Introduce Yourself",
  "timeMinutes": 60,
  "totalMarks": 100,
  "questions": [
    {
      "question": "What is the plural of 'berry'?",
      "options": [
        "berry's",
        "berries",
        "berryes",
        "berrys"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Plurals",
      "difficulty": "Easy",
      "explanation": "Consonant + y changes y to ie before s."
    },
    {
      "question": "What is the plural of 'key'?",
      "options": [
        "keies",
        "keyes",
        "key's",
        "keys"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Plurals",
      "difficulty": "Easy",
      "explanation": "A vowel comes before y, so just add s."
    },
    {
      "question": "What is the plural of 'lunch'?",
      "options": [
        "lunchs'",
        "lunchs",
        "lunchies",
        "lunches"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Plurals",
      "difficulty": "Easy",
      "explanation": "Words ending in ch add es."
    },
    {
      "question": "Which is the correct plural of 'calf'?",
      "options": [
        "calfs",
        "calves",
        "calvs",
        "calfes"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Plurals",
      "difficulty": "Medium",
      "explanation": "f changes to ves in calf/calves."
    },
    {
      "question": "Which plural is spelt correctly?",
      "options": [
        "potatose",
        "potatoes",
        "potatoies",
        "potatos"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Plurals",
      "difficulty": "Medium",
      "explanation": "Tricky o-words like potato add es."
    },
    {
      "question": "'We spent lunch break playing football.' This is written in the ___ person.",
      "options": [
        "none",
        "third",
        "second",
        "first"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Pronouns",
      "difficulty": "Easy",
      "explanation": "We is a first-person pronoun."
    },
    {
      "question": "'You take 2 kilograms of flour and add water.' This is the ___ person.",
      "options": [
        "fourth",
        "second",
        "third",
        "first"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Pronouns",
      "difficulty": "Easy",
      "explanation": "You shows second person."
    },
    {
      "question": "Which pronoun is third person?",
      "options": [
        "I",
        "we",
        "them",
        "you"
      ],
      "correctIndex": 2,
      "correctAnswer": "C",
      "marks": 1,
      "topic": "Pronouns",
      "difficulty": "Easy",
      "explanation": "He, she, it, they, him, her, them are third person."
    },
    {
      "question": "Rewrite 'They are going to the cinema' in the first person. Which is correct?",
      "options": [
        "You are going to the cinema.",
        "It is going to the cinema.",
        "We are going to the cinema.",
        "He is going to the cinema."
      ],
      "correctIndex": 2,
      "correctAnswer": "C",
      "marks": 1,
      "topic": "Pronouns",
      "difficulty": "Medium",
      "explanation": "Changing the viewpoint to first person plural gives We."
    },
    {
      "question": "Which one is a FACT about Hunter?",
      "options": [
        "He was born in Texas, USA.",
        "Germany is the best country.",
        "Beijing is the nicest city.",
        "School is boring."
      ],
      "correctIndex": 0,
      "correctAnswer": "A",
      "marks": 1,
      "topic": "Fact vs Opinion",
      "difficulty": "Easy",
      "explanation": "A fact can be proved. The others are opinions."
    },
    {
      "question": "Which one is an OPINION?",
      "options": [
        "Mary was the kindest nurse ever.",
        "Mary Seacole was born in 1805.",
        "Mary opened the British Hotel.",
        "Mary died in London in 1881."
      ],
      "correctIndex": 0,
      "correctAnswer": "A",
      "marks": 1,
      "topic": "Fact vs Opinion",
      "difficulty": "Medium",
      "explanation": "'Kindest' shows what someone thinks."
    },
    {
      "question": "A biography tells events in which order?",
      "options": [
        "Backwards only",
        "Chronological order",
        "Alphabetical order",
        "Any order"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Biography",
      "difficulty": "Easy",
      "explanation": "Biographies follow time order."
    },
    {
      "question": "Where did Mary Seacole go in 1851?",
      "options": [
        "Crimea",
        "Panama",
        "London",
        "Germany"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Biography",
      "difficulty": "Easy",
      "explanation": "She went to stay with her brother in Panama."
    },
    {
      "question": "Which sentence is written in correct direct speech?",
      "options": [
        "I \"am hungry,\" said Ali.",
        "\"I am hungry said Ali.\"",
        "\"I am hungry,\" said Ali.",
        "I am hungry, said Ali."
      ],
      "correctIndex": 2,
      "correctAnswer": "C",
      "marks": 1,
      "topic": "Direct Speech",
      "difficulty": "Medium",
      "explanation": "Spoken words and the comma go inside speech marks."
    },
    {
      "question": "Reported speech of: \"I am hungry,\" said Ali.",
      "options": [
        "Ali says I was hungry.",
        "Ali said that I am hungry.",
        "Ali said, he is hungry.",
        "Ali said that he was hungry."
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Reported Speech",
      "difficulty": "Medium",
      "explanation": "Pronoun I becomes he; am becomes was."
    },
    {
      "question": "In reported speech, 'can' usually changes to:",
      "options": [
        "will",
        "cans",
        "could",
        "must"
      ],
      "correctIndex": 2,
      "correctAnswer": "C",
      "marks": 1,
      "topic": "Reported Speech",
      "difficulty": "Medium",
      "explanation": "The tense moves one step back."
    },
    {
      "question": "Which sentence has the commas in the right place?",
      "options": [
        "Laura, Dekker the youngest sailor arrived in St Maarten.",
        "Laura Dekker the youngest sailor arrived, in St Maarten.",
        "Laura Dekker, the youngest sailor, arrived in St Maarten.",
        "Laura Dekker the youngest, sailor arrived in St Maarten."
      ],
      "correctIndex": 2,
      "correctAnswer": "C",
      "marks": 1,
      "topic": "Commas",
      "difficulty": "Hard",
      "explanation": "A pair of commas surrounds the extra information."
    },
    {
      "question": "In 'My cousin, who is ten, plays cricket', what is the extra information?",
      "options": [
        "My cousin",
        "who is ten",
        "plays cricket",
        "cricket"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Commas",
      "difficulty": "Medium",
      "explanation": "The words between the commas can be removed."
    },
    {
      "question": "'Circumnavigate' means:",
      "options": [
        "to sail around something completely",
        "to jump into water",
        "to stay at home",
        "to sail slowly"
      ],
      "correctIndex": 0,
      "correctAnswer": "A",
      "marks": 1,
      "topic": "Vocabulary",
      "difficulty": "Medium",
      "explanation": "Laura Dekker circumnavigated the globe."
    },
    {
      "question": "Which is NOT a feature of a diary?",
      "options": [
        "Formal language for a general audience",
        "First person",
        "Past tense",
        "Date"
      ],
      "correctIndex": 0,
      "correctAnswer": "A",
      "marks": 1,
      "topic": "Diary",
      "difficulty": "Medium",
      "explanation": "Diaries use informal, personal language."
    },
    {
      "question": "What is the plural of 'baby'?",
      "options": [
        "baby's",
        "babys",
        "babyes",
        "babies"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Plurals",
      "difficulty": "Medium",
      "explanation": "Rule: consonant + y changes to ies."
    },
    {
      "question": "What is the plural of 'story'?",
      "options": [
        "stories",
        "story's",
        "storys",
        "storyes"
      ],
      "correctIndex": 0,
      "correctAnswer": "A",
      "marks": 1,
      "topic": "Plurals",
      "difficulty": "Medium",
      "explanation": "Rule: consonant + y changes to ies."
    },
    {
      "question": "What is the plural of 'puppy'?",
      "options": [
        "puppyes",
        "puppies",
        "puppy's",
        "puppys"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Plurals",
      "difficulty": "Medium",
      "explanation": "Rule: consonant + y changes to ies."
    },
    {
      "question": "What is the plural of 'boy'?",
      "options": [
        "boies",
        "boys",
        "boy's",
        "boyes"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Plurals",
      "difficulty": "Easy",
      "explanation": "Rule: vowel + y just adds s."
    },
    {
      "question": "What is the plural of 'monkey'?",
      "options": [
        "monkey's",
        "monkeys",
        "monkies",
        "monkeyes"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Plurals",
      "difficulty": "Medium",
      "explanation": "Rule: vowel + y just adds s."
    },
    {
      "question": "What is the plural of 'box'?",
      "options": [
        "boxies",
        "boxs",
        "boxes",
        "box's"
      ],
      "correctIndex": 2,
      "correctAnswer": "C",
      "marks": 1,
      "topic": "Plurals",
      "difficulty": "Easy",
      "explanation": "Rule: words ending in s, x, ch, sh, ss add es."
    },
    {
      "question": "What is the plural of 'dish'?",
      "options": [
        "dishes",
        "dishs",
        "dishies",
        "dish's"
      ],
      "correctIndex": 0,
      "correctAnswer": "A",
      "marks": 1,
      "topic": "Plurals",
      "difficulty": "Easy",
      "explanation": "Rule: words ending in s, x, ch, sh, ss add es."
    },
    {
      "question": "What is the plural of 'church'?",
      "options": [
        "churchies",
        "churches",
        "church's",
        "churchs"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Plurals",
      "difficulty": "Medium",
      "explanation": "Rule: words ending in s, x, ch, sh, ss add es."
    },
    {
      "question": "What is the plural of 'glass'?",
      "options": [
        "glassies",
        "glasses",
        "glasss",
        "glass's"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Plurals",
      "difficulty": "Medium",
      "explanation": "Rule: words ending in s, x, ch, sh, ss add es."
    },
    {
      "question": "What is the plural of 'knife'?",
      "options": [
        "knifees",
        "knives",
        "knifes",
        "knive"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Plurals",
      "difficulty": "Medium",
      "explanation": "Rule: f/fe changes to ves."
    },
    {
      "question": "What is the plural of 'thief'?",
      "options": [
        "thieves",
        "thieve",
        "thiefes",
        "thiefs"
      ],
      "correctIndex": 0,
      "correctAnswer": "A",
      "marks": 1,
      "topic": "Plurals",
      "difficulty": "Medium",
      "explanation": "Rule: f/fe changes to ves."
    },
    {
      "question": "What is the plural of 'shelf'?",
      "options": [
        "shelve",
        "shelfes",
        "shelves",
        "shelfs"
      ],
      "correctIndex": 2,
      "correctAnswer": "C",
      "marks": 1,
      "topic": "Plurals",
      "difficulty": "Medium",
      "explanation": "Rule: f/fe changes to ves."
    },
    {
      "question": "What is the plural of 'loaf'?",
      "options": [
        "loave",
        "loafes",
        "loaves",
        "loafs"
      ],
      "correctIndex": 2,
      "correctAnswer": "C",
      "marks": 1,
      "topic": "Plurals",
      "difficulty": "Medium",
      "explanation": "Rule: f/fe changes to ves."
    },
    {
      "question": "What is the plural of 'tomato'?",
      "options": [
        "tomatoies",
        "tomato's",
        "tomatos",
        "tomatoes"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Plurals",
      "difficulty": "Medium",
      "explanation": "Rule: tricky o-words add es."
    },
    {
      "question": "Which rule explains key/keys?",
      "options": [
        "Add es",
        "Change y to ves",
        "A vowel comes before y, so just add s",
        "Change y to ie"
      ],
      "correctIndex": 2,
      "correctAnswer": "C",
      "marks": 1,
      "topic": "Plurals",
      "difficulty": "Medium",
      "explanation": "Vowel + y just adds s."
    },
    {
      "question": "'I am going home to change my clothes.' This sentence is written in the ___ person.",
      "options": [
        "third",
        "fourth",
        "second",
        "first"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Pronouns & Point of View",
      "difficulty": "Easy",
      "explanation": "Pronouns: first = I/we/me/us; second = you; third = he/she/it/they/him/her/them."
    },
    {
      "question": "'They are going the wrong way.' This sentence is written in the ___ person.",
      "options": [
        "third",
        "fourth",
        "second",
        "first"
      ],
      "correctIndex": 0,
      "correctAnswer": "A",
      "marks": 1,
      "topic": "Pronouns & Point of View",
      "difficulty": "Easy",
      "explanation": "Pronouns: first = I/we/me/us; second = you; third = he/she/it/they/him/her/them."
    },
    {
      "question": "'You should wear a helmet when you ride.' This sentence is written in the ___ person.",
      "options": [
        "first",
        "third",
        "second",
        "fourth"
      ],
      "correctIndex": 2,
      "correctAnswer": "C",
      "marks": 1,
      "topic": "Pronouns & Point of View",
      "difficulty": "Easy",
      "explanation": "Pronouns: first = I/we/me/us; second = you; third = he/she/it/they/him/her/them."
    },
    {
      "question": "'The teacher told us a story.' This sentence is written in the ___ person.",
      "options": [
        "second",
        "third",
        "fourth",
        "first"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Pronouns & Point of View",
      "difficulty": "Easy",
      "explanation": "Pronouns: first = I/we/me/us; second = you; third = he/she/it/they/him/her/them."
    },
    {
      "question": "'Give me the book, please.' This sentence is written in the ___ person.",
      "options": [
        "third",
        "second",
        "fourth",
        "first"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Pronouns & Point of View",
      "difficulty": "Easy",
      "explanation": "Pronouns: first = I/we/me/us; second = you; third = he/she/it/they/him/her/them."
    },
    {
      "question": "'She likes to read before bed.' This sentence is written in the ___ person.",
      "options": [
        "fourth",
        "second",
        "third",
        "first"
      ],
      "correctIndex": 2,
      "correctAnswer": "C",
      "marks": 1,
      "topic": "Pronouns & Point of View",
      "difficulty": "Easy",
      "explanation": "Pronouns: first = I/we/me/us; second = you; third = he/she/it/they/him/her/them."
    },
    {
      "question": "'We like to fly the kite on windy days.' This sentence is written in the ___ person.",
      "options": [
        "first",
        "third",
        "second",
        "fourth"
      ],
      "correctIndex": 0,
      "correctAnswer": "A",
      "marks": 1,
      "topic": "Pronouns & Point of View",
      "difficulty": "Easy",
      "explanation": "Pronouns: first = I/we/me/us; second = you; third = he/she/it/they/him/her/them."
    },
    {
      "question": "'It was raining all day.' This sentence is written in the ___ person.",
      "options": [
        "fourth",
        "third",
        "second",
        "first"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Pronouns & Point of View",
      "difficulty": "Easy",
      "explanation": "Pronouns: first = I/we/me/us; second = you; third = he/she/it/they/him/her/them."
    },
    {
      "question": "Which of these is a second-person pronoun?",
      "options": [
        "I",
        "they",
        "she",
        "you"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Pronouns & Point of View",
      "difficulty": "Easy",
      "explanation": "You is the only second-person pronoun."
    },
    {
      "question": "Why do writers use many pronouns in an interview like 'Home country, what's that?'",
      "options": [
        "To make it personal and avoid repeating names",
        "To make it a poem",
        "To make the text longer",
        "To confuse the reader"
      ],
      "correctIndex": 0,
      "correctAnswer": "A",
      "marks": 1,
      "topic": "Pronouns & Point of View",
      "difficulty": "Medium",
      "explanation": "Pronouns make a text personal and smooth."
    },
    {
      "question": "Is this a fact or an opinion? 'Germany is the best country in the world.'",
      "options": [
        "Fact",
        "Opinion",
        "A command",
        "A question"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Fact vs Opinion",
      "difficulty": "Easy",
      "explanation": "A fact can be proved; an opinion is a feeling or belief."
    },
    {
      "question": "Is this a fact or an opinion? 'Mary Seacole was born in 1805.'",
      "options": [
        "A command",
        "Fact",
        "Opinion",
        "A question"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Fact vs Opinion",
      "difficulty": "Easy",
      "explanation": "A fact can be proved; an opinion is a feeling or belief."
    },
    {
      "question": "Is this a fact or an opinion? 'Mary Seacole was the bravest nurse ever.'",
      "options": [
        "Opinion",
        "A question",
        "A command",
        "Fact"
      ],
      "correctIndex": 0,
      "correctAnswer": "A",
      "marks": 1,
      "topic": "Fact vs Opinion",
      "difficulty": "Easy",
      "explanation": "A fact can be proved; an opinion is a feeling or belief."
    },
    {
      "question": "Is this a fact or an opinion? 'Laura Dekker first sailed solo when she was six.'",
      "options": [
        "A question",
        "Fact",
        "Opinion",
        "A command"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Fact vs Opinion",
      "difficulty": "Easy",
      "explanation": "A fact can be proved; an opinion is a feeling or belief."
    },
    {
      "question": "Is this a fact or an opinion? 'In Germany parents give a Schultuete on a child's first day of school.'",
      "options": [
        "Fact",
        "A question",
        "Opinion",
        "A command"
      ],
      "correctIndex": 0,
      "correctAnswer": "A",
      "marks": 1,
      "topic": "Fact vs Opinion",
      "difficulty": "Easy",
      "explanation": "A fact can be proved; an opinion is a feeling or belief."
    },
    {
      "question": "Is this a fact or an opinion? 'Kites are more fun than football.'",
      "options": [
        "A command",
        "Opinion",
        "Fact",
        "A question"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Fact vs Opinion",
      "difficulty": "Easy",
      "explanation": "A fact can be proved; an opinion is a feeling or belief."
    },
    {
      "question": "Where was Mary Seacole born?",
      "options": [
        "Panama",
        "Kingston, Jamaica",
        "London, England",
        "Crimea"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Biography - Mary Seacole",
      "difficulty": "Easy",
      "explanation": "Stated in the biography of Mary Seacole."
    },
    {
      "question": "In which year did Mary's husband die?",
      "options": [
        "1851",
        "1856",
        "1836",
        "1844"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Biography - Mary Seacole",
      "difficulty": "Medium",
      "explanation": "Stated in the biography of Mary Seacole."
    },
    {
      "question": "In which year did Mary marry?",
      "options": [
        "1844",
        "1805",
        "1836",
        "1881"
      ],
      "correctIndex": 2,
      "correctAnswer": "C",
      "marks": 1,
      "topic": "Biography - Mary Seacole",
      "difficulty": "Medium",
      "explanation": "Stated in the biography of Mary Seacole."
    },
    {
      "question": "Which disease broke out in Panama while Mary was there?",
      "options": [
        "measles",
        "chicken pox",
        "cholera",
        "flu"
      ],
      "correctIndex": 2,
      "correctAnswer": "C",
      "marks": 1,
      "topic": "Biography - Mary Seacole",
      "difficulty": "Medium",
      "explanation": "Stated in the biography of Mary Seacole."
    },
    {
      "question": "Which war began in 1853, before Mary travelled to the Crimea?",
      "options": [
        "The Crimean War",
        "The Jamaican War",
        "The Panama War",
        "The Cholera War"
      ],
      "correctIndex": 0,
      "correctAnswer": "A",
      "marks": 1,
      "topic": "Biography - Mary Seacole",
      "difficulty": "Medium",
      "explanation": "Stated in the biography of Mary Seacole."
    },
    {
      "question": "Why was Mary bankrupt when she returned to London?",
      "options": [
        "She lost her book",
        "She bought a ship",
        "She did not work",
        "Soldiers had run up debts at the British Hotel"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Biography - Mary Seacole",
      "difficulty": "Medium",
      "explanation": "Stated in the biography of Mary Seacole."
    },
    {
      "question": "Who started a charity to raise money for Mary?",
      "options": [
        "The newspapers",
        "Her brother",
        "The Panama doctors",
        "The cholera patients"
      ],
      "correctIndex": 0,
      "correctAnswer": "A",
      "marks": 1,
      "topic": "Biography - Mary Seacole",
      "difficulty": "Medium",
      "explanation": "Stated in the biography of Mary Seacole."
    },
    {
      "question": "Mary's autobiography became a:",
      "options": [
        "school textbook",
        "failure",
        "poem",
        "bestseller"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Biography - Mary Seacole",
      "difficulty": "Medium",
      "explanation": "Stated in the biography of Mary Seacole."
    },
    {
      "question": "In which year did Mary Seacole die?",
      "options": [
        "1857",
        "1805",
        "1851",
        "1881"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Biography - Mary Seacole",
      "difficulty": "Medium",
      "explanation": "Stated in the biography of Mary Seacole."
    },
    {
      "question": "Is this direct or reported speech? Mary Seacole said she wanted to nurse injured soldiers.",
      "options": [
        "A question",
        "A title",
        "Direct speech",
        "Reported speech"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Direct & Reported Speech",
      "difficulty": "Easy",
      "explanation": "Direct speech has speech marks; reported speech does not."
    },
    {
      "question": "Is this direct or reported speech? Hunter declared, \"I'm from Germany!\"",
      "options": [
        "Reported speech",
        "A question",
        "A title",
        "Direct speech"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Direct & Reported Speech",
      "difficulty": "Easy",
      "explanation": "Direct speech has speech marks; reported speech does not."
    },
    {
      "question": "Is this direct or reported speech? \"I enjoyed reading the biography!\" he exclaimed.",
      "options": [
        "Direct speech",
        "Reported speech",
        "A title",
        "A question"
      ],
      "correctIndex": 0,
      "correctAnswer": "A",
      "marks": 1,
      "topic": "Direct & Reported Speech",
      "difficulty": "Easy",
      "explanation": "Direct speech has speech marks; reported speech does not."
    },
    {
      "question": "Is this direct or reported speech? She said that she was tired.",
      "options": [
        "Direct speech",
        "Reported speech",
        "A title",
        "A question"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Direct & Reported Speech",
      "difficulty": "Easy",
      "explanation": "Direct speech has speech marks; reported speech does not."
    },
    {
      "question": "Is this direct or reported speech? \"Come here,\" called the teacher.",
      "options": [
        "A question",
        "A title",
        "Reported speech",
        "Direct speech"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Direct & Reported Speech",
      "difficulty": "Easy",
      "explanation": "Direct speech has speech marks; reported speech does not."
    },
    {
      "question": "Is this direct or reported speech? The boy said that he liked cricket.",
      "options": [
        "A question",
        "Reported speech",
        "Direct speech",
        "A title"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Direct & Reported Speech",
      "difficulty": "Easy",
      "explanation": "Direct speech has speech marks; reported speech does not."
    },
    {
      "question": "Is this direct or reported speech? Sara shouted, \"Watch out!\"",
      "options": [
        "A title",
        "A question",
        "Direct speech",
        "Reported speech"
      ],
      "correctIndex": 2,
      "correctAnswer": "C",
      "marks": 1,
      "topic": "Direct & Reported Speech",
      "difficulty": "Easy",
      "explanation": "Direct speech has speech marks; reported speech does not."
    },
    {
      "question": "Choose the correct reported speech for: \"I am tired,\" said Sara.",
      "options": [
        "Sara said that I am tired.",
        "Sara said that she was tired.",
        "Sara said that she is tired.",
        "Sara said she were tired."
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Direct & Reported Speech",
      "difficulty": "Medium",
      "explanation": "Change the pronoun and move the tense one step back."
    },
    {
      "question": "Choose the correct reported speech for: \"We are playing football,\" said the boys.",
      "options": [
        "The boys said that we were playing football.",
        "The boys said that they are playing football.",
        "The boys said they was playing football.",
        "The boys said that they were playing football."
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Direct & Reported Speech",
      "difficulty": "Medium",
      "explanation": "Change the pronoun and move the tense one step back."
    },
    {
      "question": "Choose the correct reported speech for: \"I can swim,\" said Ali.",
      "options": [
        "Ali said that he can swim.",
        "Ali said that he could swim.",
        "Ali said that I could swim.",
        "Ali said he cans swim."
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Direct & Reported Speech",
      "difficulty": "Medium",
      "explanation": "Change the pronoun and move the tense one step back."
    },
    {
      "question": "Choose the correct reported speech for: \"I have finished my work,\" said Noor.",
      "options": [
        "Noor said that she had finished her work.",
        "Noor said that she has finished her work.",
        "Noor said she have finished her work.",
        "Noor said that I had finished my work."
      ],
      "correctIndex": 0,
      "correctAnswer": "A",
      "marks": 1,
      "topic": "Direct & Reported Speech",
      "difficulty": "Medium",
      "explanation": "Change the pronoun and move the tense one step back."
    },
    {
      "question": "Choose the correct reported speech for: \"I live in Quetta,\" said Amna.",
      "options": [
        "Amna said that she lived in Quetta.",
        "Amna said that she is living in Quetta.",
        "Amna said that she live in Quetta.",
        "Amna said that I lived in Quetta."
      ],
      "correctIndex": 0,
      "correctAnswer": "A",
      "marks": 1,
      "topic": "Direct & Reported Speech",
      "difficulty": "Medium",
      "explanation": "Change the pronoun and move the tense one step back."
    },
    {
      "question": "Choose the correct reported speech for: \"I like swimming!\" she declared.",
      "options": [
        "She declared that she liked swimming.",
        "She declared she like swimming.",
        "She declared that I liked swimming.",
        "She declared that she likes swimming."
      ],
      "correctIndex": 0,
      "correctAnswer": "A",
      "marks": 1,
      "topic": "Direct & Reported Speech",
      "difficulty": "Medium",
      "explanation": "Change the pronoun and move the tense one step back."
    },
    {
      "question": "Which sentence is punctuated correctly?",
      "options": [
        "\"I would like to go to the beach\", he said.",
        "I would like to go to the beach, he said.",
        "\"I would like to go to the beach,\" he said.",
        "\"I would like to go to the beach\" he said."
      ],
      "correctIndex": 2,
      "correctAnswer": "C",
      "marks": 1,
      "topic": "Direct Speech Punctuation",
      "difficulty": "Medium",
      "explanation": "A comma goes inside the speech marks before the reporting clause."
    },
    {
      "question": "Where do question marks and exclamation marks go in direct speech?",
      "options": [
        "After the reporting clause only",
        "They are not used",
        "Outside the speech marks",
        "Inside the speech marks"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Direct Speech Punctuation",
      "difficulty": "Easy",
      "explanation": "They are part of the spoken words."
    },
    {
      "question": "In which position is the reporting clause? He exclaimed, \"I hope you score many goals!\"",
      "options": [
        "At the end",
        "In the middle",
        "There is none",
        "At the start"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Direct Speech Punctuation",
      "difficulty": "Easy",
      "explanation": "'He exclaimed' comes before the speech."
    },
    {
      "question": "Which sentence uses a pair of commas correctly?",
      "options": [
        "Fatima Khan, an Olympic team member, set a personal best.",
        "Fatima Khan an, Olympic team member set a personal best.",
        "Fatima Khan an Olympic team member, set a personal best.",
        "Fatima, Khan an Olympic team member set a personal best."
      ],
      "correctIndex": 0,
      "correctAnswer": "A",
      "marks": 1,
      "topic": "Commas",
      "difficulty": "Hard",
      "explanation": "Commas go around the extra information."
    },
    {
      "question": "What is the extra information in: 'The doctor, who is 34 years old, will see you in five minutes.'",
      "options": [
        "will see you",
        "in five minutes",
        "The doctor",
        "who is 34 years old"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Commas",
      "difficulty": "Medium",
      "explanation": "The words between the commas are extra."
    },
    {
      "question": "What does a pair of commas do in a multi-clause sentence?",
      "options": [
        "Separates off extra information",
        "Joins two words into one",
        "Shows a question",
        "Shows speech"
      ],
      "correctIndex": 0,
      "correctAnswer": "A",
      "marks": 1,
      "topic": "Commas",
      "difficulty": "Easy",
      "explanation": "They mark non-essential information."
    },
    {
      "question": "Which sentence is correct?",
      "options": [
        "Dan filled, with despair slumped to the ground.",
        "Dan, filled with despair, slumped to the ground.",
        "Dan filled with, despair, slumped to the ground.",
        "Dan, filled with despair slumped, to the ground."
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Commas",
      "difficulty": "Hard",
      "explanation": "'filled with despair' is the extra information."
    },
    {
      "question": "Remove the extra information: 'Laura Dekker, who started sailing solo at six, circumnavigated the globe.'",
      "options": [
        "Laura started sailing solo at six.",
        "Laura Dekker circumnavigated the globe.",
        "Laura Dekker who circumnavigated.",
        "Who started sailing circumnavigated."
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Commas",
      "difficulty": "Medium",
      "explanation": "The sentence must still make sense."
    },
    {
      "question": "What does 'traditional healer' mean?",
      "options": [
        "the shape, climate and people of a place",
        "crashes",
        "someone who uses old ideas to cure illness",
        "a severe infectious disease"
      ],
      "correctIndex": 2,
      "correctAnswer": "C",
      "marks": 1,
      "topic": "Vocabulary",
      "difficulty": "Medium",
      "explanation": "Glossary meaning from the unit."
    },
    {
      "question": "What does 'cholera' mean?",
      "options": [
        "sail around something completely",
        "a severe infectious disease",
        "get well again",
        "place where soldiers fight"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Vocabulary",
      "difficulty": "Medium",
      "explanation": "Glossary meaning from the unit."
    },
    {
      "question": "What does 'battle front' mean?",
      "options": [
        "crashes",
        "sail around something completely",
        "someone who uses old ideas to cure illness",
        "place where soldiers fight"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Vocabulary",
      "difficulty": "Medium",
      "explanation": "Glossary meaning from the unit."
    },
    {
      "question": "What does 'bankrupt' mean?",
      "options": [
        "moved quickly to avoid",
        "the shape, climate and people of a place",
        "a severe infectious disease",
        "not able to pay the money you owe"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Vocabulary",
      "difficulty": "Medium",
      "explanation": "Glossary meaning from the unit."
    },
    {
      "question": "What does 'jammed' mean?",
      "options": [
        "stuck",
        "moved quickly to avoid",
        "crashes",
        "get well again"
      ],
      "correctIndex": 0,
      "correctAnswer": "A",
      "marks": 1,
      "topic": "Vocabulary",
      "difficulty": "Medium",
      "explanation": "Glossary meaning from the unit."
    },
    {
      "question": "What does 'dodged' mean?",
      "options": [
        "stuck",
        "moved quickly to avoid",
        "the shape, climate and people of a place",
        "crashes"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Vocabulary",
      "difficulty": "Medium",
      "explanation": "Glossary meaning from the unit."
    },
    {
      "question": "What does 'collisions' mean?",
      "options": [
        "alone",
        "sail around something completely",
        "crashes",
        "moved quickly to avoid"
      ],
      "correctIndex": 2,
      "correctAnswer": "C",
      "marks": 1,
      "topic": "Vocabulary",
      "difficulty": "Medium",
      "explanation": "Glossary meaning from the unit."
    },
    {
      "question": "Where did Laura Dekker arrive on 21 January 2012?",
      "options": [
        "Panama",
        "New Zealand",
        "Cape Town",
        "St Maarten"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Reading - Sailing Solo",
      "difficulty": "Easy",
      "explanation": "She arrived at the Caribbean island of St Maarten."
    },
    {
      "question": "What happened when Laura was thirteen?",
      "options": [
        "She sailed solo from the Netherlands to England and back",
        "She left school",
        "She arrived in St Maarten",
        "She got lost in Panama"
      ],
      "correctIndex": 0,
      "correctAnswer": "A",
      "marks": 1,
      "topic": "Reading - Sailing Solo",
      "difficulty": "Medium",
      "explanation": "Stated in 'She was born to sail'."
    },
    {
      "question": "What is a storm jib?",
      "options": [
        "A cargo ship",
        "A type of fish",
        "A sail used in storms",
        "A school bag"
      ],
      "correctIndex": 2,
      "correctAnswer": "C",
      "marks": 1,
      "topic": "Reading - Sailing Solo",
      "difficulty": "Medium",
      "explanation": "The article says a storm jib is a sail used in storms."
    },
    {
      "question": "What did Laura mostly eat at sea?",
      "options": [
        "Pizza",
        "Cake",
        "Fish only",
        "Rice and pasta"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Reading - Sailing Solo",
      "difficulty": "Easy",
      "explanation": "She lived on rice and pasta."
    },
    {
      "question": "Which country did Hunter say he was from in his presentation?",
      "options": [
        "Germany",
        "France",
        "Ireland",
        "China"
      ],
      "correctIndex": 0,
      "correctAnswer": "A",
      "marks": 1,
      "topic": "Reading - Hunter's Interview",
      "difficulty": "Easy",
      "explanation": "He proudly answered Germany."
    },
    {
      "question": "What is a 'Schultuete'?",
      "options": [
        "A German festival",
        "A kind of boat",
        "A school bag",
        "A gift of sweets and school supplies on the first day of school"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Reading - Hunter's Interview",
      "difficulty": "Medium",
      "explanation": "From Hunter's grandparents' customs."
    },
    {
      "question": "The saying 'Home is where you hang your hat' means:",
      "options": [
        "You must hang a hat at home",
        "Home is far away",
        "Hats are made at home",
        "You can make a home wherever you live"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Reading - Hunter's Interview",
      "difficulty": "Medium",
      "explanation": "Stated in the interview."
    },
    {
      "question": "Which feature shows when a diary entry was written?",
      "options": [
        "The title",
        "The map",
        "The glossary",
        "The date"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Diary Writing",
      "difficulty": "Easy",
      "explanation": "Diaries start with the date."
    },
    {
      "question": "Which of these is an adverbial of time?",
      "options": [
        "cockroach",
        "The boat",
        "Just then",
        "rough"
      ],
      "correctIndex": 2,
      "correctAnswer": "C",
      "marks": 1,
      "topic": "Diary Writing",
      "difficulty": "Medium",
      "explanation": "Adverbials of time connect events."
    },
    {
      "question": "'I didn't sleep well because I was so nervous' shows:",
      "options": [
        "a map",
        "thoughts and feelings",
        "a biography",
        "only dates"
      ],
      "correctIndex": 1,
      "correctAnswer": "B",
      "marks": 1,
      "topic": "Diary Writing",
      "difficulty": "Medium",
      "explanation": "Diaries record feelings."
    },
    {
      "question": "Which tone suits a diary?",
      "options": [
        "Very formal",
        "Scientific",
        "Legal",
        "Informal and personal"
      ],
      "correctIndex": 3,
      "correctAnswer": "D",
      "marks": 1,
      "topic": "Diary Writing",
      "difficulty": "Easy",
      "explanation": "A diary is personal."
    },
    {
      "question": "Which tense do most diary entries use?",
      "options": [
        "No tense",
        "Future tense only",
        "Past tense",
        "Present tense only"
      ],
      "correctIndex": 2,
      "correctAnswer": "C",
      "marks": 1,
      "topic": "Diary Writing",
      "difficulty": "Easy",
      "explanation": "They record what has happened."
    }
  ]
});

  };
  function findTest(classValue, subjectValue) {
  var key = classValue + "_" + subjectValue;
  return TESTS[key] || null;
}
