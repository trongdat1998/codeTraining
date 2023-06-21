import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
 
// Guard được sử dụng để ngăn người dùng không có quền truy cập đến các routes bị hạn chế,
//  nó được sử dụng trong app.routing.ts.

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }
 
    canActivate() {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
 
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }
}
