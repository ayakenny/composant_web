import { Component } from '@angular/core';

@Component({
  selector: 'boite',
  templateUrl: './boite.component.html',
  styleUrls: ['./boite.component.css']
})
export class BoiteComponent {
  tirelire_1:number = 0;
  tirelire_2:number = 0;
  tirelire_3:number = 0;

  ajouter() {
    let numeroTirelire = Math.floor(Math.random()*3)+1;
    switch (numeroTirelire) {
      case 1:
      this.tirelire_1 += 100;
      break;
      case 2:
      this.tirelire_2 += 100;
      break;
      case 3:
      this.tirelire_3 += 100;
      break;
    }

    depenser(numeroTirelire: number) {
      switch (numeroTirelire) {
        case 1:
          this.tirelire_1 = 0;
          break;
        case 2:
          this.tirelire_2 = 0;
          break;
        case 3:
          this.tirelire_3 = 0;
          break;
      }
    }
}

