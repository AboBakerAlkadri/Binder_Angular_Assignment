import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WishlistComponent } from './components/wish-list/wish-list.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { CourseCardComponent } from './components/course-card/course-card.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'wish-list', component: WishlistComponent },
    { path: 'course-details', component: CourseDetailsComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'courses', component: CourseCardComponent },
    { path: 'homepage', component: LayoutComponent },
    { path: '', redirectTo: '/homepage', pathMatch: 'full' }
    // { path: 'dashboard', component: DashboardComponent },
];


