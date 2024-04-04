import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../types/ITodo';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly url = 'https://jsonplaceholder.typicode.com/';

  public readonly entities$ = new BehaviorSubject<IUser[]>([]);
  public readonly userDetails$ = new BehaviorSubject<IUser>({} as IUser);

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute
  ) {
    this.getUsers();
  }

  getUser(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];

      this.http.get<IUser>(`${this.url}users/${id}`).subscribe((user) => {
        this.userDetails$.next(user);
      });
    });
  }

  getUsers(): void {
    this.http.get<IUser[]>(`${this.url}users`).subscribe((users) => {
      this.entities$.next(users);
    });
  }

    creatUser(user: IUser): void {
      this.http.post<IUser> ('https://jsonplaceholder.typicode.com/users', user).subscribe((user: IUser) => {
      this.entities$.next([...this.entities$.value, user]);
    }) ;
    }

  deleteUser(userToDelete: IUser): void {
    this.http.delete<IUser>(`${this.url}/${userToDelete.id}`).subscribe(() => {
      this.entities$.next(
        this.entities$.value.filter((user) => user.id !== userToDelete.id)
      );
    });
  }
}
