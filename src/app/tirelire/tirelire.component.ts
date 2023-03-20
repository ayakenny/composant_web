import { Component , EventEmitter, Input , Output } from '@angular/core';

@Component({
  selector: 'tirelire',
  templateUrl: './tirelire.component.html',
  styleUrls: ['./tirelire.component.css']
})

export class TirelireComponent {
  constructor() {
    
  }

  @Input() valeur: number = 0;
  @Input() numero: number = 0;
  @Output() depense: EventEmitter<number> = new EventEmitter<number>();

  depenser() {
    this.depense.emit(this.numero);
  }
}