import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { QuizService } from '../core/services/quiz.service';
import { Question } from '../core/models/question.model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../core/services/language.service';


@Component({
  selector: 'app-answers-screen',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatListModule, TranslateModule],
  templateUrl: './answers-screen.component.html',
  styleUrl: './answers-screen.component.scss'
})
export class AnswersScreenComponent implements OnInit {
userAnswers: {question: Question, selectedAnswer: any, isCorrect: boolean}[] = [];
selectedLanguage: string = '';

	constructor(private quizService:QuizService, private languageService: LanguageService) {}

	ngOnInit(): void {
		this.userAnswers = this.quizService.getAnswers();

		this.languageService.language$.subscribe((lang) => {
      this.selectedLanguage = lang;
    });
	}

	getCorrectAnswer(question: Question): string {
		return question.answers.find(answer=>answer.correct)?.text['']||'';
	}
}
