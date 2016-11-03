/**
 * Created by roije on 03/11/2016.
 */
import { Injectable } from '@angular/core';

export class Crisis {
  constructor(public id: number, public name: string) { }
}

const CRISES: Crisis[] = [
  new Crisis(1, 'Dragon Burning Cities'),
  new Crisis(2, 'Sky Rains Great White Sharks'),
  new Crisis(3, 'Giant Asteroid Heading For Earth'),
  new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];

const FETCH_LATENCY = 500;

@Injectable()
export class CrisisService {

  getCrises() {
    return CRISES;
  }

  getCrisis(id: number | string) : Crisis{
    let crises = this.getCrises();
    for(let i = 0; i < crises.length; i++) {
      if(crises[i].id === id){
        return crises[i];
      }
    }
  }

}
