import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { IUser } from '../../types/ITodo';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterLink, HttpClientModule],
  templateUrl: './users.component.html',
  providers: [UsersService],
  styleUrl: './users.component.css',
})
export class UsersComponent {
  public users$: Observable<IUser[]> = this.usersService.entities$;

  constructor(private usersService: UsersService) {}

  removeUser(user: IUser): void {
    this.usersService.deleteUser(user);
  }
}
