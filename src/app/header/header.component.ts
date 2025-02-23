import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../core/services/language.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  selectedLanguage = 'pl';

	  constructor(private router: Router, private languageService: LanguageService) {
    this.languageService.language$.subscribe(lang => {
      this.selectedLanguage = lang|| 'pl';
    });
  }

  switchLanguage(language: string): void {
    this.languageService.setLanguage(language);
  }

  goToStartScreen(): void {
    this.router.navigate(['/']);
  }
}
