import { Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
  {
    path: 'todo',
    component: TodoComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
];
