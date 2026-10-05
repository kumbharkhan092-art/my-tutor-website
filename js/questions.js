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


  "5_mathematics": {
    title: "Class 5 — Mathematics",
    durationMinutes: 100,
    questions: [

      /* ===== Chapter 1: Whole Numbers (numbers to 10 lakhs, numbers to crores) ===== */
      { type: "mcq", question: "1 lakh is equal to:", options: ["10,000", "1,000,000", "100,000", "10,00,000"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "10 lakh is equal to:", options: ["1,000,000", "100,000", "10,000,000", "1,00,000"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "1 crore is equal to:", options: ["1,000,000", "100,000", "100,000,000", "10,000,000"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "In the Indian/Pakistani number system, 1 crore equals how many lakhs?", options: ["10 lakhs", "1,000 lakhs", "100 lakhs", "50 lakhs"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "The number 3,45,678 is read as:", options: ["Thirty-four lakh five thousand six hundred seventy-eight", "Three lakh four thousand five hundred sixty-seven", "Three lakh forty-five thousand six hundred seventy-eight", "Thirty-four thousand five hundred sixty-eight"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "The number 2,50,00,000 is read as:", options: ["Two lakh fifty thousand", "Twenty-five lakh", "Two crore five lakh", "Two crore fifty lakh"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "In 7,82,145, the digit in the lakhs place is:", options: ["8", "7", "2", "1"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "In 4,56,78,912, the digit in the crores place is:", options: ["5", "6", "9", "4"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "The place value of 9 in 9,45,678 is:", options: ["90,000", "9,00,000", "9,000", "9"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Which of these numbers is the greatest?", options: ["9,99,999", "12,34,567", "12,34,566", "1,23,456"], correctIndex: 1, points: 1 },

      /* ===== Chapter 2: Four Operations (multiply/divide by 10, 100, 1000; order of operations) ===== */
      { type: "mcq", question: "45 × 10 =", options: ["45", "4,500", "450", "405"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "45 × 100 =", options: ["450", "4,500", "45,000", "4,050"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "45 × 1000 =", options: ["45,000", "4,500", "450,000", "4,050"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "6,300 ÷ 10 =", options: ["63", "6,300", "630,000", "630"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "6,300 ÷ 100 =", options: ["63", "630", "6.3", "0.63"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "6,300 ÷ 1000 =", options: ["63", "630", "6.3", "0.63"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "236 × 20 =", options: ["472", "47,200", "4,620", "4,720"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "236 × 300 =", options: ["7,080", "70,800", "708,000", "70,080"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "4,800 ÷ 40 =", options: ["12", "1,200", "120", "480"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "9,000 ÷ 300 =", options: ["3", "300", "30", "900"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "In 8 + (5 × 2), which operation is done first?", options: ["Addition (8 + 5)", "Multiplication (5 × 2)", "It doesn't matter", "Division"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "8 + (5 × 2) =", options: ["26", "18", "13", "16"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "(12 − 4) × 3 =", options: ["36", "8", "20", "24"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "12 − 4 × 3 =", options: ["0", "24", "36", "8"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "(6 + 4) × (3 − 1) =", options: ["20", "14", "22", "16"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "20 ÷ (2 + 3) =", options: ["7", "10", "4", "15"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "A box has 10 rows of 100 pencils each. How many pencils are there?", options: ["100", "10,000", "1,000", "110"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "A factory makes 1000 toys a day. How many toys in 100 days?", options: ["10,000", "1,100", "1,000,000", "100,000"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "If 36 sweets are shared equally among 6 children, each child gets:", options: ["7 sweets", "5 sweets", "6 sweets", "30 sweets"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "A shop sells 25 shirts at Rs 400 each. The total sale, using brackets correctly, is:", options: ["25 + 400 = Rs 425", "400 ÷ 25 = Rs 16", "25 × 400 = Rs 10,000", "25 − 400 = −Rs 375"], correctIndex: 2, points: 1 },

      /* ===== Chapter 3: Fractions ===== */
      { type: "mcq", question: "3 divided by 4, written as a fraction, is:", options: ["4/3", "3 × 4", "4 − 3", "3/4"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "7 ÷ 2 as a fraction is:", options: ["2/7", "7/2", "7 × 2", "2 − 7"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "3/4 as a decimal is:", options: ["0.34", "0.75", "0.43", "0.7"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "1/5 as a decimal is:", options: ["0.5", "0.2", "0.15", "1.5"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "2 1/4 + 1 1/4 =", options: ["3 2/8", "2 2/4", "3 1/2", "4"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "3 2/5 + 1 1/5 =", options: ["4 3/5", "4 2/5", "5 3/5", "3 3/5"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "5 3/4 − 2 1/4 =", options: ["3 2/4", "3 1/4", "2 1/2", "3 1/2"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "4 1/3 − 1 2/3 =", options: ["3 2/3", "2 1/3", "2 2/3", "3 1/3"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "A proper fraction times a whole number: 2/5 × 10 =", options: ["4", "20", "4/50", "1/4"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "3/8 × 16 =", options: ["48", "3/128", "19", "6"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "An improper fraction times a whole number: 7/4 × 8 =", options: ["14", "56", "7/32", "1 3/4"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "5/3 × 6 =", options: ["30", "5/18", "10", "1 2/3"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Two proper fractions multiplied: 1/2 × 1/3 =", options: ["1/6", "2/5", "3/6", "1/5"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "2/3 × 3/4 =", options: ["5/7", "6/12", "1/2", "5/12"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Two improper fractions multiplied: 5/2 × 3/2 =", options: ["8/4", "15/2", "15/4", "8/2"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "7/3 × 4/3 =", options: ["11/6", "28/9", "28/3", "11/9"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "A mixed number times a whole number: 2 1/2 × 4 =", options: ["10", "8 1/2", "9", "2 4/2"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "1 1/3 × 3 =", options: ["3 1/3", "4 1/3", "4", "1 3/3"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "A proper fraction divided by a whole number: 1/2 ÷ 4 =", options: ["2", "1/6", "4/2", "1/8"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "3/4 ÷ 3 =", options: ["1/4", "9/4", "1/12", "3"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "A whole number divided by a proper fraction: 4 ÷ 1/2 =", options: ["2", "8", "4/2", "1/8"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "6 ÷ 1/3 =", options: ["2", "18", "1/18", "6/3"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "A proper fraction divided by a proper fraction: 1/2 ÷ 1/4 =", options: ["1/8", "4/2", "1/2", "2"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "2/3 ÷ 1/6 =", options: ["1/9", "2/18", "4", "12"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which fraction is the remainder when 7/8 is subtracted from 1 whole?", options: ["7/8", "1/8", "1", "8/7"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "A cake is cut into 8 equal slices. If 5 slices are eaten, what fraction is left?", options: ["5/8", "3/5", "3/8", "5/3"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "A ribbon is 3/4 m long. If 1/4 m is cut off, how much ribbon is left?", options: ["1/4 m", "1 m", "3/4 m", "1/2 m"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "A jug holds 2 1/2 litres. If 1 1/4 litres are poured out, how much is left?", options: ["1 1/2 litres", "1 1/4 litres", "1 litre", "3/4 litre"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Which is a correct way to convert 1/4 to a decimal?", options: ["Divide 4 by 1", "Multiply 1 by 4", "Divide 1 by 4", "Add 1 and 4"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "0.5 as a fraction in simplest form is:", options: ["1/2", "5/10 only", "1/5", "5/100"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "0.25 as a fraction in simplest form is:", options: ["25/100 only", "1/25", "2/5", "1/4"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "3/5 of 20 is:", options: ["15", "60", "4", "12"], correctIndex: 3, points: 1 },

      /* ===== Chapter 4: Volume ===== */
      { type: "mcq", question: "Volume is measured in:", options: ["Cubic units", "Square units", "Linear units", "Litres only"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "The volume of a shape built from unit cubes is found by:", options: ["Measuring only its length", "Counting the number of unit cubes", "Adding its sides", "Measuring its area"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "A shape is made of 24 unit cubes stacked together. Its volume is:", options: ["24 square units", "24 cubic units", "12 cubic units", "6 cubic units"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The unit used for volume measured in centimetres is:", options: ["Cubic centimetres (cm³)", "Square centimetres (cm²)", "Centimetres (cm)", "Millilitres only"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "The unit used for volume measured in metres is:", options: ["Square metres (m²)", "Cubic metres (m³)", "Metres (m)", "Litres only"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The formula for the volume of a cuboid is:", options: ["Length × Width", "Length × Width × Height", "2 × (Length + Width)", "Length + Width + Height"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The formula for the volume of a cube with side s is:", options: ["s × s", "4 × s", "6 × s", "s × s × s"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "A cuboid has length 5 cm, width 4 cm and height 3 cm. Its volume is:", options: ["12 cm³", "40 cm³", "60 cm³", "35 cm³"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "A cube has each side 4 cm. Its volume is:", options: ["16 cm³", "64 cm³", "12 cm³", "48 cm³"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "A cuboid has length 10 m, width 2 m and height 5 m. Its volume is:", options: ["100 m³", "17 m³", "50 m³", "20 m³"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "A cube has each side 6 m. Its volume is:", options: ["36 m³", "18 m³", "72 m³", "216 m³"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "A fish tank measuring 20 cm × 10 cm × 15 cm is filled with water. The volume of water is:", options: ["3,000 cm³", "45 cm³", "300 cm³", "600 cm³"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "A container holds liquid measuring 2 m × 1 m × 1 m. Its volume is:", options: ["4 m³", "1 m³", "3 m³", "2 m³"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "If the volume of a cuboid is 120 cm³ and its length and width are 6 cm and 4 cm, its height is:", options: ["10 cm", "5 cm", "24 cm", "20 cm"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "A box is twice as long, twice as wide and twice as high as a unit cube. Its volume compared to the unit cube is:", options: ["8 times as much", "2 times as much", "4 times as much", "6 times as much"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Which of these has the greatest volume: a cube of side 3 cm, a cuboid 2×2×6 cm, or a cuboid 1×1×30 cm?", options: ["A cube of side 3 cm", "They all have the same volume", "A cuboid 2×2×6 cm", "A cuboid 1×1×30 cm"], correctIndex: 3, points: 1 },

      /* ===== Chapter 5: Ratio ===== */
      { type: "mcq", question: "The ratio of 4 apples to 8 oranges in simplest form is:", options: ["4 : 8", "2 : 1", "1 : 2", "8 : 4"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "The ratio of 10 boys to 15 girls in simplest form is:", options: ["2 : 3", "10 : 15", "3 : 2", "5 : 10"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Which ratio is equivalent to 2 : 3?", options: ["3 : 2", "4 : 6", "2 : 4", "6 : 3"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Which ratio is equivalent to 5 : 4?", options: ["10 : 8", "4 : 5", "8 : 10", "5 : 8"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "The ratio 12 : 18 in simplest form is:", options: ["6 : 9", "3 : 2", "4 : 6", "2 : 3"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "A ratio compares two quantities by:", options: ["Addition", "Subtraction", "Division", "Multiplication only"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "If the ratio of red to blue balls is 3 : 5, and there are 15 blue balls, how many red balls are there?", options: ["25", "5", "9", "8"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "A recipe needs flour and sugar in the ratio 3 : 1. If 9 cups of flour are used, how many cups of sugar are needed?", options: ["3 cups", "9 cups", "1 cup", "27 cups"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "In a class, the ratio of boys to girls is 4 : 5. If there are 20 boys, how many girls are there?", options: ["25", "16", "20", "45"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Rs 100 is shared between two friends in the ratio 2 : 3. The first friend gets:", options: ["Rs 40", "Rs 50", "Rs 60", "Rs 20"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Rs 100 is shared between two friends in the ratio 2 : 3. The second friend gets:", options: ["Rs 40", "Rs 50", "Rs 60", "Rs 30"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "A bag has 6 red and 9 blue marbles. The ratio of red to total marbles is:", options: ["2 : 5", "6 : 9", "2 : 3", "9 : 6"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "The ratio 1 : 2 is the same as the fraction:", options: ["1/2 of the second quantity compared to it, written 1 : 2", "2 : 1", "1 : 1", "2 : 2"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Which of these ratios is NOT equivalent to 1 : 3?", options: ["2 : 6", "3 : 9", "4 : 12", "2 : 5"], correctIndex: 3, points: 1 },

      /* ===== Chapter 8: Properties of Triangles ===== */
      { type: "mcq", question: "A triangle with all three sides equal is called:", options: ["An isosceles triangle", "A scalene triangle", "A right-angled triangle", "An equilateral triangle"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "A triangle with exactly two sides equal is called:", options: ["An isosceles triangle", "An equilateral triangle", "A scalene triangle", "An obtuse triangle"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "A triangle with no sides equal is called:", options: ["An equilateral triangle", "An isosceles triangle", "An acute triangle", "A scalene triangle"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "A triangle with one angle equal to 90° is called:", options: ["An acute triangle", "A right-angled triangle", "An obtuse triangle", "An equilateral triangle"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "The sum of the three angles in any triangle is:", options: ["360°", "90°", "270°", "180°"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "An equilateral triangle has angles of:", options: ["90°, 45°, 45°", "60°, 60°, 50°", "90°, 60°, 30°", "60°, 60°, 60°"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "To draw a triangle, you need to know at least:", options: ["Only one side", "Only the colour", "Only its name", "Three measurements (such as sides or angles)"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Which tool is most useful for measuring and drawing angles of a triangle?", options: ["A ruler alone", "A protractor", "A pencil alone", "An eraser"], correctIndex: 1, points: 1 },

    ],
  },



  "7_english": {
    title: "Class 7 — English",
    durationMinutes: 60,
    questions: [

      /* ===== Pronouns ===== */
      { type: "mcq", question: "Choose the correct pronoun: '___ is my best friend.'", options: ["Her", "She", "Them", "Its"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Which word is a pronoun in this sentence: 'He gave the book to her.'", options: ["book", "gave", "to", "He"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Identify the possessive pronoun: 'This pen is ___.'", options: ["mine", "I", "me", "myself"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Choose the reflexive pronoun: 'She hurt ___ while playing.'", options: ["herself", "her", "hers", "she"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Which is a demonstrative pronoun? 'This is my book.'", options: ["my", "book", "This", "is"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Choose the correct pronoun: '___ are going to the market.'", options: ["Them", "They", "Their", "Theirs"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Which pronoun replaces 'Ali and Sara' correctly? 'Ali and Sara are playing.' → '___ are playing.'", options: ["He", "She", "It", "They"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Which is an interrogative pronoun?", options: ["He", "It", "They", "Who"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Choose the object pronoun: 'The teacher called ___ to the front.'", options: ["he", "his", "him", "himself"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Identify the relative pronoun: 'The boy who won the race is my cousin.'", options: ["who", "boy", "won", "race"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Choose the correct pronoun: 'The dog wagged ___ tail.'", options: ["it's", "their", "his", "its"], correctIndex: 3, points: 1 },

      /* ===== Abstract Nouns ===== */
      { type: "mcq", question: "Which of these is an abstract noun?", options: ["Honesty", "Table", "Dog", "River"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Choose the abstract noun from the options.", options: ["Chair", "Happiness", "Mountain", "Book"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Which word names a feeling or quality (abstract noun)?", options: ["Pencil", "Courage", "Garden", "Window"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Pick the abstract noun: 'Her ___ impressed everyone.'", options: ["basket", "shoes", "kindness", "clock"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which of these is NOT an abstract noun?", options: ["Bottle", "Freedom", "Joy", "Wisdom"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Choose the abstract noun formed from the adjective 'brave'.", options: ["braveness", "braver", "braved", "bravery"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Which word is an abstract noun?", options: ["Teacher", "Friendship", "Classroom", "Pencil"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Pick the abstract noun from the sentence: 'Her honesty was praised by all.'", options: ["her", "praised", "honesty", "all"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which is an abstract noun formed from 'child'?", options: ["childhood", "children", "childish", "childlike"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Choose the abstract noun: 'The team showed great ___ during the match.'", options: ["bat", "determination", "ground", "whistle"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Which of these words is an abstract noun?", options: ["Table", "Patience", "Shirt", "Bicycle"], correctIndex: 1, points: 1 },

      /* ===== Adjectives ===== */
      { type: "mcq", question: "Choose the adjective in this sentence: 'She has a beautiful garden.'", options: ["beautiful", "has", "garden", "She"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Which word describes the noun 'mountain' in 'the tall mountain'?", options: ["tall", "the", "mountain", "in"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Identify the adjective: 'He is a clever boy.'", options: ["He", "is", "boy", "clever"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Choose the comparative form of 'big'.", options: ["biggest", "more big", "bigger", "most big"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Choose the superlative form of 'happy'.", options: ["happier", "more happy", "happiest", "most happiest"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which word is an adjective of quantity?", options: ["many", "run", "quickly", "beautiful"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Choose the adjective in: 'This is an interesting story.'", options: ["interesting", "story", "This", "is"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Which adjective best completes: 'She bought ___ apples.'", options: ["quickly", "slowly", "five", "run"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Choose the demonstrative adjective: '___ book belongs to me.'", options: ["This", "He", "They", "She"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Identify the adjective describing size: 'A huge elephant walked by.'", options: ["walked", "by", "huge", "elephant"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which word is an adjective in: 'The old man smiled warmly.'", options: ["smiled", "warmly", "old", "man"], correctIndex: 2, points: 1 },

      /* ===== Adverbs ===== */
      { type: "mcq", question: "Choose the adverb in: 'She runs quickly.'", options: ["runs", "She", "fast girl", "quickly"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Which word tells us how an action is done in: 'He spoke softly.'", options: ["He", "softly", "spoke", "voice"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Choose the adverb of time: 'I will meet you ___.'", options: ["tomorrow", "happy", "quick", "slow"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Choose the adverb of place: 'The children played ___.'", options: ["happily", "quickly", "outside", "loudly"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which word is an adverb of frequency?", options: ["always", "happy", "bright", "loud"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Choose the adverb in: 'He finished his homework quickly.'", options: ["homework", "quickly", "finished", "his"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Identify the adverb: 'She sings beautifully.'", options: ["sings", "She", "song", "beautifully"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Choose the correct adverb form of 'careful'.", options: ["carefuly", "carefully", "carefulness", "care"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Which adverb completes: 'He ___ finishes his work on time.'", options: ["happy", "always", "careful", "slow"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Choose the adverb of manner in: 'The car moved slowly.'", options: ["car", "moved", "slowly", "The"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which word is an adverb in: 'They arrived late.'", options: ["arrived", "They", "time", "late"], correctIndex: 3, points: 1 },

      /* ===== Kinds of Sentences ===== */
      { type: "mcq", question: "'Please close the door.' is an example of a:", options: ["Interrogative sentence", "Imperative sentence", "Exclamatory sentence", "Declarative sentence"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "'What a beautiful day it is!' is an example of a:", options: ["Exclamatory sentence", "Imperative sentence", "Interrogative sentence", "Declarative sentence"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "'Where do you live?' is an example of a:", options: ["Interrogative sentence", "Declarative sentence", "Imperative sentence", "Exclamatory sentence"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "'The sun rises in the east.' is an example of a:", options: ["Interrogative sentence", "Imperative sentence", "Declarative sentence", "Exclamatory sentence"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which type of sentence gives a command or request?", options: ["Declarative sentence", "Interrogative sentence", "Imperative sentence", "Exclamatory sentence"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which type of sentence asks a question?", options: ["Declarative sentence", "Imperative sentence", "Interrogative sentence", "Exclamatory sentence"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which type of sentence expresses strong feeling?", options: ["Declarative sentence", "Interrogative sentence", "Imperative sentence", "Exclamatory sentence"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Which type of sentence simply makes a statement?", options: ["Interrogative sentence", "Declarative sentence", "Imperative sentence", "Exclamatory sentence"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "'Sit down immediately!' is an example of a:", options: ["Declarative sentence", "Imperative sentence", "Interrogative sentence", "Exclamatory sentence"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "'How amazing this view is!' is an example of a:", options: ["Declarative sentence", "Interrogative sentence", "Imperative sentence", "Exclamatory sentence"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "'Do you like mangoes?' is an example of a:", options: ["Imperative sentence", "Interrogative sentence", "Declarative sentence", "Exclamatory sentence"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "'I finished my homework before dinner.' is an example of a:", options: ["Imperative sentence", "Interrogative sentence", "Exclamatory sentence", "Declarative sentence"], correctIndex: 3, points: 1 },

      /* ===== Countable and Uncountable Nouns ===== */
      { type: "mcq", question: "Which of these is a countable noun?", options: ["Water", "Sugar", "Book", "Milk"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which of these is an uncountable noun?", options: ["Pen", "Chair", "Apple", "Rice"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Choose the correct sentence using a countable noun.", options: ["I have three water.", "I have three rice.", "I have three pencils.", "I have three milk."], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which word can be used with 'many'?", options: ["water", "books", "rice", "sugar"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Which word can be used with 'much'?", options: ["sugar", "books", "chairs", "pencils"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Which of these nouns is uncountable?", options: ["Table", "Student", "Bottle", "Information"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Choose the correct plural form of a countable noun.", options: ["waters", "sugars", "milks", "boxes"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Which sentence correctly uses an uncountable noun?", options: ["She drank some waters.", "She drank a water.", "She drank three waters.", "She drank some water."], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Which of these is countable?", options: ["Air", "Furniture", "Advice", "Chair"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Which of these is uncountable?", options: ["Table", "Chair", "Shelf", "Furniture"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Choose the correct quantifier for an uncountable noun: '___ advice did she give you?'", options: ["How many", "A few", "How much", "Several"], correctIndex: 2, points: 1 },

      /* ===== Homophones ===== */
      { type: "mcq", question: "Choose the correct homophone: 'I can ___ the sea from here.' (to look)", options: ["sea", "si", "cee", "see"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Choose the correct homophone: 'Please ___ the door.' (to close)", options: ["shutt", "shout", "shut", "short"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which pair of words are homophones?", options: ["Flower / Flowers", "Flour / Floury", "Flower / Floral", "Flower / Flour"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Choose the correct homophone: 'They went ___ the park.' (direction)", options: ["too", "to", "two", "tow"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Choose the correct homophone: 'I ate ___ apples.' (number)", options: ["to", "too", "two", "tutu"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which pair of words are homophones?", options: ["Write / Right", "Write / Writer", "Right / Rightly", "Write / Writes"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Choose the correct homophone: 'The ___ is shining brightly.' (star in sky)", options: ["sun", "son", "sin", "sum"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Which word is a homophone of 'hear'?", options: ["here", "hair", "hare", "heir"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Choose the correct homophone: 'He is the ___ of the house.' (male child)", options: ["sun", "sum", "sin", "son"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Which pair of words are homophones?", options: ["Meat / Meaty", "Meat / Meet", "Meet / Meeting", "Meat / Meats"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Choose the correct homophone: 'She wore a new ___.' (clothing item, sounds like 'pear')", options: ["pear", "pare", "pair", "peer"], correctIndex: 2, points: 1 },

      /* ===== Rhyme ===== */
      { type: "mcq", question: "Which word rhymes with 'cat'?", options: ["dog", "hat", "car", "sun"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Which word rhymes with 'light'?", options: ["lamp", "day", "night", "dark"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which word rhymes with 'tree'?", options: ["bee", "branch", "leaf", "wood"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Which word rhymes with 'cloud'?", options: ["sky", "rain", "loud", "wind"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which word rhymes with 'star'?", options: ["moon", "sky", "car", "sun"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which word rhymes with 'rain'?", options: ["cloud", "storm", "wet", "train"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Which word rhymes with 'blue'?", options: ["red", "true", "green", "color"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "What is it called when two or more words have the same ending sound?", options: ["Rhyme", "Repetition", "Rhythm", "Alliteration"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Which word rhymes with 'frog'?", options: ["cat", "fish", "dog", "bird"], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Which word rhymes with 'moon'?", options: ["sun", "star", "sky", "spoon"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Which word rhymes with 'king'?", options: ["ring", "crown", "throne", "royal"], correctIndex: 0, points: 1 },

      /* ===== Repetition ===== */
      { type: "mcq", question: "What is it called when a word or phrase is repeated for effect in a poem?", options: ["Rhyme", "Metaphor", "Simile", "Repetition"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Which line best shows repetition?", options: ["The sky is blue today.", "Run, run, run as fast as you can!", "She is very happy.", "He ate an apple."], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Repetition in poetry is mainly used to:", options: ["Emphasize an idea or feeling", "Confuse the reader", "End the poem", "Add new characters"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Which of these is an example of repetition?", options: ["The cat sat on the mat.", "She smiled brightly.", "It was raining heavily.", "Never give up, never give up!"], correctIndex: 3, points: 1 },
      { type: "mcq", question: "Why do poets use repetition?", options: ["To make the poem longer", "To create rhythm and emphasis", "To confuse the reader", "To avoid using adjectives"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Which sentence shows a repeated word for emphasis?", options: ["Bigger and bigger grew the tree.", "The tree grew tall.", "The tree was green.", "A tree stood there."], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Repetition of the first word in successive lines is sometimes called:", options: ["Rhyme", "Anaphora", "Alliteration", "Simile"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Which phrase uses repetition?", options: ["Quickly and quietly.", "Happy and sad.", "Little by little, step by step.", "Near and far."], correctIndex: 2, points: 1 },
      { type: "mcq", question: "Repeating a sound at the beginning of words (like 'Peter Picked') is called:", options: ["Alliteration", "Repetition", "Rhyme", "Rhythm"], correctIndex: 0, points: 1 },
      { type: "mcq", question: "Which of the following best defines repetition as a literary device?", options: ["Comparing two unlike things", "Repeating a word or phrase for emphasis", "Giving human qualities to objects", "Using words that imitate sounds"], correctIndex: 1, points: 1 },
      { type: "mcq", question: "Which line repeats a word to show strong emotion?", options: ["I will go there tomorrow.", "No, no, I will never go there!", "She went there yesterday.", "They are going there now."], correctIndex: 1, points: 1 },
    ],
  },
};
  function findTest(classValue, subjectValue) {
  var key = classValue + "_" + subjectValue;
  return TESTS[key] || null;
}
