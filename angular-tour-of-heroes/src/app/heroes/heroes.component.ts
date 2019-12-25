import { HeroService } from './../service/hero.service'
import { Component, OnInit } from '@angular/core'
import { HEROES } from '../mock-heroes'
import { Hero } from '../hero'

@Component({ /* angular meta data */
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[]
  selectedHero: Hero
  constructor(
    private heroService: HeroService,
  ) {
    this.heroes = HEROES
  }

  ngOnInit(): void {
    this.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = this.heroes)
  }

}
