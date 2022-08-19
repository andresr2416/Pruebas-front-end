import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from 'src/app/components/login-form/login-form.component';
import { LoginPageComponent } from 'src/app/pages/login-page/login-page.component';
import { AngularMaterialModule } from 'src/app/shared/angular-material.module';
import { RegisterPageComponent } from 'src/app/pages/register-page/register-page.component';

@NgModule({
  declarations: [LoginPageComponent, LoginFormComponent, RegisterPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
})
export class AuthModule {}