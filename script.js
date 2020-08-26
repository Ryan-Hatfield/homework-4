var questions = [
    //------Question 1
    {
        questionAsked: "The condition in an if / else statment is enclosed within _____.",
        answers: ["parentheses", "quotes", "curly brackets", "square brackets"],
        correctAnswer: "parentheses"
    },
     //------Question 2
    {
        questionAsked: "Arrays in JavaScript can be used to store_____.",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above"
    },
     //------Question 3
    {
        questionAsked: "What javascipt method can we use to select an html element?",
        answers: ["document.queryselector()", "document.getElementById", "document.getElementChild", "Both 1 and 2"],
        correctAnswer: "Both 1 and 2"
    },
    //------Question 4
    {
        questionAsked: "A meta tag should be included inside the body of the html, true or false?",
        answers: ["true", "false"],
        correctAnswer: "false"
    },
    //------Question 5
    {
        questionAsked: "Which of these elements is not a semantic element in HTML?",
        answers: ["main", "nav", "div", "section"],
        correctAnswer: "div"
    }
];

//---Variables for Code Quiz.
var userAnswers = document.querySelector("#answers");
var startBtn = document.querySelector("#startButton");
var timeEl = document.querySelector("#time");
var introductionScreen = document.querySelector("#introduction");
var questionsScreen = document.querySelector("#quiz-questions");
var responseEl = document.querySelector("#response");
var currentQuestionIndex = 0;
var time = 75;
var timer;
var hScore = document.querySelector("#high-score");
var scoreUser = document.querySelector("#userScore");
var initials = document.querySelector("#initials");
var submit = document.querySelector("#submit");
var highScoreLi = document.querySelector("#highScoreList");
var clear = document.querySelector("#clear-btn");




//---Function to start the timer and to show/hide the "main" elements in the HTML and start questions.
function startQuiz() {
    introductionScreen.setAttribute("class", "hide");
    questionsScreen.setAttribute("class", "show");
    timer = setInterval(countdown, 1000);
    timeEl.textContent = time;
    startQuestions();
  }
  function countdown() {
    time--;
    timeEl.textContent = time;
    if (time <= 0) {
      endQuiz();
    }
    
  }

//---Function to display the questions and create a button for each answer.
  function startQuestions() {
    var currentQuestion = questions[currentQuestionIndex];
    var questionAsked = document.querySelector("#question");
    questionAsked.textContent = currentQuestion.questionAsked;
    userAnswers.innerHTML = "";
    currentQuestion.answers.forEach(function(userResponse, i) {
      var answersEl = document.createElement("button");
      answersEl.setAttribute("class", "userResponse");
      answersEl.setAttribute("value", userResponse);
      answersEl.textContent = i + 1 + ". " + userResponse;
      answersEl.onclick = answerClick;
      userAnswers.appendChild(answersEl);
    });
  }

  //---Function to handle when the use selects an answer. If wrong the user will have time taken away.
  //---If the wrong answer is chosen the user has time taken away and has to answer correctly to move on to the next question.
  function answerClick() {
    if (this.value != questions[currentQuestionIndex].correctAnswer) {
      time -= 10;
      responseEl.textContent = "Wrong! Try again!";
    
    if (time < 0) {
        time = 0;
      } else if (this.value != questions[currentQuestionIndex].correctAnswer){
        currentQuestionIndex--;
      }

      timeEl.textContent = time;
    } else {
      responseEl.textContent = "Correct!";
    }

    responseEl.setAttribute("class", "response");
    setTimeout(function() {
      responseEl.setAttribute("class", "response hide");
    }, 1000);
  
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      endQuiz();
    } else {
      startQuestions();
    }
  }
//---Function to end the quiz and show the high-score screen.
  function endQuiz() {
    clearInterval(timer);
    questionsScreen.setAttribute("class", "hide");
    hScore.setAttribute("class", "show");
    scoreUser.textContent = time;
  }
  //---Functions to log scores into the high-scores page.
  function saveScore() {
    
    var initialText = initials.value.trim();

    if (initialText ===""){
      var savedScores =
        JSON.parse(window.localStorage.getItem("#highScoreList")) || [];
        
        var scoreOrderListItems = { User: initialText, Score: time
        };

      savedScores.push(scoreOrderListItems);
      window.localStorage.setItem("#highScoreList", JSON.stringify(savedScores));

    }
    window.location.href = "https://ryan-hatfield.github.io/homework-4/score.html";
    printHighScore();
  }


//--Function for printing scores.
  function printHighScore() {
    event.preventDefault();
    
    var printScore = JSON.parse(window.localStorage.getItem("#highScoreList")) || [];
    printScore.forEach(function () {
      var list = document.createElement("li");
    list.textContent= User.initialText + "-----" + Score.time;
    highScoreLi.appendChild(list);

    });

  }

//---Function to Clear Scores.
  function clearScores() {
    window.localStorage.removeItem("#highScoreList");
    window.location.reload();
    
  }


  
  startBtn.addEventListener("click", startQuiz);
  submit.addEventListener("click", saveScore);
  clear.addEventListener("click", clearScores);