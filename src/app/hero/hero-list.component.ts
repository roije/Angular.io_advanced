/**
 * Created by roije on 03/11/2016.
 */
import { Component, OnInit } from '@angular/core';

import { Hero,
  HeroService } from './hero.service';

@Component({
  template: `
    <h3 highlight>Hero List</h3>
    <div *ngFor='let hero of heroes'>
      <a routerLink="{{hero.id}}">{{hero.id}} - {{hero.name}}</a>
    </div>
  `
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }
}
