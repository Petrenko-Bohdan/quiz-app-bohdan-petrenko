import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { InactivityService } from './app/core/services/inactivity.service';

const updatedConfig = {
  ...appConfig,
  providers: [...appConfig.providers, provideRouter([]), InactivityService] // Добавляем сервисы в appConfig
};

bootstrapApplication(AppComponent, updatedConfig)
  .catch((err) => console.error(err));

