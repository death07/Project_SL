import { Routes } from '@angular/router';
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
    }
];