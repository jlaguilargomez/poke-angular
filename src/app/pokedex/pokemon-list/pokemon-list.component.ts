import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
    items = [];
    constructor() { }

    ngOnInit() {
        for (let i = 0; i < 151; i++) {
            this.items[i] = i
        }
    }

}
