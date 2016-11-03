import {Component} from "@angular/core/src/metadata/directives";
import {OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
/**
 * Created by roije on 03/11/2016.
 */
@Component({
  template: `
    <h3 highlight>Crisis Detail</h3>
    <div>Crisis id: {{id}}</div>
    <br>
    <a routerLink="../list">Crisis List</a>
  `
})
export class CrisisDetailComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute) {  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.params['id'], 10);
  }
}
