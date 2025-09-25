import { Component } from '@angular/core';
import { CinepolisComponent } from './cinepolis/cinepolis.component'




import { RouterOutlet } from '@angular/router';

@Component({
 imports: [CinepolisComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.css'
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
import { OperasBasComponent } from "./formularios/operas-bas/operas-bas.component";

