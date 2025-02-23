import { Routes } from '@angular/router';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { QuizScreenComponent } from './quiz-screen/quiz-screen.component';
import { SummaryScreenComponent } from './summary-screen/summary-screen.component';
import { AnswersScreenComponent } from './answers-screen/answers-screen.component';


export const routes: Routes = [
	{path: '', component: StartScreenComponent},
	{path: 'start-screen', component: StartScreenComponent},
	{path: 'quiz', component: QuizScreenComponent},
	{path: 'summary', component: SummaryScreenComponent}, 
	
	{path: 'answers', component: AnswersScreenComponent}
];
