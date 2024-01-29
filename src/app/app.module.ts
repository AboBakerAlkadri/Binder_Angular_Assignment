import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppBarComponent } from './components/appBar/appBar.component';
import { CourseCardComponent } from './components//course-card/course-card.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { WishlistComponent } from './components/wish-list/wish-list.component';






@NgModule({
    declarations: [
        AppComponent,
        AppBarComponent,
        CourseCardComponent,
        CourseDetailsComponent,
        ProfileComponent,
        LoginComponent,
        WishlistComponent
        // other components
    ],
    imports: [
        BrowserModule,
        RouterModule,
        CommonModule,
        AngularFontAwesomeModule,
        FormsModule,
        RouterModule.forRoot(routes),
        // other modules
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }

