const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const qImg = document.getElementById("qImg");

const choiceA = document.getElementById("A");

const choiceB = document.getElementById("B");

const choiceC = document.getElementById("C");

const choiceD = document.getElementById("D");

const counter = document.getElementById("counter");

const timeGauge = document.getElementById("timeGauge");

const progress = document.getElementById("progress");

const scoreDiv = document.getElementById("scoreContainer");

var passwords = [
  {correct: "0",
  path: "Black Hole"},
  {correct: "1",
  path: "Neutron Star"},
  {correct: "2",
  path: "Black Dwarf"}
]

var answer = document.getElementById("...")

function checkPassword(answer){
  if (answer == passwords[0].correct) {
//     do sth
    setCookie1()
    
  } else if (answer == passwords[1].correct) {
//   do sth
    setCookie2()
  }
  else if (answer == passwords[2].correct) {
//     do sth
    setCookie3()
  }
  
  else{
    //do sth
    alert("Please input a different number")
  }
}

function setCookie1(){
  
}

var questions = [
  {
    question:
      "She is considered the 1st programmer by explaining how a specific engine could transition calculation to computation",

    imgSrc:
      "https://cdn.glitch.com/b34f70e3-6c66-4d44-821c-5e0bf97f0f00%2Fada%20lovelace.jpg?v=1593391461125",

    choiceA: "Ada Lovelace",

    choiceB: "Grace Hopper",

    choiceC: "Mary Keller",

    choiceD: "Michelle Obama",

    correct: "A"
  },
  {
    question: "A famous women in computing conference is named after her",

    imgSrc:
      "https://cdn.glitch.com/b34f70e3-6c66-4d44-821c-5e0bf97f0f00%2Fgrace%20hopper.jpg?v=1593391461360",

    choiceA: "Susan Trinh",

    choiceB: "Jane Juan",

    choiceC: "Grace Hopper",

    choiceD: "Ginni Rometty",

    correct: "C"
  },
  {
    question:
      "She developed and implemented code which led to the development of the battery’s used in hybrid cars",

    imgSrc:
      "https://cdn.glitch.com/b34f70e3-6c66-4d44-821c-5e0bf97f0f00%2Fannie%20hybrid.jpg?v=1593391461238",

    choiceA: "Grace Hopper",

    choiceB: "Annie Easley",

    choiceC: "Betsy Ancker",

    choiceD: "Katherine Johnson",

    correct: "B"
  },
  {
    question:
      "She is the first woman and Asian elected as a Texas Instruments Senior Fellow",
    imgSrc:
      "https://cdn.glitch.com/b34f70e3-6c66-4d44-821c-5e0bf97f0f00%2FDuy-Loan%20Le.jpg?v=1593393028229",

    choiceA: "Andrea Yang",
    choiceB: "Mary Jane",
    choiceC: "Duy-Loan Le",
    choiceD: "Huyen Nguyen",

    correct: "C"
  },
  {
    question:
      "She is an actress and inventor who pioneered the technology that formed the basis for today's WiFi, GPS, and Bluetooth communication systems",
    imgSrc:
      "https://cdn.glitch.com/b34f70e3-6c66-4d44-821c-5e0bf97f0f00%2Fhedy%20lamarr.jpg?v=1593393028359",

    choiceA: "Hedy Lamarr",
    choiceB: "Carly Fiorina",
    choiceC: "Lynn Conway",
    choiceD: "Jacqueline Henry",

    correct: "A"
  }
];

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
const questionTime = 10; // 30s
let count = questionTime;
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  qImg.innerHTML = "<img src=" + q.imgSrc + ">";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;

}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
    var test
    test ++
    console.log(test)
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
//   renderCounter();
//   TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

// function renderCounter() {
//   if (count<= questionTime) {
//     counter.innerHTML = count;
//     timeGauge.style.width = count * gaugeUnit + "px";
//     //       count backward
//     count = count + 1;
//   } else {
//       count = 0;
//       answerIsWrong();

//       if(runningQuestion < lastQuestion){
//         runningQuestion++;
//         renderQuestion();
//     }else{
//         clearInterval(TIMER);
//         scoreRender();
//     }
    
//   }
// }



// checkAnwer

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    score++;
//     html HYPERLINK href="index1.html"
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    answerIsWrong();
  }
  // count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(TIMER);
    scoreRender();
  }
}

// answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "green";
}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender() {
  scoreDiv.style.display = "block";

  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round((100 * score) / questions.length);

  // choose the image based on the scorePerCent
//   let img =
//     scorePerCent >= 80
//       ? "img/5.png"
//       : scorePerCent >= 60
//       ? "img/4.png"
//       : scorePerCent >= 40
//       ? "img/3.png"
//       : scorePerCent >= 20
//       ? "img/2.png"
//       : "img/1.png";

//   scoreDiv.innerHTML = "<img src=" + img + ">";
  scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";

}
