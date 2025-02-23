import { Component, OnInit } from '@angular/core';
import { QuizService } from '../core/services/quiz.service';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import {  TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-summary-screen',
  standalone: true,
  imports: [ MatCardModule, MatButtonModule, TranslateModule],
  templateUrl: './summary-screen.component.html',
  styleUrl: './summary-screen.component.scss'
})
export class SummaryScreenComponent implements OnInit {
answers: any[] = [];

	constructor(private quizService:QuizService,  private router: Router, private translate: TranslateService) {}

	ngOnInit(): void {
		this.answers = this.quizService.getAnswers();		
	}

	getCorrectAnswers():number{
		return this.answers.filter(answer=>answer.isCorrect).length;
	}

	getIncorrectAnswers():number{
		return this.answers.filter(answer=>!answer.isCorrect).length;
	}

	getTotalAnswers():number{
		return this.answers.length;
	}

	getPercentage():number{
		return (this.getCorrectAnswers()/this.getTotalAnswers())*100;
	}

getResultText(): string {
    const percentage = this.getPercentage();
    if (percentage >= 80) {
      return this.translate.instant('SUMMARY-SCREEN.WELL_DONE');
    } else if (percentage >= 50) {
      return this.translate.instant('SUMMARY-SCREEN.NOT_BAD');
    } else {
      return this.translate.instant('SUMMARY-SCREEN.BETTER_LUCK');
    }
  }

	goToAnswers(){
		this.router.navigate(['/answers']);
	}

}
