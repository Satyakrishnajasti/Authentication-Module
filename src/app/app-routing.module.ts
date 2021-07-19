import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth-guard/auth.guard';
import { ExpenseComponent } from './expense/expense.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: 'expense', component: ExpenseComponent, canActivate: [AuthGuard]
  },
  {
    path: '', redirectTo: 'expense', pathMatch: 'full'
  },

  {
    path: '**', redirectTo: 'expense', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
