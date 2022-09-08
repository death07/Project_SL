import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/service/shared/shared.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isCollapse: boolean = false;
  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.shared.collapse$.subscribe((data) => {
      this.isCollapse = data
    })
  }

  test(event: any) {
    console.log(event)
  }
}
