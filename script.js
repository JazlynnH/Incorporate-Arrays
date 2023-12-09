// Create and Array of flash cards
  // Adding 5 questions for the quiz with the options and correct Answer to move foward.
  const QuizQuestions = [
    {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        correctAnswer: 'Paris',
    },
    {
        question: 'Which planet is known as the Red Planet?',
        options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 'Mars'
      },
      {
        question: 'What is the largest mammal in the world?',
        options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
        correctAnswer: 'Blue Whale'
      },
      {
        question: 'Who wrote "Romeo and Juliet"?',
        options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
        correctAnswer: 'William Shakespeare'
      },
      {
        question: 'What is the powerhouse of the cell?',
        options: ['Nucleus', 'Mitochondria', 'Endoplasmic Reticulum', 'Golgi Apparatus'],
        correctAnswer: 'Mitochondria'
      }
    ];

  //currentQuestions variable will allow the quiz to keep track
  let currentQuestion = 0;
  // Create a variable to keep track of quiz scoring
  let score = 0;
  // Adding this variable can intialize the currentCard which will signal for the code to know where the user is currently at.
  let currentCard = 0;

  //Function that will project these buttons with the labeled questions, options, and current score to be shown and acknowledged by the code.
  function displayQuestion() {
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    const scoreContainer = document.getElementById('score');
    //questions that will be shown on the cards
    questionContainer.textContent = QuizQuestions[currentQuestion].question;

    //options that are shown on the cards
    optionsContainer.innerHTML = '';
    QuizQuestions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    //score that will be shown once questions are answered
    scoreContainer.textContent = `Score: ${score}/${QuizQuestions.length}`;
  }
  //all three needed there seprate container in order for code to be organized and understood.

  //command for the displayQuestion function 
  displayQuestion();
    //function to check answer
    function checkAnswer(selectedIndex) {
        const correctIndex = QuizQuestions[currentQuestion].options.indexOf(QuizQuestions[currentQuestion].correctAnswer);
      
        // Check if the selected option is correct
        if (selectedIndex === correctIndex) {
          score++;
      
          // Move to the next question if it's correct
          moveToNextQuestion();
        } else {
          // Display a message for incorrect answers
          alert("Incorrect answer. Try again!");
        }
      }
      
    // Function to move to the next question
    function moveToNextQuestion() {
    // Move to the next question
    currentQuestion++;
  
    // Check if the quiz is complete
    if (currentQuestion === QuizQuestions.length) {
      // Check if all answers are correct to show confetti
      if (score === QuizQuestions.length)
  
      alert(`Quiz Complete! Your final score is ${score}/${QuizQuestions.length}`);
      resetQuiz();
    } else {
      // Display the next question
      displayQuestion();
    }
  }
  //this function resets the quiz once completed
  function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
  }

  //function to play kahoot quiz music
  function playBackgroundMusic() {
    const audio = document.getElementById('backgroundMusic');
    audio.play().catch(error => {
        // This will handle any error, such as logging it or displaying a message which I came across earlier
        console.error('Error playing audio:', error.message);
    });
  }

  // playBackgroundMusic function to the click event on the document body, I ran into errors with the music loading with the site but now it will load with a click
  document.body.addEventListener('click', playBackgroundMusic);

  // Call the function to play background music when the page loads
  window.onload = function() {
    // You can play the audio immediately when the page loads once you press a button
    playBackgroundMusic();
  };


    //adding a updated score text funtion that way the score can be seen once a user answers correctly
    function updateScoreText(){
        const scoreContainer = document.getElementById('score');
        //updating the text of the score container
        scoreContainer.textContent = `Score: ${score}/${QuizQuestions.length}`;
    }
    //Updating the score text
    updateScoreText();

    //This is the event listener for next button
    document.getElementById('next').addEventListener('click', function() {
      moveToNextQuestion();
  });


