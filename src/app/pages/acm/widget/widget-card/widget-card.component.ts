import { Component, ContentChild, OnInit } from '@angular/core';
import { Acm } from '../../acm';
import { RELOADABLE_CONTENT } from '../../acm.token';
import { Reloadable } from '../../reloadable';

@Component({
  selector: 'app-widget-card',
  templateUrl: './widget-card.component.html'
})
export class WidgetCardComponent extends Acm implements OnInit {
  @ContentChild(RELOADABLE_CONTENT)
  content?: Reloadable


  constructor() {
    super();
  }

  ngOnInit(): void {
    console.log('initialize')
  }

  ngAfterContentInit(): void {
    if (this.content) {
      this.content.reload()
      console.log('dsadsa')
    }
  }
}
