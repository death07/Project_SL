import { Routes } from "@angular/router";
import { GroupComponent } from "./group/group.component";
import { UsersComponent } from "./users/users.component";

export const acmRouting: Routes = [

    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'groups',
        component: GroupComponent
    }
];