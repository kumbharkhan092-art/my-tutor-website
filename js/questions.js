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
   
  function findTest(classValue, subjectValue) {
  var key = classValue + "_" + subjectValue;
  return TESTS[key] || null;
}
