import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LayoutModule } from './component/layout/layout.module';
import { LayoutComponent } from './component/layout/layout/layout.component';
import { MatIconModule } from '@angular/material/icon';
import { CoreModule } from './core/core/core.module';


const routerConfig: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  scrollPositionRestoration: 'enabled'
};

const appRoutes: Routes = [
  {
    path: 'main',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: "my-profile"
      },
      {
        path: 'my-profile',
        loadChildren: () =>
          import('./pages/my-profile/my-profile.module').then((m) => m.MyProfileModule),
      }
    ]

  },
  {
    path: '**',
    redirectTo: 'main',
  },
]
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, routerConfig),
    LayoutModule,
    MatIconModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
