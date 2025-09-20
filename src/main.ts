import { bootstrapApplication } from '@angular/platform-browser';
import { HeroesListComponent } from './app/heroes/heroes-list/heroes-list.component';
import { appConfig } from './app/app.config';

bootstrapApplication(HeroesListComponent, appConfig)
  .catch(err => console.error(err));
