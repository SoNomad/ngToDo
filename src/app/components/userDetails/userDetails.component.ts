import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  providers: [UsersService],
  templateUrl: './userDetails.component.html',
  styleUrl: './userDetails.component.css',
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  public userDetails$ = this.usersService.userDetails$;
  constructor(private usersService: UsersService) {
    usersService.getUser();
  }

  ngOnInit(): void {
    this.userDetails$.subscribe((user) => {
      console.log(user);
    });
  }

  ngOnDestroy(): void {
    this.userDetails$.unsubscribe();
  }
}
