import {
  PokeApiService,
  PokemonProps,
  ResultPokemonProps,
} from 'src/app/service/poke-api.service'
import { Component } from '@angular/core'

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent {
  private listFilteredPokemons: ResultPokemonProps[] = []
  public pokemons: PokemonProps = {
    count: 0,
    next: null,
    previous: null,
    results: [],
  }

  constructor(private pokeApiService: PokeApiService) {
    this.findAll()
  }

  findAll() {
    this.pokeApiService.findAll().subscribe({
      next: (res) => {
        this.listFilteredPokemons = res.results
        this.pokemons.results = this.listFilteredPokemons
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    })
  }

  searchPokemon(value: string) {
    const filter = this.listFilteredPokemons.filter((res) => {
      return !res.name.indexOf(value.toLowerCase())
    })
    this.pokemons.results = filter
  }
}
