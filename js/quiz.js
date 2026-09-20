/* ==========================================================================
   QUIZ ENGINE — timer, rendering, auto-grading, and result delivery.

   ------------------------------------------------------------------------
   FORMSPREE SETUP (do this once — takes about 2 minutes):
   1. Go to https://formspree.io and create a free account using
      hussainbuxkunbhar444@gmail.com
   2. Create a new form. Formspree gives you an endpoint that looks like:
         https://formspree.io/f/abcdwxyz
   3. Paste that endpoint below, replacing YOUR_FORMSPREE_ENDPOINT_HERE.
   4. Formspree will send you one confirmation email the first time a
      test result is submitted — click "Confirm" in that email once.
   After that, every completed test on this site emails its result
   straight to your inbox automatically. You do not need to be online.
   ------------------------------------------------------------------------ */

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xppwpzow";

/* ------------------------------------------------------------------------ */

var quizState = {
  test: null,
  className: "",
  subjectLabel: "",
  studentName: "",
  currentIndex: 0,
  answers: [],       // answers[i] = selected option index (mcq) or string (short)
  remainingSeconds: 0,
  timerHandle: null,
  submitted: false,
};

document.addEventListener("DOMContentLoaded", function () {
  var selectForm = document.getElementById("test-select-form");
  if (!selectForm) return; // not on the test page

  populateDropdown("select-class", CLASS_OPTIONS);
  populateDropdown("select-subject", SUBJECT_OPTIONS);

  selectForm.addEventListener("submit", function (e) {
    e.preventDefault();
    handleTestSelection();
  });

  var prevBtn = document.getElementById("btn-prev");
  var nextBtn = document.getElementById("btn-next");
  var submitBtn = document.getElementById("btn-submit");

  if (prevBtn) prevBtn.addEventListener("click", function () { goToQuestion(quizState.currentIndex - 1); });
  if (nextBtn) nextBtn.addEventListener("click", function () { goToQuestion(quizState.currentIndex + 1); });
  if (submitBtn) submitBtn.addEventListener("click", function () { submitTest(false); });

  // Basic deterrent against copy-pasting question text. Remove this block
  // if you don't want it.
  document.addEventListener("copy", function (e) {
    if (document.getElementById("quiz-panel") && !document.getElementById("quiz-panel").classList.contains("hidden")) {
      e.preventDefault();
    }
  });
});

function populateDropdown(id, options) {
  var select = document.getElementById(id);
  if (!select) return;
  options.forEach(function (opt) {
    var el = document.createElement("option");
    el.value = opt.value;
    el.textContent = opt.label;
    select.appendChild(el);
  });
}

function handleTestSelection() {
  var name = document.getElementById("select-name").value.trim();
  var classValue = document.getElementById("select-class").value;
  var subjectValue = document.getElementById("select-subject").value;
  var errorBox = document.getElementById("select-error");
  errorBox.classList.add("hidden");
  errorBox.textContent = "";

  if (!name || !classValue || !subjectValue) {
    errorBox.textContent = "Please fill in your name, class, and subject.";
    errorBox.classList.remove("hidden");
    return;
  }

  var test = findTest(classValue, subjectValue);
  if (!test) {
    var classLabel = labelFor(CLASS_OPTIONS, classValue);
    var subjectLabel = labelFor(SUBJECT_OPTIONS, subjectValue);
    errorBox.textContent =
      "Test not available for " + classLabel + " \u2014 " + subjectLabel +
      ". Please check with your tutor, or try a different subject.";
    errorBox.classList.remove("hidden");
    return;
  }

  quizState.test = test;
  quizState.className = labelFor(CLASS_OPTIONS, classValue);
  quizState.subjectLabel = labelFor(SUBJECT_OPTIONS, subjectValue);
  quizState.studentName = name;
  quizState.currentIndex = 0;
  quizState.answers = new Array(test.questions.length).fill(null);
  quizState.submitted = false;

  startTest();
}

function labelFor(options, value) {
  var match = options.filter(function (o) { return o.value === value; })[0];
  return match ? match.label : value;
}

function startTest() {
  document.getElementById("test-select-panel").classList.add("hidden");
  document.getElementById("results-panel").classList.add("hidden");
  document.getElementById("quiz-panel").classList.remove("hidden");

  document.getElementById("quiz-title").textContent = quizState.test.title;
  document.getElementById("quiz-student-name").textContent = quizState.studentName;

  quizState.remainingSeconds = quizState.test.durationMinutes * 60;
  startTimer();
  renderQuestion(0);
}

