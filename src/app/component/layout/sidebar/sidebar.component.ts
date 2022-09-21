import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/service/shared/shared.service';
import { IXlogSidebarItem } from './sidebar.type'

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() readonly appearanceChanged: EventEmitter<any> = new EventEmitter<any>();
  isCollapse: boolean = false
  isClick: boolean = false;
  isMenuCollapse: boolean = false;

  sidebar: IXlogSidebarItem[]
  constructor(private SharedService: SharedService) { }

  ngOnInit(): void {
    this.menu()
  }

  toggleSide() {
    if (!this.isCollapse && !this.isClick) {
      this.clickCollapse(false, true)
    } else {
      this.clickCollapse(true, true)
    }
    this.SharedService.collapse(this.isCollapse)
  }

  toggleMouseOver() {
    if (this.isCollapse && this.isClick) {
      this.clickCollapse(false, false)
      this.SharedService.collapse(this.isCollapse)
    }
  }
  toggleMouseLeave() {
    if (!this.isCollapse && !this.isClick) {
      this.clickCollapse(true, true)
      this.SharedService.collapse(this.isCollapse)
    }
  }


  clickCollapse(collapse: boolean, click: boolean) {
    this.isCollapse = collapse
    this.isClick = click
  }

  menu() {
    this.sidebar = [
      {
        id: 'profile',
        title: 'Profile',
        icon: 'xlog:profile',
        type: 'collapsable',
        children: [
          {
            id: 'xlog-company',
            title: 'Company',
            icon: 'xlog:profile',
            type: 'basic'
          },
          {
            id: 'xlog-profile',
            title: 'My Profile',
            icon: 'xlog:profile',
            type: 'basic'
          }
        ]
      },
      {
        id: 'profile',
        title: 'Transaction',
        icon: 'xlog:profile',
        type: 'basic',

      },
      {
        id: 'profile',
        title: 'Profile',
        icon: 'xlog:profile',
        type: 'collapsable'
      },
    ]
  }


  collapseItem(items) {
    if (items.collapse) {
      this.isMenuCollapse = !this.isMenuCollapse
    }
  }
}
