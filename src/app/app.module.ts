import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

/* App Root */
import { AppComponent }       from './app.component';
import { TitleComponent }     from './core/title.component';
import { UserService }        from './core/user.service';

/* Feature Modules */
import { ContactModule }      from './contact/contact.module';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';
import {CoreModule} from "./core/core.module";

@NgModule({
  imports:      [
    BrowserModule,
    ContactModule,
    AppRoutingModule,
    CoreModule.forRoot({userName: 'Miss Marple'}),
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
