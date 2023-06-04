import { PokeApiService } from 'src/app/service/poke-api.service'
import { ActivatedRoute } from '@angular/router'
import { Component } from '@angular/core'
import { forkJoin } from 'rxjs'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon'
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species'

  public pokemon: any
  public isLoading: boolean = false
  public apiError: boolean = false

  constructor(
    private activedRouter: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {
    this.getPokemons()
  }

  getPokemons() {
    const id = this.activedRouter.snapshot.params['id']
    const pokemon = this.pokeApiService.findOne(`${this.urlPokemon}/${id}`)
    const name = this.pokeApiService.findOne(`${this.urlName}/${id}`)

    forkJoin([pokemon, name]).subscribe({
      next: (res) => {
        this.pokemon = res
        this.isLoading = true
        console.log(res)
      },
      error: (error) => {
        this.apiError = true
      },
    })
  }
}
