import { Component, Input, OnInit } from '@angular/core';
import { IXlogSidebarItem } from '../sidebar.type';

@Component({
  selector: 'xlog-item',
  templateUrl: './xlog-item.component.html'
})
export class XlogItemComponent implements OnInit {
  @Input() items: IXlogSidebarItem;

  constructor() { }

  ngOnInit(): void {
  }

  redirect() {
    this.items['active'] = true;
  }
}
