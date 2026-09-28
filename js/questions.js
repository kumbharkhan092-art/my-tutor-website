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
    "AZWAR-786",
    "ALIYAAN-786",
    "SALAR-786",
     "AYAN-786"
    // add one code per student
  ]
};
const TESTS = { 
//put the test code and the time code//
   

  "5_Islmiat": {
    title: "Class 5 — Islamiat",
    durationMinutes: 100,
    questions: [

      /* ===== Unit 1: Memorisation and Translation ===== */
      { type: "mcq", question: "Which surah tells us about Abu Lahab and his wife?", options: ["Surah Al-Nasr", "Surah Al-Alaq", "Surah Al-Lahab", "Surah Al-Muddassir"], correctIndex: 2, points: 1 },
      { type: "short", question: "How many ayahs (verses) does Surah Al-Nasr have? (write the number)", acceptableAnswers: ["3", "three"], points: 1 },
      { type: "mcq", question: "What is the name of the Sixth Kalima?", options: ["Kalima Tayyab", "Kalima Tamjeed", "Kalima Astaghfar", "Kalima Radd-e-Kufr"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Dua-e-Qunoot is recited in which prayer?", options: ["Fajr", "Witr", "Zuhr", "Maghrib"], correctIndex: 1, points: 1 },
      { type: "short", question: "Radd-e-Kufr is the ______ Kalima. (write the number in words)", acceptableAnswers: ["sixth", "6th", "6"], points: 1 },
      { type: "mcq", question: "Which foot should we put first when entering a mosque?", options: ["Left foot", "Either foot", "Right foot", "Both feet together"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which foot should we put first when leaving a mosque?", options: ["Left foot", "Right foot", "Either foot", "Both feet together"], correctIndex: 0, points: 1 },

      /* ===== Unit 2: Allah ===== */
      { type: "mcq", question: "How many beautiful names does Allah have?", options: ["33", "66", "99", "100"], correctIndex: 2, points: 1 },
      { type: "short", question: "The beautiful names of Allah are called Asma-e-______.", acceptableAnswers: ["ilahi", "ilaahi"], points: 1 },
      { type: "mcq", question: "The first Kalima shows our belief in Allah and in Hazrat Muhammad (PBUH) as His ______ messenger.", options: ["first", "last", "only", "oldest"], correctIndex: 1, points: 1 },
      { type: "short", question: "Khatam-an-Nabiyeen means the ______ of the Prophets. (one word)", acceptableAnswers: ["last", "seal", "final"], points: 1 },
      { type: "mcq", question: "Allah is pleased with us when we call Him by:", options: ["Any name we like", "His beautiful names", "A nickname", "The names of people"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Why should we have complete faith in Allah?", options: ["Because He is our Creator and has power over everything", "Because our friends do", "Because it is a habit", "Because it is a school rule"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "How were Allah's teachings and guidance brought to us?", options: ["Through stars", "Through kings", "Through His prophets and messengers", "Through dreams of every person"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "The first Kalima is known as:", options: ["Kalima Shahadat", "Kalima Tayyab", "Kalima Tamjeed", "Kalima Tauheed"], correctIndex: 1, points: 1 },

      /* ===== Unit 3: Pillars of Islam ===== */
      { type: "mcq", question: "How many pillars of Islam are there?", options: ["Three", "Four", "Five", "Six"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which is the first pillar of Islam?", options: ["Salat", "Zakat", "Hajj", "Kalima (Shahadah)"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Which of these is NOT a pillar of Islam?", options: ["Roza", "Trade", "Zakat", "Hajj"], correctIndex: 1, points: 1 },
      { type: "short", question: "Namaz is also known as ______.", acceptableAnswers: ["salat", "salah", "salaat"], points: 1 },
      { type: "short", question: "Every Muslim must pray ______ times a day. (write the number in words)", acceptableAnswers: ["five", "5"], points: 1 },
      { type: "mcq", question: "Zakat teaches us to:", options: ["Save all our money", "Help the poor and needy", "Buy more things", "Travel abroad"], correctIndex: 1, points: 1 },
      { type: "short", question: "Zakat is a charity from the yearly ______ of a Muslim.", acceptableAnswers: ["savings", "saving"], points: 1 },
      { type: "mcq", question: "What does Roza teach us?", options: ["Laziness", "To eat more", "Patience and self-control", "To sleep early"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "In which month do Muslims keep the compulsory Roza (fast)?", options: ["Muharram", "Rajab", "Shawwal", "Ramazan"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "The call to prayer (azan) for which prayer is given after sunset?", options: ["Fajr", "Zuhr", "Maghrib", "Isha"], correctIndex: 2, points: 1 },
      { type: "short", question: "Hajj is compulsory ______ in a lifetime for a Muslim who is able to go. (one word)", acceptableAnswers: ["once", "one time", "one", "1", "once only"], points: 1 },
      { type: "mcq", question: "Which prayer is offered at dawn?", options: ["Fajr", "Asr", "Isha", "Zuhr"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "The call to prayer is called:", options: ["Wuzu", "Azan", "Sajda", "Dua"], correctIndex: 1, points: 1 },
      { type: "short", question: "Muslims from all over the world come to Makkah for ______.", acceptableAnswers: ["hajj", "haj"], points: 1 },

      /* ===== Unit 4: Iman, Articles of Faith ===== */
      { type: "mcq", question: "The last two articles of faith are life after death and:", options: ["Hajj", "Qadr (destiny)", "Zakat", "Salat"], correctIndex: 1, points: 1 },
      { type: "short", question: "Qadr means ______. (one word)", acceptableAnswers: ["destiny", "fate"], points: 1 },
      { type: "mcq", question: "Life after death is also called:", options: ["Dunya", "Risalat", "Akhirat", "Wahi"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Iman means:", options: ["Prayer", "Charity", "Fasting", "Faith (belief)"], correctIndex: 3, points: 1 },
      { type: "short", question: "The five articles of faith you already know plus the last two make ______ articles of faith in total. (write the number in words)", acceptableAnswers: ["seven", "7"], points: 1 },
      { type: "mcq", question: "Which of these is an article of faith?", options: ["Belief in angels", "Wearing white clothes", "Visiting Makkah every year", "Saving money"], correctIndex: 0, points: 1 },

      /* ===== Unit 5: Hazrat Muhammad (PBUH) — His Life and Risalat ===== */
      { type: "mcq", question: "Where was Hazrat Muhammad (PBUH) born?", options: ["Taif", "Makkah", "Madinah", "Abyssinia"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "As a young man, he had the reputation of being very:", options: ["Proud", "Rich and powerful", "Honest and trustworthy", "Angry"], correctIndex: 2, points: 1 },
      { type: "short", question: "The Arabs of those days had hundreds of stone ______ inside the Ka'aba.", acceptableAnswers: ["idols", "idol"], points: 1 },
      { type: "mcq", question: "The Arabs had forgotten the teachings of their forefather:", options: ["Hazrat Ibrahim", "Hazrat Moosa", "Hazrat Nuh", "Hazrat Isa"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "How did the Arabs of those days treat their women and slaves?", options: ["With great respect", "Very cruelly", "Like family", "Very generously"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Where did he go to think deeply about the state of his people?", options: ["Cave of Hira", "Mount Safa", "The Ka'aba", "Taif"], correctIndex: 0, points: 1 },
      { type: "short", question: "Hira was a ______ in a mountain just outside Makkah. (one word)", acceptableAnswers: ["cave"], points: 1 },
      { type: "mcq", question: "How old was Hazrat Muhammad (PBUH) when the angel first appeared to him in the cave of Hira?", options: ["25 years", "30 years", "40 years", "60 years"], correctIndex: 2, points: 1 },
      { type: "short", question: "In which month did the angel Jibreel first appear in the cave of Hira?", acceptableAnswers: ["ramazan", "ramadan", "ramzan"], points: 1 },
      { type: "mcq", question: "Which angel brought Wahi to Hazrat Muhammad (PBUH)?", options: ["Hazrat Mikail", "Hazrat Jibreel", "Hazrat Israfeel", "Hazrat Izraeel"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "What did the angel Jibreel ask Hazrat Muhammad (PBUH) to do?", options: ["To fast", "To leave Makkah", "To read", "To sleep"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "How many times did the angel embrace him closely and ask him to read?", options: ["Once", "Thrice (three times)", "Twice", "Five times"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The first Wahi was from which surah?", options: ["Al-Fatiha", "Al-Ikhlas", "Al-Muddassir", "Al-Alaq"], correctIndex: 3, points: 1 },
      { type: "short", question: "Surah Al-Alaq is chapter number ______ of the Holy Quran. (write the number)", acceptableAnswers: ["96", "ninety six", "ninety-six"], points: 1 },
      { type: "mcq", question: "According to Surah Al-Alaq, Allah created man from:", options: ["Clay", "A clot of blood", "Fire", "Light"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "When he reached home shivering and cold, what did he ask Bibi Khadija to do?", options: ["Call the Quraish", "Bring some food", "Take him to Taif", "Cover him with a blanket"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Who comforted him and said, \"Allah will never desert you\"?", options: ["Abu Talib", "Waraqa bin Naufil", "Bibi Khadija", "Hazrat Ali"], correctIndex: 2, points: 1 },
      { type: "short", question: "Bibi Khadija was the ______ of Hazrat Muhammad (PBUH).", acceptableAnswers: ["wife", "his wife"], points: 1 },
      { type: "mcq", question: "Waraqa bin Naufil was a pious Christian scholar who knew which books well?", options: ["Holy Quran", "Hadith books", "Zaboor only", "Injeel and Taurait"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Waraqa bin Naufil said this was the same angel who brought Allah's messages to which Rasool?", options: ["Hazrat Ibrahim", "Hazrat Moosa", "Hazrat Nuh", "Hazrat Yusuf"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The second Wahi was from which surah?", options: ["Surah Al-Muddassir", "Surah Al-Alaq", "Surah Al-Nasr", "Surah Al-Lahab"], correctIndex: 0, points: 1 },
      { type: "short", question: "Surah Al-Muddassir is chapter number ______ of the Holy Quran. (write the number)", acceptableAnswers: ["74", "seventy four", "seventy-four"], points: 1 },
      { type: "mcq", question: "In Surah Al-Muddassir, Allah told Hazrat Muhammad (PBUH) to:", options: ["Sleep more", "Stop preaching", "Arise and warn", "Leave Makkah"], correctIndex: 2, points: 1 },
      { type: "short", question: "Messages sent by Allah to His prophets are called ______. (one word)", acceptableAnswers: ["wahi", "revelation"], points: 1 },

      /* ===== Unit 6: Preaching Islam ===== */
      { type: "mcq", question: "At first, to whom did Hazrat Muhammad (PBUH) preach Islam?", options: ["Only the Quraish leaders", "His family and close friends", "Strangers in Taif", "Travellers and traders"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Who was his closest friend among the first people to accept Islam?", options: ["Hazrat Umar", "Hazrat Ali", "Hazrat Abu Bakr", "Hazrat Hamza"], correctIndex: 2, points: 1 },
      { type: "short", question: "Hazrat Ali was the young ______ of Hazrat Muhammad (PBUH).", acceptableAnswers: ["cousin"], points: 1 },
      { type: "mcq", question: "Hazrat Zaid bin Haris was his:", options: ["Uncle", "Slave", "Brother", "Neighbour"], correctIndex: 1, points: 1 },
      { type: "short", question: "Islam spread slowly and quietly for ______ years in Makkah. (write the number in words)", acceptableAnswers: ["three", "3"], points: 1 },
      { type: "mcq", question: "On top of which mount did he call the tribes of Quraish by their names?", options: ["Hira", "Safa", "Uhud", "Noor"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The Quraish knew him as:", options: ["The magician", "The poor", "Al-Sadiq (the truthful)", "The trader"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "He asked, \"Would you believe me if I said there was an army on the other side of this mountain?\" What did they reply?", options: ["No, never", "We will not listen", "We do not know", "Yes, we will"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "What did he tell the Quraish on the mount of Safa?", options: ["To fight the Makkans", "To give up idol worship and worship only One Allah", "To leave Makkah", "To give him gold"], correctIndex: 1, points: 1 },
      { type: "short", question: "Name the uncle who insulted him for waking the Quraish up early in the morning.", acceptableAnswers: ["abu lahab", "abu-lahab", "abulahab"], points: 1 },
      { type: "mcq", question: "At the dinner for his family, he invited them to:", options: ["Go to war", "Trade with Taif", "Accept Islam and give up the worship of stone idols", "Move to Abyssinia"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Who stood up at the dinner and offered to help, even though he was very young?", options: ["Hazrat Abu Bakr", "Hazrat Umar", "Hazrat Zaid", "Hazrat Ali"], correctIndex: 3, points: 1 },
      { type: "short", question: "Everyone laughed at Hazrat Ali, but he stood ______ and accepted Islam. (one word)", acceptableAnswers: ["firm"], points: 1 },
      { type: "mcq", question: "After three years, who ordered Hazrat Muhammad (PBUH) to preach Islam openly?", options: ["Abu Talib", "Allah", "The Quraish", "Hazrat Ali"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Why did the first Muslims offer their namaz secretly?", options: ["They were shy", "They were afraid", "They did not know how", "They were told to by Abu Lahab"], correctIndex: 1, points: 1 },

      /* ===== Unit 7: Opposition of the Quraish ===== */
      { type: "mcq", question: "Why were the Quraish annoyed by the new faith?", options: ["It was too hard", "It asked for money", "It came from Taif", "They saw it as an insult to their gods and religion"], correctIndex: 3, points: 1 },
      { type: "short", question: "The Quraish looked upon Islam as an ______ to their gods. (one word)", acceptableAnswers: ["insult"], points: 1 },
      { type: "mcq", question: "Which people welcomed the message of Allah?", options: ["Only the rich", "Only tribal leaders", "The poor, the weak and the slaves", "Only traders"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "What did Islam promise the poor and the weak?", options: ["Gold and silver", "Land and cattle", "Nothing", "A better, just life and reward after death"], correctIndex: 3, points: 1 },
      { type: "short", question: "Kafir women threw ______ at Hazrat Muhammad (PBUH).", acceptableAnswers: ["garbage", "rubbish"], points: 1 },
      { type: "short", question: "One kafir spread ______ in his way.", acceptableAnswers: ["thorns", "thorn"], points: 1 },
      { type: "mcq", question: "The Quraish tried to strangle him with a:", options: ["Rope", "Sheet of cloth", "Chain", "Belt"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "When their plans failed, to whom did the Quraish go, asking him to stop his nephew from preaching?", options: ["Hazrat Abu Bakr", "Abu Talib", "Hazrat Ali", "Waraqa bin Naufil"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "What did the Quraish offer him in return for giving up preaching?", options: ["A house in Taif", "Cattle", "Gold, silver and power", "Nothing"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "He said he would not give up preaching even if they placed the Sun in his right hand and the ______ in his left.", options: ["Moon", "Stars", "Earth", "Sea"], correctIndex: 0, points: 1 },
      { type: "short", question: "Abu Talib was the ______ of Hazrat Muhammad (PBUH).", acceptableAnswers: ["uncle"], points: 1 },
      { type: "mcq", question: "What did the Quraish call him when they wanted to stop people from listening to him?", options: ["Al-Sadiq", "A mad man and a magician", "A king", "A trader"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Who rushed to protect him when the kuffar attacked him from all sides near the Ka'aba?", options: ["Hazrat Umar", "Hazrat Hamza", "Hazrat Ali", "Hazrat Haris bin Abi Hala"], correctIndex: 3, points: 1 },
      { type: "short", question: "Hazrat Haris bin Abi Hala was ______ while protecting Hazrat Muhammad (PBUH). (one word)", acceptableAnswers: ["martyred", "martyr", "shaheed"], points: 1 },
      { type: "mcq", question: "How did the Prophet (PBUH) and his companions face great hardships?", options: ["With anger", "By running away", "Patiently and firmly", "By fighting back"], correctIndex: 2, points: 1 },
      { type: "short", question: "The message of Islam spread through the people who ______ to and from Makkah. (one word)", acceptableAnswers: ["travelled", "traveled"], points: 1 },

      /* ===== Units 8, 9, 10: Abyssinia, Boycott, Taif ===== */
      { type: "mcq", question: "To which land did Hazrat Muhammad (PBUH) order the Muslims to migrate?", options: ["Taif", "Abyssinia", "Madinah", "Yemen"], correctIndex: 1, points: 1 },
      { type: "short", question: "Najashi was the king of ______.", acceptableAnswers: ["abyssinia", "ethiopia"], points: 1 },
      { type: "mcq", question: "How did Najashi treat the Muslim delegation?", options: ["He sent them back to Makkah", "He welcomed and listened to them", "He put them in prison", "He ignored them"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The Quraish were dismayed when which two people accepted Islam?", options: ["Abu Lahab and Abu Talib", "Hazrat Ali and Hazrat Zaid", "Hazrat Umar and Hazrat Hamza", "Hazrat Abu Bakr and Hazrat Haris"], correctIndex: 2, points: 1 },
      { type: "short", question: "The boycott of the Muslims is described as Shib-e-Abi ______.", acceptableAnswers: ["talib"], points: 1 },
      { type: "mcq", question: "What does Aam-ul-Huzn mean?", options: ["Year of victory", "Year of peace", "Year of travel", "Year of sorrow"], correctIndex: 3, points: 1 },
      { type: "short", question: "After the opposition in Makkah grew worse, he decided to preach in ______.", acceptableAnswers: ["taif"], points: 1 },
      { type: "mcq", question: "Which two strong supporters of Hazrat Muhammad (PBUH) died in the Year of Sorrow?", options: ["Abu Bakr and Umar", "Abu Talib and Bibi Khadija", "Ali and Zaid", "Hamza and Haris"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "How did the people of Taif treat him?", options: ["Welcomed him with honour", "Gave him gold", "Stoned and injured him", "Made him their king"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Allah sent an angel to punish the people of Taif. What did Hazrat Muhammad (PBUH) do?", options: ["Ordered the punishment", "Cursed them", "Left silently", "Prayed that some future generation of Taif would accept Islam"], correctIndex: 3, points: 1 },

    ],
  },

   //math test class seven//
   
  "7_mathematics": {
    title: "Class 7 — Mathematics",
    durationMinutes: 125,
    questions: [

      /* ===== Chapter 1: Sets ===== */
      { type: "mcq", question: "A = {x | x is a natural number, x < 5}. In tabular form, A =", options: ["{1, 2, 3, 4}", "{1, 2, 3, 4, 5}", "{0, 1, 2, 3, 4}", "{2, 3, 4}"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "The set {2, 4, 6, 8, 10} in set-builder form is:", options: ["{x | x is an odd natural number, x ≤ 10}", "{x | x is a natural number, x ≤ 10}", "{x | x is an even natural number, x < 2}", "{x | x is an even natural number, x ≤ 10}"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "The set of vowels of the English alphabet in tabular form is:", options: ["{a, e, i, o}", "{a, e, i, o, u, y}", "{a, e, i, o, u}", "{e, i, o, u}"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which pair of sets is equal?", options: ["{1, 2, 3} and {1, 2, 4}", "{1, 2, 3} and {3, 2, 1}", "{1, 2} and {1, 2, 3}", "{a, b} and {a, b, c}"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The sets {a, b, c} and {1, 2, 3} are:", options: ["Equal sets", "Equivalent but not equal", "Empty sets", "Subsets of each other"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "If a set has 4 elements, how many subsets does it have?", options: ["16", "8", "4", "32"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "The power set of A = {1, 2} is:", options: ["{{1}, {2}}", "{∅, {1, 2}}", "{1, 2, ∅}", "{∅, {1}, {2}, {1, 2}}"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "How many proper subsets does a set with 3 elements have?", options: ["8", "6", "7", "3"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "If A = {1, 2, 3} and B = {3, 4, 5}, then A ∪ B =", options: ["{3}", "{1, 2}", "{1, 2, 3, 4, 5}", "{4, 5}"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "If A = {1, 2, 3} and B = {3, 4, 5}, then A ∩ B =", options: ["{1, 2}", "{3}", "{1, 2, 3, 4, 5}", "{4, 5}"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "If A = {1, 2, 3} and B = {3, 4, 5}, then A − B =", options: ["{1, 2}", "{3}", "{4, 5}", "{1, 2, 3, 4, 5}"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Let U = {1, 2, 3, ..., 10} and A = {2, 4, 6, 8, 10}. Then the complement of A, A′ =", options: ["{2, 4, 6, 8, 10}", "{1, 2, 3, 4, 5}", "{3, 5, 7, 9}", "{1, 3, 5, 7, 9}"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "If A = {1, 2, 3} and B = {3, 4, 5}, then B − A =", options: ["{1, 2}", "{3}", "{1, 2, 4, 5}", "{4, 5}"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "The symbol A ⊆ B means:", options: ["A is a superset of B only", "A and B are disjoint", "A is a subset of B", "A is not related to B"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which of the following is an empty set?", options: ["The set of even prime numbers", "The set of natural numbers less than 1", "The set of vowels in the word \"book\"", "The set of days in a week"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "If A ∩ B = ∅, then A and B are called:", options: ["Disjoint sets", "Equal sets", "Equivalent sets", "Overlapping sets"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "If n(A) = 5, n(B) = 6 and n(A ∩ B) = 2, then n(A ∪ B) =", options: ["9", "11", "13", "7"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "If U is the universal set and A′ is the complement of A, then A ∪ A′ =", options: ["A", "∅", "A′", "U"], correctIndex: 3, points: 1 },

      /* ===== Chapter 2: Rational Numbers ===== */
      { type: "mcq", question: "Which of the following is a rational number?", options: ["√2", "π", "5/7", "√7"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "A rational number is a number of the form p/q, where p and q are integers and:", options: ["q = 0", "q ≠ 0", "p = 0", "p ≠ 0"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Which of the following is NOT a rational number?", options: ["0/5", "7/0", "−3/4", "2"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "1/2 + 1/3 =", options: ["5/6", "2/5", "1/6", "2/6"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "3/4 − 1/2 =", options: ["2/2", "1/2", "2/4", "1/4"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "2/3 × 3/5 =", options: ["5/8", "6/8", "2/5", "1/5"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "3/4 ÷ 3/8 =", options: ["1/2", "9/32", "2", "3/2"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "The additive inverse of −5/7 is:", options: ["−7/5", "5/7", "7/5", "0"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The multiplicative inverse (reciprocal) of 3/8 is:", options: ["8/3", "−3/8", "3/8", "−8/3"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Which of the following is correct?", options: ["2/3 > 3/4", "2/3 = 3/4", "3/4 < 2/3", "2/3 < 3/4"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "The ascending order of 1/2, 1/3 and 1/4 is:", options: ["1/2, 1/3, 1/4", "1/3, 1/4, 1/2", "1/4, 1/2, 1/3", "1/4, 1/3, 1/2"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "−3/4 + 1/4 =", options: ["−1", "1/2", "−1/2", "−1/4"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "(−2/3) × (9/4) =", options: ["3/2", "−3/2", "−2/3", "−18/7"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The simplest form of 12/18 is:", options: ["2/3", "3/2", "6/9", "4/6"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Which is greater: −1/2 or −1/3?", options: ["−1/3", "−1/2", "They are equal", "They cannot be compared"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Which rational number lies between 1/4 and 1/2?", options: ["5/8", "1/8", "3/4", "3/8"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "The sum of a rational number and its additive inverse is:", options: ["1", "The number itself", "0", "−1"], correctIndex: 2, points: 1 },

      /* ===== Chapter 3: Decimals ===== */
      { type: "mcq", question: "0.75 as a fraction in simplest form is:", options: ["7/5", "3/4", "75/10", "4/3"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "0.125 as a fraction is:", options: ["1/4", "1/8", "1/5", "125/10"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "0.6 as a fraction in simplest form is:", options: ["3/5", "6/5", "2/3", "1/6"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "3/8 as a decimal is:", options: ["0.38", "0.83", "0.325", "0.375"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "7/20 as a decimal is:", options: ["0.7", "0.27", "0.35", "3.5"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "1/3 as a decimal is:", options: ["0.3 (terminating)", "0.13", "0.333... (recurring)", "0.33 (terminating)"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "0.2 + 0.7 = 0.7 + 0.2 is an example of:", options: ["Associative law of addition", "Commutative law of addition", "Commutative law of multiplication", "Additive identity"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "(0.1 + 0.2) + 0.3 = 0.1 + (0.2 + 0.3) is an example of:", options: ["Associative law of addition", "Commutative law of addition", "Associative law of multiplication", "Distributive law"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "0.4 × 0.5 = 0.5 × 0.4 is an example of:", options: ["Commutative law of addition", "Associative law of multiplication", "Multiplicative identity", "Commutative law of multiplication"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Which is greater: 0.45 or 0.5?", options: ["0.45", "Both are equal", "They cannot be compared", "0.5"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "The ascending order of 0.7, 0.07, 0.17 and 0.71 is:", options: ["0.7, 0.71, 0.07, 0.17", "0.71, 0.7, 0.17, 0.07", "0.07, 0.17, 0.7, 0.71", "0.07, 0.7, 0.17, 0.71"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "The descending order of 1.2, 1.02, 1.21 and 1.12 is:", options: ["1.02, 1.12, 1.2, 1.21", "1.21, 1.2, 1.12, 1.02", "1.2, 1.21, 1.12, 1.02", "1.21, 1.12, 1.2, 1.02"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "3.456 rounded to 2 decimal places is:", options: ["3.46", "3.45", "3.5", "3.40"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "7.84 rounded to the nearest tenth is:", options: ["7.8", "7.9", "8", "7.84"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "12.5 rounded to the nearest whole number is:", options: ["12", "12.5", "14", "13"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "0.0649 rounded to 3 decimal places is:", options: ["0.064", "0.06", "0.065", "0.070"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "0.3 × 0.2 =", options: ["0.6", "0.06", "0.006", "0.5"], correctIndex: 1, points: 1 },

      /* ===== Chapter 4: Rate, Ratio and Proportion ===== */
      { type: "mcq", question: "The simplest form of the ratio 12 : 18 is:", options: ["3 : 2", "2 : 3", "4 : 6", "6 : 9"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The ratio 15 : 25 in simplest form is:", options: ["3 : 5", "5 : 3", "15 : 25", "1 : 2"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "If Rs 60 is divided between two persons in the ratio 2 : 3, their shares are:", options: ["Rs 30 and Rs 30", "Rs 20 and Rs 40", "Rs 25 and Rs 35", "Rs 24 and Rs 36"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "A car travels 150 km in 3 hours. Its speed is:", options: ["45 km/h", "450 km/h", "50 km/h", "60 km/h"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "A bus moves at 60 km/h for 4 hours. The distance covered is:", options: ["15 km", "64 km", "240 km", "120 km"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "A train covers 120 km at 40 km/h. The time taken is:", options: ["4 hours", "3 hours", "2 hours", "80 hours"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "If 5 pens cost Rs 100, then 8 pens cost:", options: ["Rs 160", "Rs 125", "Rs 140", "Rs 200"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "If two quantities are in direct proportion, then when one increases the other:", options: ["Decreases", "Stays the same", "Becomes zero", "Increases"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "6 workers finish a job in 12 days. How many days will 12 workers take (same work rate)?", options: ["24 days", "12 days", "3 days", "6 days"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "In inverse proportion, when the speed increases, the time taken to cover a fixed distance:", options: ["Increases", "Stays the same", "Decreases", "Cannot be found"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Find x in the proportion 3 : 5 = 9 : x.", options: ["12", "15", "27", "10"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Rs 240 is the price of 6 kg of sugar. The rate per kg is:", options: ["Rs 40", "Rs 36", "Rs 46", "Rs 1440"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "The ratio of 50 cm to 2 m in simplest form is:", options: ["1 : 4", "25 : 1", "1 : 2", "50 : 2"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "72 km/h expressed in m/s is:", options: ["72 m/s", "25 m/s", "18 m/s", "20 m/s"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "The ratio of 1 hour to 30 minutes is:", options: ["1 : 2", "1 : 30", "2 : 1", "30 : 1"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "8 kg of rice cost Rs 960. What is the cost of 5 kg?", options: ["Rs 480", "Rs 600", "Rs 640", "Rs 720"], correctIndex: 1, points: 1 },

      /* ===== Chapter 5: Financial Arithmetic ===== */
      { type: "mcq", question: "Cost price = Rs 500 and selling price = Rs 600. The profit is:", options: ["Rs 50", "Rs 100", "Rs 1100", "Rs 200"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Cost price = Rs 800 and selling price = Rs 700. The loss is:", options: ["Rs 100", "Rs 50", "Rs 1500", "Rs 200"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "An article bought for Rs 200 is sold for Rs 250. The profit percentage is:", options: ["20%", "50%", "10%", "25%"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "An article bought for Rs 500 is sold for Rs 450. The loss percentage is:", options: ["5%", "15%", "10%", "50%"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "The selling price of an article with cost price Rs 400 and profit 10% is:", options: ["Rs 410", "Rs 40", "Rs 440", "Rs 360"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "The marked price of a bag is Rs 1000. If the discount is 15%, the discount amount is:", options: ["Rs 15", "Rs 150", "Rs 850", "Rs 1150"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "A shirt is marked at Rs 800 with a discount of 25%. Its sale price is:", options: ["Rs 600", "Rs 200", "Rs 775", "Rs 700"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Marked price = Rs 500 and sale price = Rs 400. The discount percentage is:", options: ["10%", "25%", "100%", "20%"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Zakat on savings of Rs 40,000 (at 2.5%) is:", options: ["Rs 100", "Rs 2,500", "Rs 4,000", "Rs 1,000"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Ushr on land watered by rain is:", options: ["2.5% of the produce", "5% of the produce", "10% of the produce", "20% of the produce"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "A field watered by rain produces 500 kg of wheat. The Ushr due (at 10%) is:", options: ["5 kg", "50 kg", "25 kg", "100 kg"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Income tax at 5% on a taxable income of Rs 80,000 is:", options: ["Rs 4,000", "Rs 400", "Rs 8,000", "Rs 40,000"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "GST stands for:", options: ["General Sales Tax", "Government Savings Tax", "General Salary Tax", "Grand Sales Total"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "The price of an item is Rs 500. With GST of 10%, the total price is:", options: ["Rs 510", "Rs 505", "Rs 450", "Rs 550"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "An article is sold for Rs 1,200 at a profit of 20%. Its cost price is:", options: ["Rs 960", "Rs 1,440", "Rs 1,000", "Rs 900"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "A shirt marked Rs 1,200 is sold at a discount of Rs 180. The discount percentage is:", options: ["18%", "15%", "12%", "10%"], correctIndex: 1, points: 1 },

      /* ===== Chapter 6: Algebraic Polynomials ===== */
      { type: "mcq", question: "The nth term of a sequence is 3n + 2. Its 5th term is:", options: ["15", "17", "13", "20"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The nth term of the sequence 2, 4, 6, 8, ... is:", options: ["2n", "n + 2", "n²", "2n + 2"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "The nth term of the sequence 5, 8, 11, 14, ... is:", options: ["3n + 5", "n + 3", "5n", "3n + 2"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "The coefficient of x² in −4x² is:", options: ["4", "2", "−4", "−2"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which pair are like terms?", options: ["3x and 5y", "2x² and 2x", "3x and 5x", "4xy and 4x"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "(3x + 2) + (2x + 5) =", options: ["5x + 10", "5x + 7", "6x + 7", "5x² + 7"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "(5x + 4) − (2x + 1) =", options: ["3x + 3", "3x + 5", "7x + 5", "3x − 3"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "(4a + 3b) + (2a − b) =", options: ["6a + 4b", "2a + 4b", "6a − 2b", "6a + 2b"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "3x × 4x =", options: ["7x", "12x", "7x²", "12x²"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "2x(x + 3) =", options: ["2x² + 3", "x² + 6x", "2x² + 6x", "2x + 6"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "(x + 2)(x + 3) =", options: ["x² + 6", "x² + 5x + 6", "x² + 5x + 5", "2x + 5"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "(a²)³ =", options: ["a⁶", "a⁵", "a⁸", "a⁹"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "a³ × a⁴ =", options: ["a⁷", "a¹²", "a¹", "2a⁷"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "a⁸ ÷ a⁵ =", options: ["a¹³", "a⁴⁰", "a¹", "a³"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "(2x³)² =", options: ["2x⁶", "4x⁵", "4x⁶", "4x⁹"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "a⁰ (where a ≠ 0) =", options: ["0", "1", "a", "−1"], correctIndex: 1, points: 1 },

    ],
  },
  function findTest(classValue, subjectValue) {
  var key = classValue + "_" + subjectValue;
  return TESTS[key] || null;
}
