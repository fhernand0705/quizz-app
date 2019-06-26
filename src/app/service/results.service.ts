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
      //access the answer selected
      var answerContainer = answerContainers[questionNumber];
      var selector = `input[name=question${questionNumber}]:checked`;
      var userAnswer = (<HTMLInputElement>answerContainer.querySelector(selector)).value;

      //evaluate answer
      if(userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        //if correct, add green
        (<HTMLElement>answerContainer).style.color = "lightgreen";
        (<HTMLElement>answerContainer).style.textShadow = "1px 1px black";
      } else {
        //else, add red
        (<HTMLElement>answerContainer).style.color = "red";
      }
  });

    //print results to the browser
    results.innerHTML = `${numCorrect} of ${gotQuestions.length}`;
 }


}
