import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  public pokemonType: object;

  constructor() {
    this.pokemonType = {
      //Still on development
      poison: false,
      electric: false,
    };
  }

  ngOnInit() {}
}
