import { Component } from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'app-root',
  template: `
    <app-title [subtitle]="subtitle"></app-title>
    <nav>
      <a routerLink="contact" routerLinkActive="active">Contact</a>
      <a routerLink="crisis"  routerLinkActive="active">Crisis Center</a>
      <a routerLink="heroes"  routerLinkActive="active">Heroes</a>
    </nav>
    
    <router-outlet></router-outlet>
    <!--<app-contact></app-contact>-->
  `
})
export class AppComponent {
  subtitle = '(v1)';
}
