import { Component, Input, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
import { IXlogSidebarItem } from '../sidebar.type';

@Component({
  selector: 'xlog-item',
  templateUrl: './xlog-item.component.html',

})
export class XlogItemComponent implements OnInit {
  @Input() items: IXlogSidebarItem;

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    // Subscribe to the 'NavigationEnd' event

  }

  redirect() {
    this.items['active'] = !this.items['active']
  }
}
