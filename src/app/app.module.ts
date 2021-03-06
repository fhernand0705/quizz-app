import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionsService } from './service/questions.service';
import { ResultsService } from './service/results.service';
import { PaginationService } from './service/pagination.service';


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    QuestionsService,
    ResultsService,
    PaginationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
