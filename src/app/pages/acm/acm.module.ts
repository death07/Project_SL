import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { GroupComponent } from './group/group.component';
import { WidgetCardComponent } from './widget/widget-card/widget-card.component';
import { RouterModule } from '@angular/router';
import { acmRouting } from './acm.routing';
import { RELOADABLE_CONTENT } from './acm.token';



@NgModule({
  declarations: [
    UsersComponent,
    GroupComponent,
    WidgetCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(acmRouting)
  ],
  providers: [
    { provide: RELOADABLE_CONTENT, useExisting: GroupComponent }
  ]
})
export class AcmModule { }
