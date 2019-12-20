import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonListComponent } from './pokedex/pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokedex/pokemon-detail/pokemon-detail.component';
import { PokemonItemComponent } from './pokedex/pokemon-list/pokemon-item/pokemon-item.component';
import { PokemonCardComponent } from './pokedex/pokemon-detail/pokemon-card/pokemon-card.component';
import { PokemonMapComponent } from './pokedex/pokemon-detail/pokemon-map/pokemon-map.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    PokedexComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonItemComponent,
    PokemonCardComponent,
    PokemonMapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
