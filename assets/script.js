// Variables to target elements in HTML
var quizSpace = document.querySelector(".quizSpace");
var quizStartBtn = document.querySelector("#startBtn");
// var quizAnswer = 
// var quizScore = 
// var highScores = 
var quizQuestions = [
    {
        Question: "Which kind of file do you typically use to style HTML?",
        A: ".js",
        B: ".css",
        C: ".jquery",
        answer: "B",
    },
    {
        Question: "What is HTML short for?",
        A: "Hypertext Mark-up Language",
        B: "Hypertext Made-up Language",
        C: "Hypertext Model Lingo",
        answer: "A",
    },
    {
        Question: "What development language is powered entirely by coffee?",
        A: "CSS",
        B: "python",
        C: "javascript",
        answer: "C",
    }        
]

var timerValue = 3;
var timerEl = document.querySelector("#timer");

// function start quiz? {}

quizStartBtn.addEventListener("click", function startTime(){
    console.log('Hello?');
    timerValue = 3;
    timerEl.textContent = "Time remaining: " + timerValue + " seconds";
        var timerInterval = setInterval(function() {
            timerValue--;
            timerEl.textContent = "Time remaining: " + timerValue + " seconds";
    
            if(timerValue <= 0) {
                clearInterval(timerInterval);
                console.log(timerValue);
            }
        }, 1000)
    }
);




// function right/wrong answer? {}
// + function to hidelast/shownext questions/answers
// + show "correct/wrong" indicator?

// function interval for timer? {}
// + include function for making timer = score


//