import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../types/ITodo';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

    private readonly _userSubject$ = new BehaviorSubject<IUser[]>([])
    public readonly users$ = this._userSubject$.asObservable()

  getUsers(): Observable<BehaviorSubject<IUser[]>> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getUser(id: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
  }

  creatUser(user: IUser) {
    return this.http.post('https://jsonplaceholder.typicode.com/users', user);
  }

  deleteUser(id: number) {
    return this.http.delete('https://jsonplaceholder.typicode.com/users/' + id);
  }
}
