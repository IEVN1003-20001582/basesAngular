import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  }  from '@angular/forms';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './heroes-list.component.html'
})

export class HeroesListComponent {

  imageWidth:number=40;
  imageMargin:number=2;
  muestraImage:boolean=true;

  showImage():void{
    this.muestraImage=!this.muestraImage;
  }


  listFilter: string = '';
  heroes = [
    {
      imagen: "https://dragonball-api.com/characters/goku_normal.webp",
      nombre: "Goku",
      description: "KameHameHa",
      race: "Saiyan",
      ki: 90000
    },
    {
      imagen: "https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre: "Vegeta",
      description: "Final Flash",
      race: "Saiyan",
      ki: 19000
    },
    {
      imagen: "https://dragonball-api.com/characters/picolo_normal.webp",
      nombre: "Piccolo",
      description: "Malanasapo",
      race: "Namekiano",
      ki: 70000
    },
    {
      imagen: "https://dragonball-api.com/characters/Freezer.webp",
      nombre: "Freezer",
      description: "Death Ball",
      race: "Alien",
      ki: 70000
    }
  ];
}
