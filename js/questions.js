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
    "AZWAR.123",
    "ALIYAAN.123",
    "SALAR.123",
     "AYAN.123"
    // add one code per student
  ]
};
const TESTS = { 

  "4_mathematics": {
    title: "Class 4 — Mathematics",
    durationMinutes: 100,
    questions: [

      /* ===== Chapter 1: Whole Numbers (up to 100,000) ===== */
      { type: "mcq", question: "The number 45,678 is read as:", options: ["Four thousand, five hundred sixty-seven", "Forty-five thousand, six hundred seventy-eight", "Forty-five thousand, six hundred seven", "Four hundred fifty-six thousand, seventy-eight"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "In the number 72,935, the digit in the ten-thousands place is:", options: ["2", "7", "9", "3"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "In the number 58,214, the digit in the hundreds place is:", options: ["8", "1", "4", "2"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "The place value of 6 in 36,452 is:", options: ["6,000", "600", "60", "6"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "The expanded form of 40,000 + 3,000 + 500 + 20 + 1 is:", options: ["43,512", "34,521", "43,521", "4,3521"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "The expanded form of 82,407 is:", options: ["8,000 + 2,000 + 400 + 7", "80,000 + 2,000 + 400 + 0 + 7", "80,000 + 2,000 + 40 + 7", "8,000 + 24,000 + 7"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The number just before 60,000 is:", options: ["60,001", "59,999", "59,990", "60,000"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The number just after 99,999 is:", options: ["99,998", "100,000", "100,999", "10,000"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The largest 5-digit number is:", options: ["100,000", "90,000", "99,999", "99,000"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "The smallest 5-digit number is:", options: ["00,001", "10,000", "1,000", "11,111"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "How many thousands are there in 50,000?", options: ["5", "500", "50", "5,000"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "The Roman numeral for 40 is:", options: ["XL", "XXXX", "IL", "LX"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "The Roman numeral for 90 is:", options: ["LXL", "XC", "XL", "IC"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "50 in Roman numerals is:", options: ["X", "L", "C", "V"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The Hindu-Arabic numeral for the Roman numeral LXX is:", options: ["70", "60", "80", "20"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Which of these is an even number?", options: ["13,579", "24,680", "11,111", "99,999"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Which of these is an odd number?", options: ["24,680", "10,000", "37,451", "86,420"], correctIndex: 2, points: 1 },

      /* ===== Chapter 2: Comparing and Ordering Numbers ===== */
      { type: "mcq", question: "Which symbol means \"greater than\"?", options: [">", "<", "=", "≠"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "45,320 ______ 45,230 (fill in the correct symbol)", options: [">", "<", "=", "≠"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Which of these is correct?", options: ["67,891 < 67,189", "67,891 = 67,189", "67,189 > 67,891", "67,891 > 67,189"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "The ascending order of 3,245, 2,345, 4,235 and 3,425 is:", options: ["4,235, 3,425, 3,245, 2,345", "2,345, 3,425, 3,245, 4,235", "3,245, 2,345, 4,235, 3,425", "2,345, 3,245, 3,425, 4,235"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "The descending order of 8,120, 8,210, 8,012 and 8,201 is:", options: ["8,012, 8,120, 8,201, 8,210", "8,210, 8,120, 8,201, 8,012", "8,210, 8,201, 8,120, 8,012", "8,012, 8,201, 8,120, 8,210"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which number is the greatest: 56,789, 65,789, 58,976 or 65,798?", options: ["65,789", "58,976", "56,789", "65,798"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Which number is the smallest: 34,210, 32,410, 34,120 or 32,140?", options: ["32,410", "34,120", "32,140", "34,210"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Arranging numbers from smallest to largest is called:", options: ["Descending order", "Random order", "Ascending order", "Reverse order"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Arranging numbers from largest to smallest is called:", options: ["Descending order", "Ascending order", "Natural order", "Forward order"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Which symbol means \"less than\"?", options: [">", "=", "<", "≠"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "9,999 ______ 10,000 (fill in the correct symbol)", options: ["<", ">", "=", "≠"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Which of the following numbers lies between 25,000 and 26,000?", options: ["25,500", "24,999", "26,100", "20,500"], correctIndex: 0, points: 1 },

      /* ===== Chapter 3: Factors and Multiples (Prime and Composite Numbers) ===== */
      { type: "mcq", question: "The factors of 12 are:", options: ["1, 2, 3, 4, 5, 12", "2, 3, 4, 6", "1, 2, 3, 4, 6, 12", "1, 12"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "The factors of 18 are:", options: ["1, 2, 3, 6, 18", "1, 2, 3, 6, 9, 18", "1, 3, 6, 9, 18", "2, 3, 6, 9"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The first five multiples of 4 are:", options: ["4, 8, 16, 20, 24", "4, 8, 12, 16, 20", "1, 2, 3, 4, 5", "4, 8, 12, 20, 24"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The first five multiples of 7 are:", options: ["7, 14, 28, 35, 42", "7, 17, 27, 37, 47", "7, 14, 21, 28, 35", "1, 7, 14, 21, 28"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "A prime number has exactly how many factors?", options: ["1", "3", "4", "2"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Which of these is a prime number?", options: ["13", "12", "15", "21"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Which of these is a composite number?", options: ["7", "11", "15", "13"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which of these is the smallest prime number?", options: ["0", "1", "2", "3"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Is 1 a prime number?", options: ["Yes, 1 is prime", "Yes, 1 is composite", "1 is both prime and composite", "No, 1 is neither prime nor composite"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Which of these numbers is prime?", options: ["16", "17", "18", "20"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Which of these numbers is composite?", options: ["23", "24", "29", "31"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The number that is a factor of every number is:", options: ["1", "0", "2", "10"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "The Highest Common Factor (HCF) of 12 and 18 is:", options: ["2", "3", "36", "6"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "The Lowest Common Multiple (LCM) of 4 and 6 is:", options: ["10", "24", "12", "2"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which of these pairs are both prime numbers?", options: ["5 and 11", "4 and 9", "6 and 8", "10 and 12"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "A number that has more than 2 factors is called:", options: ["A prime number", "An even number", "An odd number", "A composite number"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Which of these numbers is both even and composite?", options: ["7", "8", "9", "11"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The LCM of 3 and 5 is:", options: ["8", "10", "20", "15"], correctIndex: 3, points: 1 },

      /* ===== Chapter 4: Four Basic Operations ===== */
      { type: "mcq", question: "23,456 + 12,345 =", options: ["34,801", "35,701", "36,801", "35,801"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "45,678 − 23,456 =", options: ["22,222", "23,222", "21,222", "22,122"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "325 × 24 =", options: ["7,700", "7,900", "7,800", "6,800"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "4,536 ÷ 12 =", options: ["368", "378", "388", "478"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "12,345 + 6,789 =", options: ["18,134", "19,034", "19,134", "19,234"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "50,000 − 23,678 =", options: ["27,322", "26,222", "26,322", "25,322"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "216 × 15 =", options: ["3,140", "3,340", "2,340", "3,240"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "8,064 ÷ 8 =", options: ["1,008", "1,018", "1,080", "108"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "In addition, the numbers being added are called:", options: ["Addends", "Factors", "Quotients", "Dividends"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "In subtraction, the answer is called the:", options: ["Difference", "Sum", "Product", "Quotient"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "In multiplication, the answer is called the:", options: ["Sum", "Difference", "Quotient", "Product"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "In division, the number being divided is called the:", options: ["Divisor", "Quotient", "Remainder", "Dividend"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "In division, the number we divide by is called the:", options: ["Divisor", "Dividend", "Quotient", "Remainder"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "36,842 + 14,158 =", options: ["50,000", "52,000", "51,100", "51,000"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "90,000 − 45,670 =", options: ["44,330", "45,330", "43,330", "44,430"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "48 × 125 =", options: ["5,900", "6,100", "6,500", "6,000"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "9,996 ÷ 4 =", options: ["2,489", "2,599", "2,409", "2,499"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Any number multiplied by 0 gives:", options: ["1", "The number itself", "10", "0"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Any number multiplied by 1 gives:", options: ["0", "1", "The number itself", "10 times the number"], correctIndex: 2, points: 1 },

      /* ===== Chapter 5: Fractions ===== */
      { type: "mcq", question: "In the fraction 5/8, the number 8 is called the:", options: ["Denominator", "Numerator", "Whole number", "Remainder"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "In the fraction 3/7, the number 3 is called the:", options: ["Denominator", "Numerator", "Whole number", "Factor"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "A fraction with a whole number and a proper fraction together, like 2 1/3, is called a:", options: ["Proper fraction", "Mixed number", "Improper fraction", "Unit fraction"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The mixed number 3 1/4 as an improper fraction is:", options: ["12/4", "13/4", "14/4", "10/4"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The improper fraction 11/3 as a mixed number is:", options: ["2 2/3", "3 1/3", "3 2/3", "4 1/3"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "1/4 + 2/4 =", options: ["2/8", "3/8", "1/2", "3/4"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "3/5 + 1/5 =", options: ["4/10", "4/5", "3/10", "2/5"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "5/6 − 2/6 =", options: ["3/12", "3/6 (or 1/2)", "7/6", "2/6"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "2 1/4 + 1 1/4 =", options: ["3 1/2", "3 2/8", "2 2/4", "4 1/4"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "3 1/2 − 1 1/2 =", options: ["2 1/2", "1", "1 1/2", "2"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "1/2 + 1/4 =", options: ["3/4", "2/6", "1/6", "2/4"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "7/8 − 3/8 =", options: ["4/16", "4/8 (or 1/2)", "10/8", "3/8"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "A fraction whose numerator is smaller than its denominator is called a:", options: ["Improper fraction", "Mixed number", "Proper fraction", "Unit fraction"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "A fraction whose numerator is equal to or greater than its denominator is called a:", options: ["Proper fraction", "Mixed number", "Improper fraction", "Whole number"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "The simplest form of 4/8 is:", options: ["2/4", "1/2", "4/8", "1/4"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The simplest form of 6/9 is:", options: ["3/6", "6/9", "2/3", "3/9"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "4 2/5 + 2 1/5 =", options: ["6 3/5", "6 2/5", "6 1/5", "7 3/5"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "5 3/4 − 2 1/4 =", options: ["3 2/4", "3 1/2", "3 1/4", "2 1/2"], correctIndex: 1, points: 1 },

      /* ===== Chapter 6: Angles ===== */
      { type: "mcq", question: "An angle is formed when two rays meet at a:", options: ["Straight line", "Circle", "Parallel line", "Common point (vertex)"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "The common point where two rays of an angle meet is called the:", options: ["Arm", "Base", "Centre", "Vertex"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "An angle that measures exactly 90° is called a:", options: ["Right angle", "Acute angle", "Obtuse angle", "Straight angle"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "An angle that measures less than 90° is called a:", options: ["Right angle", "Obtuse angle", "Reflex angle", "Acute angle"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "An angle that measures more than 90° but less than 180° is called a:", options: ["Obtuse angle", "Acute angle", "Right angle", "Straight angle"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "An angle that measures exactly 180° is called a:", options: ["Right angle", "Acute angle", "Reflex angle", "Straight angle"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "An angle that measures more than 180° but less than 360° is called a:", options: ["Obtuse angle", "Straight angle", "Reflex angle", "Acute angle"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Angles are measured using a:", options: ["Ruler", "Compass", "Protractor", "Set square"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Angles are measured in units called:", options: ["Degrees", "Metres", "Litres", "Grams"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "The sum of angles on a straight line is:", options: ["180°", "90°", "360°", "270°"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "If two angles on a straight line are 110° and x°, then x =", options: ["80°", "70°", "60°", "90°"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "A full turn (complete circle) measures:", options: ["180°", "90°", "360°", "270°"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which of these is an example of a right angle?", options: ["A slice of pizza", "A straight road", "A bent arm at a wide angle", "The corner of a square"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "An angle of 45° is a:", options: ["Obtuse angle", "Right angle", "Acute angle", "Reflex angle"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "An angle of 135° is a:", options: ["Acute angle", "Right angle", "Straight angle", "Obtuse angle"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "If one angle on a straight line is 65°, the other angle is:", options: ["125°", "115°", "105°", "135°"], correctIndex: 1, points: 1 },

    ],
  },
       
   
  "7_mathematics": {
    title: "Class 7 — Mathematics",
    durationMinutes: 90,
    questions: [

      /* ===== Chapter 1: Sets ===== */
      { type: "mcq", question: "B = {x | x is an even number, 2 ≤ x ≤ 10} in tabular form is:", options: ["{2, 4, 6, 8}", "{1, 2, 3, 4, 5}", "{2, 4, 6, 8, 10}", "{4, 6, 8, 10}"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "The set {1, 3, 5, 7, 9} in set-builder notation is:", options: ["{x | x is an even number, x ≤ 9}", "{x | x is an odd number, x ≤ 9}", "{x | x is a number, x ≤ 9}", "{x | x is a prime number, x ≤ 9}"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The set of days of the week starting with 'S' in tabular form is:", options: ["{Sunday, Monday}", "{Saturday, Tuesday}", "{Sunday, Saturday, Monday}", "{Sunday, Saturday}"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Which pair of sets is equivalent but not equal?", options: ["{1, 2, 3} and {3, 2, 1}", "{a, b, c} and {1, 2, 3}", "{a, b} and {a, b}", "{x, y} and {x, y, z}"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Two sets having exactly the same elements are called:", options: ["Equivalent sets", "Equal sets", "Disjoint sets", "Universal sets"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "If set X has 5 elements, the number of elements in its power set is:", options: ["25", "10", "32", "16"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "The power set of B = {a} is:", options: ["{a}", "{∅, {a}}", "{∅}", "{a, ∅, a}"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "A set with 2 elements has how many proper subsets?", options: ["4", "2", "3", "1"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "If P = {2, 3, 5} and Q = {3, 5, 7}, then P ∪ Q =", options: ["{3, 5}", "{2, 7}", "{2, 3, 5}", "{2, 3, 5, 7}"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "If P = {2, 3, 5} and Q = {3, 5, 7}, then P ∩ Q =", options: ["{2, 7}", "{2, 3, 5, 7}", "{3, 5}", "{2}"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "If P = {2, 3, 5} and Q = {3, 5, 7}, then P − Q =", options: ["{7}", "{2}", "{3, 5}", "{2, 3, 5, 7}"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Let U = {1,2,...,10} and B = {1, 3, 5, 7, 9}. Then B′ =", options: ["{1, 3, 5, 7, 9}", "{1, 2, 3}", "{2, 4, 6, 8, 10}", "{2, 4, 6}"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "If P = {2, 3, 5} and Q = {3, 5, 7}, then Q − P =", options: ["{2}", "{3, 5}", "{2, 7}", "{7}"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "The symbol ∈ means:", options: ["is an element of", "is a subset of", "is not an element of", "is equal to"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Which of these sets is an empty set?", options: ["{x | x is a month with 32 days}", "{x | x is a day of the week}", "{x | x is a vowel}", "{x | x is an even prime}"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "If two sets have no elements in common, they are called:", options: ["Equal sets", "Disjoint sets", "Overlapping sets", "Equivalent sets"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "If n(A) = 8, n(B) = 5 and n(A ∩ B) = 3, then n(A ∪ B) =", options: ["10", "13", "8", "5"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "For any set A and universal set U, A ∩ A′ =", options: ["∅", "A", "U", "A′"], correctIndex: 0, points: 1 },

      /* ===== Chapter 2: Rational Numbers ===== */
      { type: "mcq", question: "Which of these numbers is rational?", options: ["−4/9", "√3", "π", "√11"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "A number p/q is rational only if:", options: ["p and q are both zero", "p and q are integers and q ≠ 0", "q = 0", "p is a decimal"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Which of these is NOT rational?", options: ["0", "−7", "9/0", "3/5"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "1/4 + 1/6 =", options: ["2/10", "5/12", "1/10", "2/12"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "5/6 − 1/3 =", options: ["1/2", "4/3", "2/3", "4/6"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "3/5 × 2/7 =", options: ["6/35", "5/12", "6/12", "3/14"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "5/6 ÷ 5/12 =", options: ["2", "1/2", "25/72", "5/2"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "The additive inverse of 7/9 is:", options: ["9/7", "−7/9", "−9/7", "0"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The multiplicative inverse of −2/5 is:", options: ["2/5", "5/2", "−2/5", "−5/2"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Which statement is true?", options: ["3/5 < 1/2", "3/5 = 1/2", "3/5 > 1/2", "1/2 > 3/5"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "The descending order of 2/3, 1/2 and 3/4 is:", options: ["1/2, 2/3, 3/4", "2/3, 3/4, 1/2", "1/2, 3/4, 2/3", "3/4, 2/3, 1/2"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "−5/8 + 3/8 =", options: ["−8/8", "−1/4", "1/4", "−2/8"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "(−3/4) × (−8/9) =", options: ["2/3", "−2/3", "3/4", "−3/4"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "The simplest form of 20/24 is:", options: ["4/6", "10/12", "2/3", "5/6"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Which is smaller: −2/5 or −1/5?", options: ["−1/5", "They are equal", "Cannot be compared", "−2/5"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Which rational number lies between 1/3 and 2/3?", options: ["1/6", "5/6", "1", "1/2"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "The product of a non-zero rational number and its reciprocal is always:", options: ["0", "The number itself", "1", "−1"], correctIndex: 2, points: 1 },

      /* ===== Chapter 3: Decimals ===== */
      { type: "mcq", question: "0.45 as a fraction in simplest form is:", options: ["9/20", "45/10", "9/2", "4/5"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "0.875 as a fraction is:", options: ["8/7", "875/10", "7/8", "7/80"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "0.24 as a fraction in simplest form is:", options: ["6/25", "24/10", "12/50", "2/4"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "5/8 as a decimal is:", options: ["0.58", "0.625", "0.85", "0.625 recurring"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "9/25 as a decimal is:", options: ["0.36", "0.9", "0.63", "2.5"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "2/9 as a decimal is:", options: ["0.222... (recurring)", "0.29", "0.2 (terminating)", "0.22 (terminating)"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "0.5 × 0.8 = 0.8 × 0.5 is an example of:", options: ["Associative law of multiplication", "Commutative law of addition", "Distributive law", "Commutative law of multiplication"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "(0.2 + 0.3) + 0.4 = 0.2 + (0.3 + 0.4) is an example of:", options: ["Commutative law of addition", "Associative law of multiplication", "Multiplicative identity", "Associative law of addition"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "0.6 + 0.9 = 0.9 + 0.6 is an example of:", options: ["Commutative law of addition", "Associative law of addition", "Commutative law of multiplication", "Additive identity"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Which is smaller: 0.08 or 0.8?", options: ["0.8", "They are equal", "0.08", "Cannot be compared"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "The ascending order of 0.3, 0.03, 0.33 and 0.303 is:", options: ["0.3, 0.33, 0.303, 0.03", "0.33, 0.303, 0.3, 0.03", "0.03, 0.3, 0.303, 0.33", "0.03, 0.303, 0.33, 0.3"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "The descending order of 2.5, 2.05, 2.55 and 2.15 is:", options: ["2.05, 2.15, 2.5, 2.55", "2.55, 2.5, 2.15, 2.05", "2.5, 2.55, 2.15, 2.05", "2.55, 2.15, 2.5, 2.05"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "6.278 rounded to 2 decimal places is:", options: ["6.28", "6.27", "6.3", "6.20"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "9.46 rounded to the nearest tenth is:", options: ["9.4", "9", "9.46", "9.5"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "15.5 rounded to the nearest whole number is:", options: ["15", "15.5", "16", "14"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "0.0582 rounded to 3 decimal places is:", options: ["0.059", "0.05", "0.060", "0.058"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "0.4 × 0.6 =", options: ["2.4", "0.024", "0.24", "0.46"], correctIndex: 2, points: 1 },

      /* ===== Chapter 4: Rate, Ratio and Proportion ===== */
      { type: "mcq", question: "The simplest form of 20 : 25 is:", options: ["5 : 4", "10 : 15", "4 : 5", "2 : 3"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "The ratio 36 : 48 in simplest form is:", options: ["4 : 3", "9 : 12", "6 : 8", "3 : 4"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Rs 90 is divided between two people in the ratio 1 : 2. Their shares are:", options: ["Rs 30 and Rs 60", "Rs 45 and Rs 45", "Rs 20 and Rs 70", "Rs 40 and Rs 50"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "A cyclist covers 60 km in 4 hours. The speed is:", options: ["20 km/h", "240 km/h", "15 km/h", "12 km/h"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "A car moves at 80 km/h for 2.5 hours. The distance covered is:", options: ["160 km", "32 km", "200 km", "82.5 km"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "A train covers 180 km at 60 km/h. The time taken is:", options: ["3 hours", "2 hours", "4 hours", "120 hours"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "If 4 books cost Rs 320, then 7 books cost:", options: ["Rs 480", "Rs 640", "Rs 560", "Rs 1280"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "In inverse proportion, if one quantity doubles, the other:", options: ["Doubles too", "Stays the same", "Is halved", "Becomes zero"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "8 workers complete a wall in 15 days. How many days for 4 workers (same rate)?", options: ["30 days", "7.5 days", "60 days", "20 days"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "If two quantities are directly proportional and one triples, the other:", options: ["Is divided by 3", "Also triples", "Stays the same", "Is halved"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Find x in the proportion 4 : 7 = 12 : x.", options: ["18", "28", "21", "24"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Rs 450 is the cost of 9 kg of flour. The rate per kg is:", options: ["Rs 45", "Rs 55", "Rs 4050", "Rs 50"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "The ratio of 25 cm to 1 m in simplest form is:", options: ["1 : 25", "25 : 1", "1 : 4", "4 : 1"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "90 km/h expressed in m/s is:", options: ["90 m/s", "30 m/s", "15 m/s", "25 m/s"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "The ratio of 45 minutes to 1 hour is:", options: ["4 : 3", "45 : 1", "1 : 45", "3 : 4"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "12 kg of sugar cost Rs 1,440. What is the cost of 7 kg?", options: ["Rs 720", "Rs 960", "Rs 1,000", "Rs 840"], correctIndex: 3, points: 1 },

      /* ===== Chapter 5: Financial Arithmetic ===== */
      { type: "mcq", question: "Cost price = Rs 350 and selling price = Rs 420. The profit is:", options: ["Rs 50", "Rs 770", "Rs 70", "Rs 100"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Cost price = Rs 900 and selling price = Rs 750. The loss is:", options: ["Rs 150", "Rs 100", "Rs 1650", "Rs 50"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "An article bought for Rs 400 is sold for Rs 460. The profit percentage is:", options: ["15%", "20%", "10%", "6%"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "An article bought for Rs 600 is sold for Rs 540. The loss percentage is:", options: ["6%", "20%", "60%", "10%"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "The selling price of an article with cost price Rs 250 and profit 20% is:", options: ["Rs 270", "Rs 300", "Rs 50", "Rs 230"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The marked price of a fan is Rs 2000. If the discount is 10%, the discount amount is:", options: ["Rs 20", "Rs 200", "Rs 1800", "Rs 2200"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "A watch is marked at Rs 1500 with a discount of 20%. Its sale price is:", options: ["Rs 300", "Rs 1200", "Rs 1450", "Rs 1350"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Marked price = Rs 800 and sale price = Rs 680. The discount percentage is:", options: ["20%", "15%", "10%", "12%"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Zakat on savings of Rs 60,000 (at 2.5%) is:", options: ["Rs 150", "Rs 1,500", "Rs 6,000", "Rs 3,000"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Ushr on land watered by a well (using machinery) is:", options: ["10% of the produce", "2.5% of the produce", "20% of the produce", "5% of the produce"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "A field produces 800 kg of wheat and is watered by a well. The Ushr due (at 5%) is:", options: ["40 kg", "80 kg", "4 kg", "400 kg"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Income tax at 8% on a taxable income of Rs 50,000 is:", options: ["Rs 400", "Rs 4,000", "Rs 40,000", "Rs 5,800"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "GST is charged on:", options: ["Goods and services bought by consumers", "Only salaries", "Only exports", "Only savings"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "The price of an item is Rs 1,000. With GST of 15%, the total price is:", options: ["Rs 1,015", "Rs 1,150", "Rs 1,500", "Rs 1,100"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "An article is sold for Rs 2,400 at a profit of 20%. Its cost price is:", options: ["Rs 1,920", "Rs 2,880", "Rs 1,800", "Rs 2,000"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "A jacket marked Rs 2,000 is sold at a discount of Rs 300. The discount percentage is:", options: ["15%", "20%", "10%", "30%"], correctIndex: 0, points: 1 },

      /* ===== Chapter 6: Algebraic Polynomials ===== */
      { type: "mcq", question: "The nth term of a sequence is 4n − 1. Its 6th term is:", options: ["21", "23", "25", "19"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The nth term of the sequence 3, 6, 9, 12, ... is:", options: ["3n", "n + 3", "n²", "3n + 3"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "The nth term of the sequence 7, 10, 13, 16, ... is:", options: ["3n + 7", "n + 7", "3n + 4", "7n"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "The coefficient of y³ in 6y³ is:", options: ["3", "−6", "1", "6"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Which pair are like terms?", options: ["7a²b and 7ab²", "3x and 3x²", "5pq and 5p", "7a²b and −3a²b"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "(4x + 3) + (3x + 6) =", options: ["7x + 18", "7x + 9", "12x + 9", "7x² + 9"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "(7y + 5) − (3y + 2) =", options: ["4y + 7", "10y + 7", "4y + 3", "4y − 3"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "(5a + 2b) + (3a − 4b) =", options: ["8a + 2b", "8a − 2b", "2a − 2b", "8a + 6b"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "5x × 6x =", options: ["11x", "30x²", "30x", "11x²"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "3x(x + 4) =", options: ["3x² + 12x", "3x² + 4", "x² + 12x", "3x + 12"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "(x + 4)(x + 1) =", options: ["x² + 4", "x² + 5x + 5", "2x + 5", "x² + 5x + 4"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "(a³)²=", options: ["a⁵", "a⁹", "a⁸", "a⁶"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "a⁵ × a²=", options: ["a¹⁰", "a³", "a⁷", "2a⁷"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "a⁹ ÷ a⁴ =", options: ["a¹³", "a²³⁶", "a¹", "a⁵"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "(3x²)² =", options: ["6x⁴", "3x⁴", "9x⁴", "9x²"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "If a ≠ 0, then (a²)⁰ =", options: ["0", "1", "a²", "a"], correctIndex: 1, points: 1 },

    ],
  },
         
};
  function findTest(classValue, subjectValue) {
  var key = classValue + "_" + subjectValue;
  return TESTS[key] || null;
}
