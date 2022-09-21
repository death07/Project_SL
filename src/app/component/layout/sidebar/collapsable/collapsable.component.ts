import { Component, Input, OnInit } from '@angular/core';
import { IXlogSidebarItem } from '../sidebar.type';

@Component({
  selector: 'xlog-collapsable',
  templateUrl: './collapsable.component.html'
})
export class CollapsableComponent implements OnInit {
  @Input() items: IXlogSidebarItem;
  isCollapsed: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

  toggleCollapsable(): void {
    this.isCollapsed = !this.isCollapsed
  }
}
