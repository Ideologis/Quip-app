//create a quiz class
class Quiz{
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }
    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }
    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }
    isEnded(){
        return this.questionIndex === this.questions.length;
    }
}
// Create a question class
class Question{
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}
//Display question
function displayQuestion() {
    if (quiz.isEnded()){
        showScores();
    } else {
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getQuestionIndex().text;
       
        
        // show options
        let choices = quiz.getQuestionIndex().choices;
       

        for (let i = 0; i < choices.length; i++){
            let choiceElement = document.getElementById("choice" + i );
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
     }
};

// Guess function
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        displayQuestion();
    }
}
// show quiz progress
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = 
        `Question ${currentQuestionNumber} of ${quiz.questions.length}`
}
//show score
function showScores() {
    let quizEndHTML = 
    `   <h1>Quiz completed</h1>
        <h2 id ="score"> You scored:${quiz.score} 0f ${quiz.questions.length}</h2>
        <div class = "quiz-repeat">
        <a href = "index.html">Take Quiz Again</a>
        </div>
    `;
    let quizElement = document.getElementById("quiz");
    console.log(quizElement);
    quizElement.innerHTML = quizEndHTML;
}
// create quiz question
let questions = [
  new Question(
    "Which of this person is an ALTSCHOOL ASPIRANT admin?",
    ["Roddy(fairtrade)", "Curious", "Shammah", "Giy solutions"],
    "Roddy(fairtrade)"
  ),
  new Question(
    "Which of this person is the Learning buddies admin ?",
    ["Easycode", "Airsplech", "Pandora", "OG DMERLIN"],
    "Pandora"
  ),
  new Question(
    "Where is altschool Headquarters situated?",
    ["Kigali", "togo", "Lagos", "Nairobi"],
    "Kigali"
  ),
  new Question(
    "Who is the CEO of altschool ?",
    ["Adewale Yusuf", "Akaolisa. Olisa", "Aniekeme Abasi.", "Bashir Abara"],
    "Adewale Yusuf"
  ),
  new Question(
    "What is jerry surname?",
    ["Yusuf", "Ube", "Uke", "Tabitha"],
    "Uke"
  ),
];
let quiz = new Quiz(questions);
// display question
displayQuestion();

// add a count down
let time = 10;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
    let quizTimer = setInterval(function () {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            showScore();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min}:${sec}`;
        }
    },1000)
}
startCountdown();