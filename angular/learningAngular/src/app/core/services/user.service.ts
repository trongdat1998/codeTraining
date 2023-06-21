import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private AuthService: AuthService) {
}

// getUsers(): Observable<User[]> {
//     // add authorization header with jwt token
//     let headers = new Headers({ 'Authorization': 'Bearer ' + this.AuthService.token });
//     let options = new RequestOptions({ headers: headers });

//     // get users from api
//     return this.http.get('/api/users', options)
//         .pipe(map(response) => response.json());
// }
}
