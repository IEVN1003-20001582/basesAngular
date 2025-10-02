import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cinepolis',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  nombre = '';
  cantidadCompradores = 0;
  cantidadBoletos = 0;
  tarjeta: boolean = false;
  mensaje = '';

  calcular(): void {
    const precioBoleto = 12;

//ESTO AYUDA A QUE LOS BOLETOS NO SOBREPASEN EL LIMITE DE BOLETOS PERMITIDOS Y LANZA EL ERROR
    const maximoPermitido = this.cantidadCompradores * 7;
    if (this.cantidadBoletos > maximoPermitido) {
      this.mensaje = `ERROR: No puedes comprar más de ${maximoPermitido} boletos`;
      return;
    }

          let totalPagar = this.cantidadBoletos * precioBoleto;

      let descuento = 0;

      if (this.cantidadBoletos > 5) {
      descuento = 15;
         } else if (this.cantidadBoletos >= 3) {
      descuento = 10;
      }

       totalPagar = totalPagar - (totalPagar * descuento / 100);

       if (this.tarjeta === true) {
        totalPagar = totalPagar * 0.9;
    }

    this.mensaje = `
      Cliente: ${this.nombre}
        Boletos comprados: ${this.cantidadBoletos}
       Total a pagar: $ ${totalPagar.toLocaleString()}
      ${this.tarjeta ? 'Con descuento de tarjeta Cineco' : 'Sin tarjeta Cineco' +  'RECUERDA QUE SI TIENES TARJETA TIENES UN %10 DE DESCUENTO'}
    `;
  }
}
