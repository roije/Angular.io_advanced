/**
 * Created by roije on 03/11/2016.
 */
import { Injectable } from '@angular/core';

export class Hero {
  constructor(public id: number, public name: string) { }
}

const HEROES: Hero[] = [
  new Hero(11, 'Mr. Nice'),
  new Hero(12, 'Narco'),
  new Hero(13, 'Bombasto'),
  new Hero(14, 'Celeritas'),
  new Hero(15, 'Magneta'),
  new Hero(16, 'RubberMan')
];

const FETCH_LATENCY = 500;

@Injectable()
export class HeroService {

  getHeroes() {
    return HEROES;
  }

  getHero(id: number): Hero {
    var heroes = this.getHeroes();
    for (var i = 0; i < heroes.length; i++) {
      if (heroes[i].id === id) {
        return heroes[i];
      }
    }
  }

}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */
