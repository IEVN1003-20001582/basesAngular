import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = signal('El INCREIBLE');
  duplicarNumero(valor:number):number{
    return valor * 2;
}

pelicula={
  titulo:"El señor de los anillos",
  fechaLanzamiento:new Date,
  director:"Peter Jackson"
}

}
