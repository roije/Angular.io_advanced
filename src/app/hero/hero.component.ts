/**
 * Created by roije on 03/11/2016.
 */

import { HeroService } from './hero.service';
import { UserService } from '../core/user.service';
import {Component} from "@angular/core/src/metadata/directives";

@Component({
  template: `
    <h2>Heroes of {{userName}}</h2>
    <router-outlet></router-outlet>
  `,
  providers: [ HeroService ]
})
export class HeroComponent {
  userName = '';
  constructor(userService: UserService) {
    this.userName = userService.userName;
  }
}
