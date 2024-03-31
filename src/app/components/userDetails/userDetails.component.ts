import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, HttpClientModule],
  templateUrl: './userDetails.component.html',
  styleUrl: './userDetails.component.css',
})
export class UserDetailsComponent {
  // public userDetails$ = this.usersService.userDetails;
  // constructor(private usersService: UsersService) {}
}
