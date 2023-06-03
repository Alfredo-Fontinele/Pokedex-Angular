import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs'

interface ResultPokemonProps {
  name: string
  url: string
  info: any
}

export interface PokemonProps {
  count: number
  next: string | null
  previous: string | null
  results: ResultPokemonProps[]
}

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url = 'https://pokeapi.co/api/v2/pokemon/?offset=100&limit=100'

  constructor(private http: HttpClient) {}

  findAll(): Observable<PokemonProps> {
    return this.http
      .get<PokemonProps>(this.url)
      .pipe(
        tap((resPokemon) =>
          resPokemon.results.map((resPokemon) =>
            this.http
              .get(resPokemon.url)
              .subscribe((res) => (resPokemon.info = res))
          )
        )
      )
  }
}
