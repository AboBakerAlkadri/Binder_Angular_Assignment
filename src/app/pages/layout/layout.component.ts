import { Component } from '@angular/core';
import { AppBarComponent } from '../../components/appBar/appBar.component';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { CourseDetailsComponent } from '../../components/course-details/course-details.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { LoginComponent } from '../../components/login/login.component'
import { ActivatedRoute, Router, NavigationEnd, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [AppBarComponent, CourseCardComponent, CourseDetailsComponent, ProfileComponent, RouterOutlet, LoginComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
  currentRoute: string | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {
    // Listen for route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url; // Store the current route URL
      }
    });
  }
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
}
