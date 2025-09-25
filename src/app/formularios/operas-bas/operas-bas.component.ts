import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operas-bas',
  imports: [CommonModule, FormsModule],
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
num1:string="";
num2:string="";
resultado:number=0;

calcular():void{

}
}



