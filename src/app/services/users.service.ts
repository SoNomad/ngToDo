import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../types/ITodo';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly url = 'https://jsonplaceholder.typicode.com/users';
  public readonly _userSubject$ = new BehaviorSubject<IUser[]>([]);
  public readonly users$ = this._userSubject$.asObservable();

  constructor(private http: HttpClient) {
    this.getUsers();
  }

  getUsers(): void {
    this.http.get<IUser[]>(this.url).subscribe((users) => {
      this._userSubject$.next(users);
    });
  }

  //   getUser(id: number) {
  //     return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
  //   }

  //   creatUser(user: IUser) {
  //     return this.http.post('https://jsonplaceholder.typicode.com/users', user);
  //   }

  deleteUser(userToDelete: IUser): void {
    this.http.delete<IUser>(`${this.url}/${userToDelete.id}`).subscribe(() => {
      this._userSubject$.next(
        this._userSubject$.value.filter((user) => user.id !== userToDelete.id)
      );
    });
  }
}
