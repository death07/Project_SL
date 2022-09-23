import { Component, OnInit } from '@angular/core';
import { Reloadable } from '../reloadable';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],

})
export class GroupComponent implements OnInit, Reloadable {


  constructor() {
    // data
  }

  loading: boolean = false;
  reload(): void {
    console.log('..loading is happening')
  }

  ngOnInit(): void {
    console.log('initialize')
  }



}
