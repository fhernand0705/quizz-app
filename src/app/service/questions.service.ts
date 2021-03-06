import { Injectable } from '@angular/core';
import { gotQuestions } from '../questions';

@Injectable({
  providedIn: 'root'
})

export class QuestionsService {
  questions: any[] = gotQuestions;

  constructor() { }

  displayQuestions() {
    var quizContainer = document.getElementById("quiz");
    var output: any[] = [];

    //for each question...
    this.questions.forEach(
      (currentQuestion, questionNumber) => {
        var answers: string[] = [];

    //store answers and assign radio buttons
    for(var letter in currentQuestion.answers) {
       answers.push(
         `<ul>
            <li>
              <input type="radio" name="question${questionNumber}"
              value="${letter}">
              <span class="answer-box">${currentQuestion.answers[letter]}</span>
            </li>
         </ul>`
      );
    }
    //<span class="letter-box">${letter.toUpperCase()}</span>
      //store question and answers
      output.push(
          `<div class="slide">
              <div class="question">${currentQuestion.question.toUpperCase()}</div>
              <div class="answers">${answers.join(" ")}</div>
           </div>`
        );
      }
    );
      //print output string to the browser
      quizContainer.innerHTML = output.join(" ");
  }
}
