import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.service.logout();
    this.router.navigate(['auth/login']);
  }

}
