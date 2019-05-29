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
    this.submitQuiz();
  }

  submitQuiz(): void {
    var submitBtn = document.getElementById('submit');

    submitBtn.addEventListener('click', () => {
      this.resultsService.displayResult();
    });
  }

}
