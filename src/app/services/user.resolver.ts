import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { IUser } from '../types/ITodo';
import { EMPTY, Observable, catchError } from 'rxjs';
import { UsersService } from './users.service';

export class UserResolver implements Resolve<IUser> {
  constructor(private usersService: UsersService, private router: Router) {}
  resolve(route: ActivatedRouteSnapshot): Observable<IUser> {
    const id = route.params?.['id'];
    if (!id) {
      this.router.navigate(['/users']).catch(() => {}); // Handle potential navigation error
      return EMPTY;
    }
    return this.usersService.getUser(id).pipe(
      catchError(() => {
        this.router.navigate(['/users']).catch(() => {}); // Handle potential navigation error
        return EMPTY;
      })
    );
  }
}
