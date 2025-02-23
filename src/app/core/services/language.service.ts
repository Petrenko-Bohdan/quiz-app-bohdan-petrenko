import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
	private languageSubject = new BehaviorSubject<string>('pl');
  language$ = this.languageSubject.asObservable();

  constructor(private translate: TranslateService) {
		const savedLang = localStorage.getItem('selectedLanguage') || 'pl';
		this.languageSubject.next(savedLang);
    this.translate.setDefaultLang(savedLang);
    this.translate.use(savedLang);
  }

  setLanguage(lang: string) {
    this.languageSubject.next(lang);
    this.translate.use(lang);
		localStorage.setItem('selectedLanguage', lang);
  }
}
