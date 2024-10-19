import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';

import { LoginGuard } from './guards/login.guard'; // Guard for dashboard route protection

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home if no path is provided
  { path: 'home', component: HomeComponent },            // Home route
  { path: 'login', component: LoginComponent },          // Login route
  { path: 'dashboard', component: DashboardComponent, canActivate: [LoginGuard] }, // Protected dashboard route
  { path: 'services', component: ServicesComponent },    // Services route
  { path: 'skills', component: SkillsComponent },        // Skills route
  { path: 'education', component: EducationComponent },  // Education route
  { path: 'experience', component: ExperienceComponent },// Experience route
  { path: 'contact', component: ContactComponent },      // Contact route
  { path: '**', redirectTo: '/home' }                    // Wildcard route for unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
