# PrepCrest Academy — Tutoring Website

A plain HTML/CSS/JS site for Hussain Bux Kunbhar: home page, about page,
educational material page, a timed auto-graded online test, and a contact
page. No build tools, no frameworks — open any file and edit it directly.

## 1. Add your photo

Save a photo as:

```
assets/images/hussain-profile.jpg
```

Recommended: square (1:1), at least 800x800 pixels, JPG or PNG, under
500KB. It's used on the Home and About pages. Until you add it, your
initials ("HK") show automatically instead of a broken image.

## 2. Connect Formspree so test results email you automatically

This is what lets the site send you every student's score without you
being online.

1. Go to **formspree.io** and sign up with `hussainbuxkunbhar444@gmail.com`.
2. Create a new form (call it "Online Test Results").
3. Formspree gives you an endpoint like `https://formspree.io/f/abcdwxyz`.
4. Open `js/quiz.js`, find this line near the top:
   ```js
   const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORMSPREE_ENDPOINT_HERE";
   ```
   and replace the placeholder with your real endpoint.
5. Take one test yourself to trigger the first submission — Formspree
   will email you a one-time confirmation link. Click it once.
6. From then on, every submitted test (including auto-submits when time
   runs out) emails you the student's name, class, subject, score, and a
   full answer-by-answer breakdown.

(Optional) Repeat the same steps for the contact form: create a second
Formspree form and paste its endpoint into `contact.html` where marked.

Formspree's free plan has a monthly submission limit; check their pricing
page if you expect a high volume of tests.

## 3. Add or edit tests

Open `js/questions.js`. Everything about what tests exist — classes,
subjects, questions, time limits — is in that one file, with instructions
in the comments at the top. You don't need to touch any other file to add
a new test.

If a student picks a class/subject combination that isn't in that file,
the site automatically shows "Test not available" — you don't need to
build that message yourself, just leave the combination out.

## 4. Add lesson material

Open `material.html`. Each lesson is a `<article class="lesson-card">`
block. Copy one, change the image path and the text, and it appears on
the Educational Material page. Recommended picture size: about 800x600
pixels (4:3), under 500KB.

## 5. Update your social links

Open `js/footer.js` and replace the LinkedIn and Facebook placeholder
URLs near the top with your real profile links. This one file controls
the footer on every page.

## 6. Deploy to GitHub Pages

1. Create a new GitHub repository and push all these files to it
   (keep the folder structure as-is — `css/`, `js/`, `assets/`, and the
   `.html` files all in the repo root).
2. In the repository, go to **Settings → Pages**.
3. Under "Build and deployment", set Source to **Deploy from a branch**,
   branch `main`, folder `/ (root)`.
4. Save. GitHub gives you a live URL (usually
   `https://<your-username>.github.io/<repo-name>/`) within a minute or
   two. That's the link you send to students and parents.

## File structure

```
index.html        Home page
about.html         About / bio page
test.html          Online test (selection, timer, grading, results)
material.html      Educational material / lessons
contact.html        Contact page
css/style.css       All styling
js/questions.js     Test bank — edit this to manage tests
js/quiz.js          Test engine (timer, grading, Formspree submission)
js/footer.js        Shared footer + social links
js/script.js        Shared nav behaviour + photo fallback
assets/images/       Your photo and lesson pictures go here
```
