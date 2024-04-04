import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  providers: [UsersService],
  templateUrl: './userDetails.component.html',
  styleUrl: './userDetails.component.css',
})
export class UserDetailsComponent {
  public userDetails$ = this.usersService.userDetails$;
  constructor(private usersService: UsersService) {
    usersService.getUser();
  }
}
