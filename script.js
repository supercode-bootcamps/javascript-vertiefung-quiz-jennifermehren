// ======== Inhalte der Quizfragen als Objekte in einem Array =============

let data = [
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4a864049-816a-479e-8736-51740e8b724b.jpg",
    question: "Which ocean lies on the east coast of the United States?",
    choice: ["Atlantic", "Eastern", "Pacific", "Indian"],
    answer: "Atlantic",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/4d101ba1-9275-4fb5-ba2c-5606e6c0274e.jpg",
    question: "Which is the world's highest mountain?",
    choice: ["K2", "Makalu", "Mount Everest", "Kilimanjaro"],
    answer: "Mount Everest",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/07121a24-b34b-4711-9bfa-5287163e65ce.jpg",
    question: "Which of these cities is not in Europe?",
    choice: ["Prague", "Moscow", "Barcelona", "Reykjavik"],
    answer: "Moscow",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/467a486b-be3a-4183-90ed-dd6867d5852d.jpg",
    question: "True or False: Iceland is covered in ice.",
    choice: [true, false],
    answer: false,
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
    question: "The United Kingdom is comprised of how many countries?",
    choice: [1, 2, 3, 4],
    answer: 4,
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/ecf8af7b-8541-4572-b63b-ee7d7f9fc4cc.jpg",
    question: "Which of the following countries do not border France?",
    choice: ["Germany", "Netherlands", "Spain", "Italy"],
    answer: "Netherlands",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/6e99b817-7be7-4f8a-9146-3f602ac81fad.jpg",
    question: "Which U.S. state is the Grand Canyon located in?",
    choice: ["Wyoming", "Arizona", "New Mexico", "Nevada"],
    answer: "Arizona",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/866f119d-e5e2-45ca-846c-b6d10a59d1e4.jpg",
    question: "Which is the smallest country, measured by total land area?",
    choice: ["Maldives", "Monaco", "Vatican"],
    answer: "Vatican",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/13efaf72-d695-4f65-b043-2b805b6a88eb.jpg",
    question: "Which is the longest river in the world?",
    choice: ["Amazon River", "Congo River", "Yellow River", "Nile River"],
    answer: "Nile River",
  },
  {
    url:
      "https://cdn.playbuzz.com/cdn//f063e8fe-ad57-485e-8211-ed2ee0d9a205/1226f177-dc1a-4142-8875-bdaa177717d7.jpg",
    question: "Which is the largest body of water?",
    choice: ["indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Nile River"],
    answer: "Pacific Ocean",
  },
];

// ===== Definition Quiz-Objects für einzelne Bestandteile einer Quizfrage in Quizcontainer für HTML ===========
let quiz = {
  createQuizStart: function () {
    let startHead = document.createElement("h1");
    let quizInformation = document.createElement("p");
    let startQuizButton = document.createElement("button");

    startQuizButton.addEventListener("click", () => {
      quiz.clearQuiz();
      quiz.createQuiz(data[currentIndex]);
      setAnswerButtons();
    });

    startHead.innerHTML = "Quiz-Time!";
    startQuizButton.innerHTML = "Los geht's!";
    quizInformation.innerHTML =
      "Checke dein Allgemeinwissen und beantworte " +
      numbersOfQuestions +
      " Fragen";
    quizContainer.appendChild(startHead);
    quizContainer.appendChild(quizInformation);
    quizContainer.appendChild(startQuizButton);
    quizContainer.style.display = "grid";
    quizContainer.style.alignItems = "center";
  },

  createQuizEnd: function () {
    let endHead = document.createElement("h1");
    let endQuizButton = document.createElement("button");
    let finalInfo = document.createElement("p");

    endQuizButton.addEventListener("click", () => {
      quiz.clearQuiz();
      currentIndex = 0;
      quiz.createQuiz(data[currentIndex]);
      setAnswerButtons();
    });

    endHead.innerHTML = "Das war doch schon sehr gut.";
    endQuizButton.innerHTML = "Play Again";
    finalInfo.innerHTML = "Versuch es direkt nochmal";
    quizContainer.appendChild(endHead);
    quizContainer.appendChild(finalInfo);
    quizContainer.appendChild(endQuizButton);
    quizContainer.style.display = "grid";
    quizContainer.style.alignItems = "center";
  },

  createImage: function (url) {
    let image = document.createElement("img");
    image.src = url;
    image.classList.add("bild");
    quizContainer.appendChild(image);
  },

  createQuestionText: function (questionText) {
    let header = document.createElement("h2");
    header.innerHTML = questionText;
    quizContainer.appendChild(header);
  },

  showCorrectAnswer: function (correctAnswer) {
    let solution = document.createElement("p");
    solution.innerHTML = correctAnswer;
    quizContainer.appendChild(solution);
  },

  createAnswers: function (allAnswers) {
    for (let i = 0; i < allAnswers.length; i++) {
      let answerElement = document.createElement("button");
      let solution = document.querySelector("p");

      answerElement.innerHTML = allAnswers[i];
      quizContainer.appendChild(answerElement);

      if (answerElement.innerHTML == solution.innerHTML) {
        answerElement.classList.add("correctButton");
      } else {
        answerElement.classList.add("wrongButton");
      }
    }
  },

  createQuiz: function (question) {
    this.createQuestionText(question.question);
    this.createImage(question.url);
    this.showCorrectAnswer(question.answer);
    this.createAnswers(question.choice);
  },

  clearQuiz: function () {
    quizContainer.innerHTML = "";
  },

  firework: function () {
    this.clearQuiz();
    this.createImage("./animiertes-feuerwerk-bild-0012.gif");
    this.createQuestionText(
      "Das war richtig. Die nächste Frage kommt in 3..2..1.."
    );
  },
};

// ================ Allgemeine Variablen und Funktionen===========
let quizContainer = document.getElementById("content");
let numbersOfQuestions = data.length;
let currentIndex = 0;
let nextQuizElement = () => {
  currentIndex++;
  if (currentIndex < numbersOfQuestions) {
    quiz.createQuiz(data[currentIndex]);
  } else {
    quiz.createQuizEnd();
  }
};

// =======Willkommen im Quiz // Einfügen des ersten Inhalts ======

quiz.createQuizStart();

// =================== Antworten auswerten ======================

let correctButton = document.querySelector(".correctButton");
let wrongButton = document.querySelectorAll(".wrongButton");

let setAnswerButtons = (e) => {
  correctButton = document.querySelector(".correctButton");
  wrongButton = document.querySelectorAll(".wrongButton");

  if (correctButton && wrongButton.length > 0) {
    correctButton.addEventListener("click", setCorrectButton);
    setWrongButton(wrongButton);
  }
};
let setWrongButton = (e) => {
  e.forEach((button) => {
    button.addEventListener("click", (e) => {
      setTimeout(() => {
        alert("Das war leider nicht richtig. Versuche es doch nochmal.");
        button.style.display = "none";
      }, 300);
      button.style.background = "red";
    });
  });
};

let setCorrectButton = (e) => {
  e.preventDefault();
  quiz.firework();
  setTimeout(() => {
    quiz.clearQuiz();
    nextQuizElement();
    setAnswerButtons();
  }, 1000);
};
