import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question } from '../models/question.model';

interface UserAnswer {
  question: Question;
  selectedAnswer: any;
  isCorrect: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private jsonUrl = 'assets/questions.json'; 
	private userAnswers: {questionId: number, selectedAnswerIndex: number}[] = [];
	private answers: UserAnswer[] = [];

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<Question[]> {
    return this.http.get<{ questions: Question[] }>(this.jsonUrl).pipe(
      map(response => response.questions)
    );
  }

	saveAnswer(answer: UserAnswer): void {
    this.answers.push({...answer, isCorrect: answer.selectedAnswer.correct});
  }


	setAnswer(questionId: number, selectedAnswerIndex: number): void {
		const existingAnswer = this.userAnswers.find(answer => answer.questionId === questionId);

		if (existingAnswer){
			existingAnswer.selectedAnswerIndex = selectedAnswerIndex;
		} else {
			this.userAnswers.push({questionId, selectedAnswerIndex});
		}
	}

	// getUserAnswers(): {questionId: number, selectedAnswerIndex: number}[] {
	// 	return this.userAnswers;}

	getAnswers(): UserAnswer[] {
		return this.answers;
	}
	}