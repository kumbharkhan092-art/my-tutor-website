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

const TESTS = { 

  "7_Science": {
    title: "Class 7 — Science",
    durationMinutes: 70,
    questions: [
      {
        type: "mcq",
        question: "Which gas do plants take in for photosynthesis?",
        options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "Which gas do plants release during photosynthesis?",
        options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Water vapour"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "Which pigment in leaves absorbs sunlight for photosynthesis?",
        options: ["Melanin", "Chlorophyll", "Haemoglobin", "Carotene"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "Photosynthesis mainly happens in which part of the plant?",
        options: ["Roots", "Leaves", "Stem", "Flowers"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "What substance builds up in leaves as a result of photosynthesis and can be tested for using iodine?",
        options: ["Sugar", "Starch", "Protein", "Fat"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "Which chemical is used to test a leaf for starch?",
        options: ["Iodine solution", "Limewater", "Litmus paper", "Universal indicator"],
        correctIndex: 0,
        points: 1,
      },
      {
        type: "mcq",
        question: "Which process releases energy from food using oxygen, in both plants and animals?",
        options: ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "Which mineral do plants need to make chlorophyll?",
        options: ["Nitrate", "Magnesium", "Phosphate", "Potassium"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "Which mineral do plants mainly need for healthy leaf and stem growth?",
        options: ["Nitrate", "Magnesium", "Calcium", "Sulphur"],
        correctIndex: 0,
        points: 1,
      },
      {
        type: "mcq",
        question: "What are fertilisers used for?",
        options: ["To kill pests", "To add nutrients to soil for plant growth", "To provide water to plants", "To test leaves for starch"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "Which plant tissue carries water and minerals from the roots to the leaves?",
        options: ["Phloem", "Xylem", "Cambium", "Epidermis"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "Which plant tissue carries food (sugars) made in the leaves to other parts of the plant?",
        options: ["Xylem", "Phloem", "Epidermis", "Root hair"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "What is the loss of water vapour from a plant's leaves called?",
        options: ["Respiration", "Transpiration", "Photosynthesis", "Germination"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "What are the three main particles found in an atom?",
        options: ["Protons, neutrons, electrons", "Protons, neutrons, ions", "Electrons, ions, molecules", "Molecules, atoms, ions"],
        correctIndex: 0,
        points: 1,
      },
      {
        type: "mcq",
        question: "Where are protons and neutrons found in an atom?",
        options: ["In the electron shells", "In the nucleus", "Outside the atom", "In the outer shell only"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "What is the charge of a proton?",
        options: ["Negative", "Positive", "Neutral", "It has no charge"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "What is the charge of an electron?",
        options: ["Positive", "Negative", "Neutral", "It varies"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "What is the charge of a neutron?",
        options: ["Positive", "Negative", "Neutral (no charge)", "It varies"],
        correctIndex: 2,
        points: 1,
      },
      {
        type: "mcq",
        question: "What does the atomic number of an element tell you?",
        options: ["The number of protons in an atom", "The number of neutrons in an atom", "The total mass of an atom", "The number of shells"],
        correctIndex: 0,
        points: 1,
      },
      {
        type: "mcq",
        question: "What is the mass number of an atom equal to?",
        options: ["Protons only", "Neutrons only", "Protons + neutrons", "Protons + electrons"],
        correctIndex: 2,
        points: 1,
      },
      {
        type: "mcq",
        question: "In a neutral atom, the number of electrons equals the number of:",
        options: ["Neutrons", "Protons", "Mass number", "Isotopes"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "Where are electrons found in an atom?",
        options: ["In the nucleus", "In shells around the nucleus", "Inside protons", "Inside neutrons"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "Which group of the periodic table contains the alkali metals?",
        options: ["Group 1", "Group 7", "Group 0", "Group 4"],
        correctIndex: 0,
        points: 1,
      },
      {
        type: "mcq",
        question: "How many outer-shell electrons do Group 1 elements have?",
        options: ["1", "2", "7", "8"],
        correctIndex: 0,
        points: 1,
      },
      {
        type: "mcq",
        question: "Atoms of the same element with different numbers of neutrons are called:",
        options: ["Ions", "Isotopes", "Molecules", "Compounds"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "What is an ion?",
        options: ["An atom that has gained or lost electrons", "An atom with no protons", "A molecule made of two atoms", "A type of chemical bond"],
        correctIndex: 0,
        points: 1,
      },
      {
        type: "mcq",
        question: "When a metal atom loses electrons, what kind of ion does it form?",
        options: ["Negative ion", "Positive ion", "Neutral atom", "Isotope"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "When a non-metal atom gains electrons, what kind of ion does it form?",
        options: ["Positive ion", "Negative ion", "Neutral atom", "Isotope"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "What type of bond forms when electrons transfer between a metal and a non-metal?",
        options: ["Covalent bond", "Ionic bond", "Metallic bond", "Hydrogen bond"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "What type of bond forms when two atoms share a pair of electrons?",
        options: ["Ionic bond", "Covalent bond", "Metallic bond", "Ionic lattice"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "Ionic compounds are usually formed between:",
        options: ["Two metals", "Two non-metals", "A metal and a non-metal", "Two noble gases"],
        correctIndex: 2,
        points: 1,
      },
      {
        type: "mcq",
        question: "Covalent bonds are usually formed between:",
        options: ["Two metals", "Two non-metals", "A metal and a non-metal", "A metal and an ion"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "Do ionic compounds generally have high or low melting points?",
        options: ["Very low", "High", "They don't melt", "Always below 0°C"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "What is the valency of an element?",
        options: ["Its atomic number", "The combining power of its atoms", "The number of neutrons it has", "Its mass number"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "Magnesium (valency 2) and chlorine (valency 1) combine to form magnesium chloride. What is its formula?",
        options: ["MgCl", "MgCl2", "Mg2Cl", "Mg2Cl2"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "What is diamond an example of?",
        options: ["An ionic compound", "A giant covalent structure", "A metal", "A mixture"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "Which of these is a giant covalent structure?",
        options: ["Water", "Diamond", "Table salt", "Oxygen gas"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "What force keeps the planets in orbit around the Sun?",
        options: ["Magnetic force", "Gravitational force", "Friction", "Electric force"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "What is an orbit?",
        options: ["The spin of a planet on its axis", "The path of one object around another due to gravity", "A straight-line path through space", "The distance between two planets"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "What causes day and night on Earth?",
        options: ["The Earth orbiting the Sun", "The Earth rotating on its axis", "The Moon blocking the Sun", "The Sun moving around the Earth"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "How long does it take the Earth to rotate once on its axis?",
        options: ["1 hour", "24 hours", "1 month", "1 year"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "How long does it take the Earth to orbit the Sun once?",
        options: ["24 hours", "1 month", "About 365 days", "10 years"],
        correctIndex: 2,
        points: 1,
      },
      {
        type: "mcq",
        question: "What causes the seasons on Earth?",
        options: ["The tilt of the Earth's axis", "The distance from the Sun changing daily", "The Moon's gravity", "The Earth spinning faster in summer"],
        correctIndex: 0,
        points: 1,
      },
      {
        type: "mcq",
        question: "Why does the Moon appear to shine?",
        options: ["It produces its own light", "It reflects light from the Sun", "It reflects light from Earth", "It is on fire"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "About how long does the Moon take to orbit the Earth?",
        options: ["1 day", "About 27–28 days", "1 year", "7 days"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "As the mass of an object increases, the gravitational force it exerts:",
        options: ["Decreases", "Increases", "Stays the same", "Becomes zero"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "Which two factors affect the strength of gravity between two objects?",
        options: ["Colour and size", "Mass and distance", "Temperature and speed", "Shape and texture"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "Which scientist is famous for his laws of gravity?",
        options: ["Albert Einstein", "Isaac Newton", "Charles Darwin", "Galileo Galilei"],
        correctIndex: 1,
        points: 1,
      },
      {
        type: "mcq",
        question: "What is the name of Earth's only natural satellite?",
        options: ["Mars", "The Sun", "The Moon", "Venus"],
        correctIndex: 2,
        points: 1,
      },
      {
        type: "mcq",
        question: "Which planet is closest to the Sun?",
        options: ["Earth", "Venus", "Mercury", "Mars"],
        correctIndex: 2,
        points: 1,
      },
    ],
  },

}
function findTest(classValue, subjectValue) {
  var key = classValue + "_" + subjectValue;
  return TESTS[key] || null;
}
