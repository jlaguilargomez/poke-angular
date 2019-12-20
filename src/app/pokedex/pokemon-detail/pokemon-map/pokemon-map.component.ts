import { Component, OnInit, Input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-pokemon-map',
  templateUrl: './pokemon-map.component.html',
  styleUrls: ['./pokemon-map.component.scss']
})
export class PokemonMapComponent implements OnInit {

  @Input() pokemonObservable;


  constructor() { }

  ngOnInit() {
    // Leaflet setting
    let options = {attributionControl: false};
    let map = L.map('map', options).setView([40.416775, -3.703790], 13);
    let tileLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'});
    tileLayer.addTo(map)

    this.pokemonObservable.subscribe(pokemons =>{
      pokemons.forEach( pokemon => {
        let marker = L.marker([pokemon.coord.lat, pokemon.coord.long],{icon: L.icon({iconUrl: pokemon.imagePath, iconSize :70})})
        marker.addTo(map)
      })
    })
  }

}
