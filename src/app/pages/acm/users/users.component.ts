import { Component, OnInit } from '@angular/core';
import { Acm } from '../acm';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() {
    // data
  }

  ngOnInit(): void {
    console.log('initialize')
  }

}
