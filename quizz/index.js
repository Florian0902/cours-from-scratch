class Question {
  constructor(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
  }
  isCorrectAnswer(choice) {
    return choice === this.answer;
  }
}

const questions = [
  new Question(
    "Quelle méthode Javascript permet de filtrer les éléments d'un tableau",
    ["indexOf()", "map()", "filter()", "reduce()"],
    "filter()"
  ),
  new Question(
    "Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau",
    ["isNaN()", "includes()", "findIndex()", "isOdd()"],
    "includes()"
  ),
  new Question(
    "Quelle méthode transforme du JSON en un objet Javascript ?",
    ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"],
    "JSON.parse()"
  ),
  new Question(
    "Quel objet Javascript permet d'arrondir à l'entier le plus proche",
    ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"],
    "Math.round()"
  ),
];

class Quizz {
  constructor(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
  }

  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  guess(answer) {
    if (this.getCurrentQuestion().isCorrectAnswer(answer)) {
      this.score++;
    }
    this.currentQuestionIndex++;
  }
  hasEnded() {
    return this.currentQuestionIndex === this.questions.length;
  }
}

// Quizz display
const display = {
  elementShown: function (id, text) {
    let element = document.getElementById(id);
    element.innerHTML = text;
  },

  question: function () {
    this.elementShown("question", quizz.getCurrentQuestion().text);
  },
  choices: function () {
    let choices = quizz.getCurrentQuestion().choices;

    guessHandler = (id, guess) => {
      document.getElementById(id).onclick = function () {
        quizz.guess(guess);
        quizzApp();
      };
    };
    // Affichage choix + prise en compte du choix
    for (let i = 0; i < choices.length; i++) {
      this.elementShown("choice" + i, choices[i]);
      guessHandler("guess" + i, choices[i]);
    }
  },

  progress: function () {
    this.elementShown(
      "progress",
      `Question ${quizz.currentQuestionIndex + 1} sur ${quizz.questions.length}`
    );
  },
  endQuizz: function () {
    let endQuizzHTML = `
    <h1>Quizz terminé !</h1>
    <h3>Votre score est de : ${quizz.score} / ${quizz.questions.length}</h3>
    `;
    this.elementShown("quiz", endQuizzHTML);
  },
};

// game Logic
quizzApp = () => {
  if (quizz.hasEnded()) {
    display.endQuizz();
  } else {
    display.question();
    display.choices();
    display.progress();
  }
};
//Creat quizz
let quizz = new Quizz(questions);
quizzApp();
