import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth-services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: AuthService) { }



  ngOnInit(): void {

  }

}
