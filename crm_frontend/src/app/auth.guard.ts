import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      // Check if the user is logged in
      return true; // Allow access if logged in
    } else {
      // Redirect to login page if not logged in
      this.toastr.warning('Please login to access this page', 'Unauthorized');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
