import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MainComponent,

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent,
        children:[
          {
            path:'',
            loadChildren:() => import ('./main/dashboard/dashboard.module').then(m=>m.DashboardModule)
          }
        ]
      }
    ])
  ],

  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class HomeModule { }
