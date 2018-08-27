import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MateriallModule } from './material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing-models';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { WorkoutComponent } from './workout/workout.component';
import { CurrentComponent } from './workout/current/current.component';
import { PastComponent } from './workout/past/past.component';
import { NewComponent } from './workout/new/new.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    WorkoutComponent,
    CurrentComponent,
    PastComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MateriallModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
