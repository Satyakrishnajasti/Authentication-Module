import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: AuthService, private router: Router) { }

  login!: FormGroup;

  userName!: string;
  password!: string;

  ngOnInit(): void {
    this.login = this.fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  hide = true;

  get field() {
    return this.login.controls;
  }

  formFieldValidator(val: string) {
    return this.login.get(val)?.invalid || this.login.get(val)?.untouched;
  }



  onClickSubmit(data: any) {
    if (this.login.invalid) return
    this.userName = data.userName;
    this.password = data.password;

    console.log("Login page " + this.userName);
    console.log("Login page " + this.password);

    this.service.login(this.userName, this.password).subscribe(
      data => {
        console.log("Is Login Success " + data);

        if (data) this.router.navigate(['/expense']);
      });
  }



}
