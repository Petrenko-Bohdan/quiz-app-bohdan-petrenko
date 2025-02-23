import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatRadioButton } from '@angular/material/radio';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuizService } from '../core/services/quiz.service';
import { Question } from '../core/models/question.model';
import { MatButtonModule } from '@angular/material/button';
import { LanguageService } from '../core/services/language.service';

@Component({
  selector: 'app-quiz-screen',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatRadioModule,
    MatRadioButton,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './quiz-screen.component.html',
  styleUrls: ['./quiz-screen.component.scss'],
})
export class QuizScreenComponent implements OnInit {
  questions: Question[] = [];
  selectedLanguage = 'pl';
  currentQuestionIndex: number = 0;
  selectedAnswer: any = null;

  constructor(private quizService: QuizService, private languageService: LanguageService, private router: Router) {}

  ngOnInit(): void {
		this.languageService.language$.subscribe((lang) => {
      this.selectedLanguage = lang;			
    });

    this.quizService.getQuestions().subscribe((questions) => {
      this.questions = questions;
    });
  }

  nextQuestion(): void {
    if (this.selectedAnswer) {
      this.quizService.saveAnswer({
        question: this.questions[this.currentQuestionIndex],
        selectedAnswer: this.selectedAnswer,
				isCorrect: this.selectedAnswer.correct,
      });
    }

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.selectedAnswer = null;
    } else {
      this.router.navigate(['/summary']);
    }
  }
}
