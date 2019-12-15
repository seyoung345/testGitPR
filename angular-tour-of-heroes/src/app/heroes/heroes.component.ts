import { Component, OnInit } from '@angular/core'
import { HEROES } from '../mock-heroes'
import { Hero } from '../hero'

@Component({ /* angular meta data */
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  hero: Hero[]

  constructor() {
    this.hero = HEROES
  }

  ngOnInit() {
  }

}
