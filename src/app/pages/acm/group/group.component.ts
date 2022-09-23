import { Component, ContentChild, OnInit } from '@angular/core';
import { RELOADABLE_CONTENT } from '../acm.token';
import { Reloadable } from '../reloadable';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],

})
export class GroupComponent implements OnInit, Reloadable {


  constructor() { }
  loading: boolean = false;
  reload(): void {
    console.log('..loading is happening')
  }

  ngOnInit(): void {
  }



}
