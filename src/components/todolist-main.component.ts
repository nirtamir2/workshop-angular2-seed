import {Component} from "@angular/core";
import {TodolistToggleComponent} from "./todolist-toggle.component";
import {TodolistListComponent} from "./todolist-list.component";

@Component({
  selector: 'todolist-main',
  directives:[
      TodolistToggleComponent,
      TodolistListComponent
  ],
  template: `
    <todolist-toggle></todolist-toggle>
    <todolist-list></todolist-list>
  `,
})

export class TodolistMainComponent {}
