import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {

	constructor(private router: Router) { }

	startQuiz(){
		this.router.navigate(['/quiz']);
	}

}
