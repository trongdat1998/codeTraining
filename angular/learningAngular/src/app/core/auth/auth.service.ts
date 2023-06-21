import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public token: string = '';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {
    return this.http
      .post<any>('http://localhost:8080/api/auth/login', { username, password })
      .pipe(
        map((response) => {
          // login successful if there's a jwt token in the response
          const token = response.data.token;
          if (token) {
            // set token property
            this.token = token;

            // store username and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem(
              'currentUser', JSON.stringify({ username, token })
            );

            // return true to indicate successful login
            return true;
          } else {
            // return false to indicate failed login
            return false;
          }
        })
      );
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
