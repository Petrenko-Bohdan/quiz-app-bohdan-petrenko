import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { TranslateModule} from '@ngx-translate/core';


@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, TranslateModule],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {

	constructor(private router: Router) { }

	startQuiz(){
		this.router.navigate(['/quiz']);
	}
}
