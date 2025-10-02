import { bootstrapApplication } from '@angular/platform-browser';
import { HeroesListComponent } from './app/heroes/heroes-list/heroes-list.component';
import { appConfig } from './app/app.config';
import { CinepolisComponent } from './app/formularios/cinepolis/cinepolis.component';
import { ResistenciaComponent } from './app/formularios/resistencia/resistencia.component';


bootstrapApplication(HeroesListComponent, appConfig)
  .catch(err => console.error(err));


bootstrapApplication(CinepolisComponent, appConfig)
.catch(err => console.error(err));

  bootstrapApplication(ResistenciaComponent, appConfig)
  .catch(err => console.error(err));

