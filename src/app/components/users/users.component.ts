import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { IUser } from '../../types/ITodo';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './users.component.html',
  providers: [UsersService],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './users.component.css',
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];
  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.users$.subscribe((users) => {
      this.users = [...this.users, ...users];
    });
  }
  removeUser(user: IUser): void {
    this.usersService.deleteUser(user);
  }
}
