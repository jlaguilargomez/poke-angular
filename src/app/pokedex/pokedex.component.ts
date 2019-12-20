import { Component, OnInit } from '@angular/core';

import { PokedexService } from '../pokedex.service';
import { Pokemon } from '../interface/pokemon.interface';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {
  pokemons : Pokemon[];
  constructor(private pokedexService : PokedexService) { }

  renderPokemon(pok) {
    console.log(this.pokemons[pok]);
  }

  ngOnInit() {
    Promise.all(this.pokedexService.getPokemons(151)).then((dataSet :Pokemon [] )=>{
      this.pokemons = dataSet;
      console.log(this.pokemons);
    });
  }

}
