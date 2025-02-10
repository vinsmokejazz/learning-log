// Quiz data used in your app.
const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  // You can add more quiz questions here.
];

const questionCon = document.getElementById("questionCon");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const label4 = document.getElementById("label4");
const submitBtn = document.getElementById("submitBtn");

let currQuest = 0;
let score = 0;

// Display the current question and its options.
function display() {
  const currentData = quizData[currQuest];
  questionCon.textContent = currentData.question;
  label1.textContent = currentData.a;
  label2.textContent = currentData.b;
  label3.textContent = currentData.c;
  label4.textContent = currentData.d;
}

// Clear any previously selected radio option.
function clearSelection() {
  const radios = document.querySelectorAll("input[name='quizOptions']");
  radios.forEach((radio) => (radio.checked = false));
}

// Initially display the first question.
display();

submitBtn.addEventListener(
  "click",
  (handle = () => {
    // Ensure the user has selected an answer.
    const selectedAnswer = document.querySelector(
      'input[name="quizOptions"]:checked'
    );
    if (!selectedAnswer) {
      alert("Please select an answer");
      return; // Stop here if no answer is selected.
    }

    // Check if the selected answer is correct.
    const answer = selectedAnswer.value;
    const currentData = quizData[currQuest];
    if (answer === currentData.correct) {
      score++;
    }

    currQuest++;
    if (currQuest < quizData.length) {
      clearSelection();
      display();
    } else {
      //quiz over remove event
      submitBtn.removeEventListener("click", handle);

      // When the quiz is over, display the result.
      document.getElementById("quizContainer").innerHTML = `
      <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
    `;
      submitBtn.innerHTML = "Reload";
      submitBtn.addEventListener("click", () => {
        location.reload();
      });
    }
  })
);
