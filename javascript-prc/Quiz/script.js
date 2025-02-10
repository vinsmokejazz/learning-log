//  use this quizData in your app.
export const quizData = [
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
  // you can add more quiz here
];

const questionCon = document.getElementById("questionCon");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3= document.getElementById("option3");
const option4=document.getElementById("option4");

let currQuest = 0;
function dispQuestion() {
  const questVal = quizData[currQuest].question;
  questionCon.textContent = questVal;
}

function dispOptions(){
  option1.textContent=quizData[currQuest].a;
}

document.getElementById("submitBtn").addEventListener("click", () => {
  currQuest++;
  if (currQuest < quizData.length) {
    dispQuestion();
    dispOptions();
  }
});
