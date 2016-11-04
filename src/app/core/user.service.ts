/**
 * Created by roije on 03/11/2016.
 */
import {Injectable, Optional} from '@angular/core';

@Injectable()
export class UserServiceConfig {
  userName = 'Philip Marlowe';
}

/** Dummy version of an authenticated user service */
export class UserService {
  userName = 'Sherlock Holmes';

  constructor(@Optional() config: UserServiceConfig) {
    if(config){
      this.userName = config.userName;
    }
  }
}

