import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

/* App Root */
import
{ AppComponent }       from './app.component';

import { HighlightDirective } from './highligt.directive';
import { TitleComponent }     from './title.component';
import { UserService }        from './user.service';

import { ContactModule}       from './contact/contact.module'


@NgModule({
  //Removed FormsModule, because AppModule doesn't need it. Only used in ContactModule atm, which imports FormsModule instead
  imports: [ BrowserModule, ContactModule],
  declarations: [
    AppComponent,
    HighlightDirective,
    TitleComponent,
  ],
  providers: [ UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
