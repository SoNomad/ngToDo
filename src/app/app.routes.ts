import { Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/userDetails/userDetails.component';

export const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'user/:id',
    component: UserDetailsComponent,
  },

  { path: '**', redirectTo: '/users', pathMatch: 'full' },
];
