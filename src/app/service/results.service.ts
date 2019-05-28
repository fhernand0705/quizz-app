import { Injectable } from '@angular/core';
import { gotQuestions } from '../questions';

@Injectable({
  providedIn: 'root'
})

export class ResultsService {
  questions: any[] = gotQuestions;

  constructor() { }

  displayResult(): void {
    var quizContainer = document.getElementById('quiz');
    var answerContainers = quizContainer.querySelectorAll('.answers');
    var results = document.getElementById('quizResults');
    var numCorrect = 0;

    gotQuestions.forEach((currentQuestion,questionNumber) => {
      var answerContainer = answerContainers[questionNumber];
      var selector = `input[name=question${questionNumber}]:checked`;
      var userAnswer = (<HTMLInputElement>answerContainer.querySelector(selector)).value;

      if(userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        (<HTMLElement>answerContainer).style.color = "lightGreen";
      } else {
        (<HTMLElement>answerContainer).style.color = "red";
      }
  });

    results.innerHTML = `${numCorrect} of ${gotQuestions.length}`;
 }


}
