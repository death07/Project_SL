import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { myProfileRoutes } from './my-profile.routing';
import { CompanyComponent } from './company/company.component';



@NgModule({
  declarations: [
    ProfileComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(myProfileRoutes)
  ]
})
export class MyProfileModule { }
