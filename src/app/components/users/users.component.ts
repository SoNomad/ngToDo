import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../../types/ITodo';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit{

    private readonly api = inject(UsersService)

    

  

    ngOnInit(): void {}
}
