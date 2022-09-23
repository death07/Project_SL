import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { CollapsableComponent } from './sidebar/collapsable/collapsable.component';
import { XlogItemComponent } from './sidebar/xlog-item/xlog-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    LayoutComponent,
    FooterComponent,
    CollapsableComponent,
    XlogItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
