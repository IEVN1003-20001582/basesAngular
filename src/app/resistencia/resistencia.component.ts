import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports:[FormsModule],
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html'
})
export class ResistenciaComponent {

  color1:string = '';
  color2:string = '';
  color3:string = '';
  color4:string = '';
  resultado = '';

  // Función que se ejecuta cuando el usuario hace clic en "Calcular"
  calcular() {

    let numero1 = this.convertirColorANumero(this.color1);
    let numero2 = this.convertirColorANumero(this.color2);
    let multiplicador = this.convertirColorAMultiplicador(this.color3);
    let tolerancia = this.convertirColorATolerancia(this.color4);


    let valor = (numero1 * 10 + numero2) * multiplicador;


    let variacion = valor * (tolerancia / 100);
    let minimo = valor - variacion;
    let maximo = valor + variacion;


    this.mostrarResultado(valor, tolerancia, minimo, maximo);
  }

  convertirColorANumero(color: string): number {
    if (color === 'Negro') return 0;
    if (color === 'Cafe') return 1;
    if (color === 'Rojo') return 2;
    if (color === 'Naranja') return 3;
    if (color === 'Amarillo') return 4;
    if (color === 'Verde') return 5;
    if (color === 'Azul') return 6;
    if (color === 'Morado') return 7;
    if (color === 'Gris') return 8;
    if (color === 'Blanco') return 9;
    return 0;
  }

  convertirColorAMultiplicador(color: string): number {
    if (color === 'Negro') return 1;
    if (color === 'Cafe') return 10;
    if (color === 'Rojo') return 100;
    if (color === 'Naranja') return 1000;
    if (color === 'Amarillo') return 10000;
    if (color === 'Verde') return 100000;
    if (color === 'Azul') return 1000000;
    if (color === 'Morado') return 10000000;
    if (color === 'Gris') return 100000000;
    if (color === 'Blanco') return 1000000000;
    if (color === 'Dorado') return 0.1;
    if (color === 'Plateado') return 0.01;
    return 0;
  }


  convertirColorATolerancia(color: string): number {
    if (color === 'Cafe') return 1;
    if (color === 'Rojo') return 2;
    if (color === 'Verde') return 0.5;
    if (color === 'Azul') return 0.25;
    if (color === 'Morado') return 0.1;
    if (color === 'Gris') return 0.05;
    if (color === 'Dorado') return 5;
    if (color === 'Plateado') return 10;
    return 0;
  }


  mostrarResultado(valor: number, tolerancia: number, minimo: number, maximo: number) {
    let valorTexto = '';
    if (valor >= 1000000) {
      valorTexto = (valor / 1000000) + ' Ohms';
    } else if (valor >= 1000) {
      valorTexto = (valor / 1000) + ' Ohms';
    } else {
      valorTexto = valor + ' Ohms';
    }


    let minimoTexto = '';
    if (minimo >= 1000000) {
      minimoTexto = (minimo / 1000000) + ' Ohms';
    } else if (minimo >= 1000) {
      minimoTexto = (minimo / 1000) + ' Ohms';
    } else {
      minimoTexto = minimo + ' Ohms';
    }

    let maximoTexto = '';
    if (maximo >= 1000000) {
      maximoTexto = (maximo / 1000000) + 'Ohms';
    } else if (maximo >= 1000) {
      maximoTexto = (maximo / 1000) + 'Ohms';
    } else {
      maximoTexto = maximo + ' Ohms';
    }

    // Crear el mensaje final
    this.resultado = 'Valor: ' + valorTexto +
                    ' | Tolerancia: ±' + tolerancia + '%' +
                    ' | Mínimo: ' + minimoTexto +
                    ' | Máximo: ' + maximoTexto;
  }
}