function startTimer() {
  updateTimerDisplay();
  quizState.timerHandle = setInterval(function () {
    quizState.remainingSeconds--;
    updateTimerDisplay();
    if (quizState.remainingSeconds <= 0) {
      submitTest(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  var timerEl = document.getElementById("timer");
  var mins = Math.floor(quizState.remainingSeconds / 60);
  var secs = quizState.remainingSeconds % 60;
  timerEl.textContent = (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;
  timerEl.classList.toggle("timer-low", quizState.remainingSeconds <= 60);
}

function renderQuestion(index) {
  var questions = quizState.test.questions;
  if (index < 0 || index >= questions.length) return;
  quizState.currentIndex = index;

  var q = questions[index];
  var container = document.getElementById("question-container");
  container.innerHTML = "";

  var block = document.createElement("div");
  block.className = "question-block";

  var num = document.createElement("div");
  num.className = "question-number";
  num.textContent = "Question " + (index + 1) + " of " + questions.length;
  block.appendChild(num);

  var qText = document.createElement("h3");
  qText.textContent = q.question;
  block.appendChild(qText);

  if (q.type === "mcq") {
    q.options.forEach(function (optionText, optIndex) {
      var row = document.createElement("label");
      row.className = "option-row";
      if (quizState.answers[index] === optIndex) row.classList.add("selected");

      var input = document.createElement("input");
      input.type = "radio";
      input.name = "q" + index;
      input.value = optIndex;
      input.checked = quizState.answers[index] === optIndex;
      input.addEventListener("change", function () {
        quizState.answers[index] = optIndex;
        renderQuestion(index);
      });

      var span = document.createElement("span");
      span.textContent = optionText;

      row.appendChild(input);
      row.appendChild(span);
      block.appendChild(row);
    });
  } else if (q.type === "short") {
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Type your answer here";
    input.value = quizState.answers[index] || "";
    input.addEventListener("input", function () {
      quizState.answers[index] = input.value;
    });
    block.appendChild(input);
  }

  container.appendChild(block);

  document.getElementById("btn-prev").disabled = index === 0;
  var isLast = index === questions.length - 1;
  document.getElementById("btn-next").classList.toggle("hidden", isLast);
  document.getElementById("btn-submit").classList.toggle("hidden", !isLast);

  var progressPct = ((index + 1) / questions.length) * 100;
  document.getElementById("progress-fill").style.width = progressPct + "%";
}

function goToQuestion(index) {
  renderQuestion(index);
}

function gradeTest() {
  var questions = quizState.test.questions;
  var totalPoints = 0;
  var earnedPoints = 0;
  var breakdown = [];

  questions.forEach(function (q, i) {
    totalPoints += q.points;
    var studentAnswer = quizState.answers[i];
    var isCorrect = false;
    var studentAnswerDisplay = "";

    if (q.type === "mcq") {
      isCorrect = studentAnswer === q.correctIndex;
      studentAnswerDisplay = (studentAnswer === null || studentAnswer === undefined)
        ? "(no answer)"
        : q.options[studentAnswer];
    } else if (q.type === "short") {
      var normalized = (studentAnswer || "").trim().toLowerCase();
      isCorrect = q.acceptableAnswers.some(function (accepted) {
        return accepted.trim().toLowerCase() === normalized;
      }) && normalized.length > 0;
      studentAnswerDisplay = studentAnswer ? studentAnswer : "(no answer)";
    }

    if (isCorrect) earnedPoints += q.points;

    breakdown.push({
      question: q.question,
      studentAnswer: studentAnswerDisplay,
      correctAnswer: q.type === "mcq" ? q.options[q.correctIndex] : q.acceptableAnswers[0],
      isCorrect: isCorrect,
    });
  });

  return {
    totalPoints: totalPoints,
    earnedPoints: earnedPoints,
    percentage: totalPoints > 0 ? Math.round((earnedPoints / totalPoints) * 100) : 0,
    breakdown: breakdown,
  };
}

function submitTest(isAutoSubmit) {
  if (quizState.submitted) return;
  quizState.submitted = true;
  clearInterval(quizState.timerHandle);

  var result = gradeTest();
  renderResults(result, isAutoSubmit);
  sendResultsToFormspree(result, isAutoSubmit);
}

function renderResults(result, isAutoSubmit) {
  document.getElementById("quiz-panel").classList.add("hidden");
  var panel = document.getElementById("results-panel");
  panel.classList.remove("hidden");
  panel.innerHTML = "";

  var wrap = document.createElement("div");

  var hero = document.createElement("div");
  hero.className = "score-hero";

  if (isAutoSubmit) {
    var autoNotice = document.createElement("p");
    autoNotice.className = "eyebrow-label";
    autoNotice.textContent = "Time's up \u2014 your test was submitted automatically.";
    hero.appendChild(autoNotice);
  }

  var ring = buildScoreRing(result.percentage);
  hero.appendChild(ring);

  var scoreLine = document.createElement("h2");
  scoreLine.textContent = result.earnedPoints + " / " + result.totalPoints + " correct";
  hero.appendChild(scoreLine);

  var meta = document.createElement("p");
  meta.style.color = "var(--slate)";
  meta.textContent = quizState.studentName + " \u2014 " + quizState.className + " \u2014 " + quizState.subjectLabel;
  hero.appendChild(meta);

  var sentNotice = document.createElement("div");
  sentNotice.className = "notice notice-success";
  sentNotice.textContent = "Your result has been sent to your tutor.";
  hero.appendChild(sentNotice);

  wrap.appendChild(hero);

  var reviewHeading = document.createElement("h3");
  reviewHeading.textContent = "Answer review";
  reviewHeading.style.marginTop = "36px";
  wrap.appendChild(reviewHeading);

  result.breakdown.forEach(function (item, i) {
    var row = document.createElement("div");
    row.className = "review-item " + (item.isCorrect ? "correct" : "incorrect");

    var tag = document.createElement("span");
    tag.className = "tag " + (item.isCorrect ? "tag-correct" : "tag-incorrect");
    tag.textContent = item.isCorrect ? "Correct" : "Incorrect";

    var qEl = document.createElement("p");
    qEl.style.fontWeight = "600";
    qEl.style.marginTop = "10px";
    qEl.textContent = (i + 1) + ". " + item.question;

    var ansEl = document.createElement("p");
    ansEl.style.margin = "4px 0";
    ansEl.textContent = "Your answer: " + item.studentAnswer;

    row.appendChild(tag);
    row.appendChild(qEl);
    row.appendChild(ansEl);

    if (!item.isCorrect) {
      var correctEl = document.createElement("p");
      correctEl.style.margin = "4px 0";
      correctEl.style.color = "var(--success)";
      correctEl.textContent = "Correct answer: " + item.correctAnswer;
      row.appendChild(correctEl);
    }

    wrap.appendChild(row);
  });

  var retakeLink = document.createElement("a");
  retakeLink.href = "test.html";
  retakeLink.className = "btn btn-outline";
  retakeLink.style.marginTop = "18px";
  retakeLink.textContent = "Take another test";
  wrap.appendChild(retakeLink);

  panel.appendChild(wrap);
  panel.scrollIntoView({ behavior: "smooth" });
}

function buildScoreRing(percentage) {
  var container = document.createElement("div");
  container.className = "score-ring";

  var radius = 70;
  var circumference = 2 * Math.PI * radius;
  var offset = circumference - (percentage / 100) * circumference;

  container.innerHTML =
    '<svg width="160" height="160" viewBox="0 0 160 160">' +
    '<circle cx="80" cy="80" r="' + radius + '" fill="none" stroke="#DEDACE" stroke-width="12" />' +
    '<circle cx="80" cy="80" r="' + radius + '" fill="none" stroke="#B98B32" stroke-width="12" ' +
    'stroke-dasharray="' + circumference + '" stroke-dashoffset="' + offset + '" stroke-linecap="round" />' +
    '</svg>' +
    '<div class="score-ring-value">' + percentage + '%</div>';

  return container;
}

function sendResultsToFormspree(result, isAutoSubmit) {
  if (FORMSPREE_ENDPOINT.indexOf("YOUR_FORMSPREE_ENDPOINT_HERE") !== -1) {
    console.warn("Formspree endpoint not configured yet — result was not emailed. See the setup note at the top of quiz.js.");
    return;
  }

  var answerSummary = result.breakdown.map(function (item, i) {
    return (i + 1) + ". " + item.question +
      "\n   Student answer: " + item.studentAnswer +
      "\n   Correct answer: " + item.correctAnswer +
      "\n   Result: " + (item.isCorrect ? "Correct" : "Incorrect");
  }).join("\n\n");

  var payload = {
    _subject: "Test result: " + quizState.studentName + " \u2014 " + quizState.test.title,
    student_name: quizState.studentName,
    class: quizState.className,
    subject: quizState.subjectLabel,
    score: result.earnedPoints + " / " + result.totalPoints,
    percentage: result.percentage + "%",
    auto_submitted: isAutoSubmit ? "Yes (time ran out)" : "No (submitted by student)",
    submitted_at: new Date().toLocaleString(),
    answer_breakdown: answerSummary,
  };

  fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  }).catch(function (err) {
    console.error("Could not send result to Formspree:", err);
  });
}
