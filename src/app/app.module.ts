import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesListComponent } from './heroes/heroes-list/heroes-list.component';
import { FormsModule } from '@angular/forms';
import { CinepolisComponent } from './formularios/cinepolis/cinepolis.component'
import { ResistenciaComponent } from './formularios/resistencia/resistencia.component';


@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
})
export class AppModule { }

  bootstrap: [AppComponent]
  exports: [HeroesListComponent]
  exports: [CinepolisComponent]
  exports: [ResistenciaComponent]

