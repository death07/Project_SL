import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { IXlogSidebarItem } from '../sidebar.type';

@Component({
  selector: 'xlog-collapsable',
  templateUrl: './collapsable.component.html',
  encapsulation: ViewEncapsulation.None
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
    this.items.collapseItem = !this.items.collapseItem
  }
}
