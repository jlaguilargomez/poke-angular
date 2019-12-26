import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  public pokemonSelected: object;

  constructor() {
    this.pokemonSelected = {
      //Still on development
      name: 'Bulbasur',
      ability: ['chlorophy', 'overgrow'],
      type: ['poison', 'grass'],
      height: 7,
      weight: 69,
      stats: [
        // We have to change the objet name 'base-state' to a base.
        {
          name: 'hp',
          base: 65,
        },
        {
          name: 'speed',
          base: 45,
        },
        {
          name: 'special-defense',
          base: 65,
        },
        {
          name: 'defense',
          base: 49,
        },

        {
          name: 'special-attack',
          base: 45,
        },
      ],
      imagePath:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    };
  }

  ngOnInit() {}
}
