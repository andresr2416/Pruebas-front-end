import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { AngularMaterialModule } from 'src/app/shared/angular-material.module';



@NgModule({
  declarations: [
    DashboardComponent
    
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
