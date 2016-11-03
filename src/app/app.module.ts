import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

/* App Root */
import
{ AppComponent }       from './app.component';
/*
 { AppComponent }       from './app.component';
 */
import { HighlightDirective } from './highligt.directive';
import { TitleComponent }     from './title.component';
import { UserService }        from './user.service';

/* Contact Imports */
import
{ ContactComponent }   from './contact/contact.component';
/*
 { ContactComponent }   from './contact/contact.component';
 */
import { ContactService }     from './contact/contact.service';
import { AwesomePipe }        from './contact/awesome.pipe';

import {
  HighlightDirective as ContactHighlightDirective
} from './contact/highlight.directive';

import { FormsModule }        from '@angular/forms';

@NgModule({
  imports: [ BrowserModule,  FormsModule ],
  declarations: [
    AppComponent, HighlightDirective, TitleComponent,
    AwesomePipe, ContactComponent, ContactHighlightDirective
  ],
  providers: [ ContactService, UserService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
