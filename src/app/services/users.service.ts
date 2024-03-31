import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../types/ITodo';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly url = 'https://jsonplaceholder.typicode.com/';

  public readonly entities$ = new BehaviorSubject<IUser[]>([]);
  public readonly userDetails = new BehaviorSubject<IUser>({} as IUser);

  constructor(private http: HttpClient) {
    this.getUsers();
  }
  getUser(id: number):  {
    const user = this.entities$.value.find((user) => user.id === id);
    if (user) {
      this.userDetails.next(user);
      return user;
    }
    // this.http.get<IUser>(`${this.url}/user/${id}`).subscribe((user) => {
    //   this.userDetails.next(user);
    // });
    // return user as Observable<IUser>;
  }

  getUsers(): void {
    this.http.get<IUser[]>(`${this.url}/users`).subscribe((users) => {
      this.entities$.next(users);
    });
  }

  //   creatUser(user: IUser) {
  //     return this.http.post('https://jsonplaceholder.typicode.com/users', user);
  //   }

  deleteUser(userToDelete: IUser): void {
    this.http.delete<IUser>(`${this.url}/${userToDelete.id}`).subscribe(() => {
      this.entities$.next(
        this.entities$.value.filter((user) => user.id !== userToDelete.id)
      );
    });
  }
}
