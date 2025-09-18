import { Component } from '@angular/core';
import { HeroesListComponent } from "./heroes/heroes-list/heroes-list.component";


import { RouterOutlet } from '@angular/router';

@Component({
 imports: [HeroesListComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Israel';
  duplicarNumero(valor: number): number {
    return valor * 2;
  }

  peliculas = {
    titulo: 'El Padrino',
    fechaLanzamiento: new Date(1972, 2, 24),
    director: 'Francis Ford Coppola'
  };
}
import { DatePipe } from '@angular/common';

