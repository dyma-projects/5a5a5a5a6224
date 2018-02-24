import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Input() public compteur: number = 0;
  @Output() public compteurChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeCompteurHandler() {
    this.compteurChange.emit(this.compteur);
  }

  plusClickHandler() {
    this.compteur++;
    this.changeCompteurHandler();
  }

  moinsClickHandler() {
    this.compteur--;
    this.changeCompteurHandler();
  }

}
