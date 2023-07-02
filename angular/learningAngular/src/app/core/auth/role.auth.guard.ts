import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RoleAuthGuard implements CanActivate {
  constructor(public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot) {
    alert("dat")
    const expectedRole = route.data['expectedRole']  ;
    const token = localStorage.getItem('token');
    return true;
  }
}
