import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedService } from 'src/app/service/shared/shared.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() readonly appearanceChanged: EventEmitter<any> = new EventEmitter<any>();
  isCollapse: boolean = false
  isClick: boolean = false;
  constructor(private SharedService: SharedService) { }

  ngOnInit(): void {
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
}
