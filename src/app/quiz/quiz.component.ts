import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../service/questions.service';
import { ResultsService } from '../service/results.service';
import { PaginationService } from '../service/pagination.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})

export class QuizComponent implements OnInit {

  constructor(
    private questionsService: QuestionsService,
    private resultsService: ResultsService,
    private paginationService: PaginationService
  ) { }

  ngOnInit() {
    this.questionsService.displayQuestions();
    this.paginationService.displaySlide(0);
    this.paginationService.navBtns();
    this.submitQuiz();
    this.message();
  }

  message() {
    alert("WELCOME TO THE GAME OF THRONES QUIZ! \nPLEASE NOTE: ALL QUESTIONS REQUIRE AN ANSWER FOR SUBMISSION.");
  }

  submitQuiz(): void {
    let submitBtn = document.getElementById('submit');

    submitBtn.addEventListener('click', () => {
      this.resultsService.displayResult();
    });
  }

}
