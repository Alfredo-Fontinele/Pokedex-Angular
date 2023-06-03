import { PokeApiService, PokemonProps } from 'src/app/service/poke-api.service'
import { Component } from '@angular/core'

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent {
  pokemons: PokemonProps = {
    count: 0,
    next: null,
    previous: null,
    results: [],
  }

  constructor(private pokeApiService: PokeApiService) {
    this.findAll()
  }

  findAll() {
    this.pokeApiService.findAll().subscribe((res) => (this.pokemons = res))
  }
}
