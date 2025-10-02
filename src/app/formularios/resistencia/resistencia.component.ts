import { Component } from '@angular/core';
import { BandaColor } from './resistencia';
import { Tolerancia } from './resistencia';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resistencia',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './resistencia.component.html',
  styleUrl: './resistencia.component.css'
})
export class ResistenciaComponent {
  banda1: BandaColor[] = [
    new BandaColor('Negro', 0, '#000000'),
    new BandaColor('Café', 1, '#8B4513'),
     new BandaColor('Rojo', 2, '#FF0000'),
    new BandaColor('Naranja', 3, '#FFA500'),
    new BandaColor('Amarillo', 4, '#FFFF00'),
     new BandaColor('Verde', 5, '#008000'),
    new BandaColor('Azul', 6, '#0000FF'),
    new BandaColor('Violeta', 7, '#800080'),
    new BandaColor('Gris', 8, '#808080'),
    new BandaColor('Blanco', 9, '#FFFFFF')
  ];

  banda2: BandaColor[] = [...this.banda1];

  banda3: BandaColor[] = [
    new BandaColor('Negro x1', 1, '#000000'),
    new BandaColor('Café x10', 10, '#8B4513'),
    new BandaColor('Rojo x100', 100, '#FF0000'),
     new BandaColor('Naranja x1000', 1000, '#FFA500'),
    new BandaColor('Amarillo x10000', 10000, '#FFFF00'),
    new BandaColor('Verde x100000', 100000, '#008000'),
    new BandaColor('Azul x1000000', 1000000, '#0000FF'),
    new BandaColor('Violeta x10000000', 10000000, '#800080'),
     new BandaColor('Gris x100000000', 100000000, '#808080'),
    new BandaColor('Blanco x1000000000', 1000000000, '#FFFFFF')
  ];

  tolerancias: Tolerancia[] = [
    new Tolerancia('Dorado 5%', 5, '#FFD700'),
    new Tolerancia('Plata 10%', 10, '#C0C0C0')
  ];


  seleccionBanda1!: BandaColor;
   seleccionBanda2!: BandaColor;
  seleccionBanda3!: BandaColor;
  seleccionTolerancia!: Tolerancia;


  valorNominal: number | null = null;
  valorMaximo: number | null = null;
  valorMinimo: number | null = null;

  calcular() {
    if (this.seleccionBanda1 && this.seleccionBanda2 && this.seleccionBanda3 && this.seleccionTolerancia) {
      const base = Number(`${this.seleccionBanda1.valor}${this.seleccionBanda2.valor}`
      );

         this.valorNominal = base * this.seleccionBanda3.valor;

      const margen = (this.valorNominal * this.seleccionTolerancia.porcentaje) / 100;

       this.valorMaximo = this.valorNominal + margen;

      this.valorMinimo = this.valorNominal - margen;
    }
  }
}
