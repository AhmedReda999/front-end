import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule for template-driven forms
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HTTP requests

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';

import { LoginService } from './servicess/login.service'; // LoginService for authentication
import { DashboardService } from './servicess/dashboard.service'; // DashboardService for dashboard management
import { DataService } from './servicess/data.service'; // DataService for shared data

import { LoginGuard } from './guards/login.guard'; // Auth guard for route protection

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    ServicesComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Include the routing module
    FormsModule, // Forms module for two-way data binding
    HttpClientModule // HTTP Client module for making API requests
  ],
  providers: [
    LoginService, // Registering services
    DashboardService,
    DataService,
    LoginGuard // Registering the login guard
  ],
  bootstrap: [AppComponent] // Bootstrapping the main component
})
export class AppModule { }
