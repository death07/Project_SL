import { Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { ProfileComponent } from './profile/profile.component';

export const myProfileRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'profile',
    },
    {
        path: 'profile',
        component: ProfileComponent
    },
    {
        path: 'company',
        component: CompanyComponent
    }
];