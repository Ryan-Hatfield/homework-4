var questions = [
    //------Question 1
    {
        question: "The condition in an if / else statment is enclosed within _____.",
        answers: ["parentheses", "quotes", "curly brackets", "square brackets"],
        correctAnswer: "parentheses"
    },
     //------Question 2
    {
        question: "Arrays in JavaScript can be used to store_____.",
        answers: ["numers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above"
    },
     //------Question 3
    {
        question: "What javascipt method can we use to select an html element?",
        answers: ["document.queryselector()", "document.getElementById", "document.getElementChild", "Both 1 and 2"],
        correctAnswer: "Both 1 and 2"
    },
    //------Question 4
    {
        question: "A meta tag should be included inside the body of the html, true or false?",
        answers: ["true", "false"],
        correctAnswer: "false"
    },
    //------Question 5
    {
        question: "Which of these elements is not a semantic element in HTML?",
        answers: ["main", "nav", "div", "section"],
        correctAnswer: "div"
    }
];

//---Variables for Code Quiz.
var quizQuestions = questions;
var startBtn = document.querySelector("#startButton");
var timeEl = document.querySelector("#time");
var titleScreen = document.querySelector("#introduction");
var quizScreen = document.querySelector("#quiz-questions");
var responseEl = document.querySelector("#response");
var time = 75;
var timer;


