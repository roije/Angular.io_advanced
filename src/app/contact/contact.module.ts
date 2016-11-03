/**
 * Created by roije on 03/11/2016.
 */
import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';

import { HighlightDirective } from './highlight.directive';
import { UserService }        from '../user.service';

/* Contact Imports */
import
{ ContactComponent }   from './contact.component';
/*
 { ContactComponent }   from './contact/contact.component';
 */
import { ContactService }     from './contact.service';
import { AwesomePipe }        from './awesome.pipe';


import { FormsModule }        from '@angular/forms';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [ CommonModule,  FormsModule ],
  declarations: [
    HighlightDirective,
    AwesomePipe,
    ContactComponent,
  ],
  providers: [ ContactService ],
  exports: [ ContactComponent ]
})
export class ContactModule { }
