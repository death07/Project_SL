import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subject, takeUntil } from 'rxjs';
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
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  sidebar: IXlogSidebarItem[]
  constructor(private SharedService: SharedService,
    private _router: Router) { }

  ngOnInit(): void {
    console.log(this.isCollapse, this.isClick)
    this.menu();
    this.getActiveSidebar()
    this._router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe((event: NavigationEnd) => {
        this.getActiveSidebar()
      });
  }

  toggleSide(): void {
    if (!this.isCollapse && !this.isClick) {
      this.clickCollapse(false, true)
    } else {
      this.clickCollapse(true, true)
    }

    this.SharedService.collapse(this.isCollapse)
  }

  getActiveSidebar() {
    this.sidebar.forEach(item => {
      if (item.children.length > 0) {
        this.setActiveSidebar(item.children)

        let child = item.children.some((data) => data.active === true)
        if (child) {
          item.collapseItem = true;
        } else {
          item.collapseItem = false;
        }
      } else {
        this.setActiveSidebar(this.sidebar)
      }
    });
  }

  setActiveSidebar(arrayData) {
    arrayData.forEach((data) => {
      if (data.router === this._router.url) {
        data.active = true;
      } else {
        data.active = false;
      }
    })
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


  clickCollapse(collapse: boolean, click?: boolean) {
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
        collapseItem: false,
        children: [
          {
            id: 'xlog-company',
            title: 'Company',
            icon: 'xlog:profile',
            type: 'basic',
            router: '/main/my-profile/profile'
          },
          {
            id: 'xlog-profile',
            title: 'My Profile',
            icon: 'xlog:profile',
            type: 'basic',
            router: '/main/my-profile/company'
          }
        ]
      },
      {
        id: 'profile',
        title: 'Transaction',
        icon: 'xlog:profile',
        type: 'basic',
        children: [],
      },
      {
        id: 'acm',
        title: 'Access Management',
        icon: 'xlog:profile',
        type: 'collapsable',
        collapseItem: false,
        children: [
          {
            id: 'xlog-company',
            title: 'Users',
            icon: 'xlog:profile',
            type: 'basic',
            router: '/main/acm/users'
          },
          {
            id: 'xlog-profile',
            title: 'Roles',
            icon: 'xlog:profile',
            type: 'basic',
            router: '/main/acm/groups'
          }
        ]
      },
    ]
  }


  collapseItem(items) {
    if (items.collapse) {
      this.isMenuCollapse = !this.isMenuCollapse
    }
  }
}
