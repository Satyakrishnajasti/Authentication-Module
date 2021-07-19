import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth/auth-services/auth.service';

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      },
      {
        path: '', redirectTo: 'login', pathMatch: 'full'
      },

      {
        path: '**', redirectTo: 'logout', pathMatch: 'full'
      }
    ])
  ],
  providers: [AuthService]
})
export class AuthModule { }
