import { Component } from '@angular/core';
import { LayoutComponent } from './pages/layout/layout.component';
import { AppBarComponent } from './components/appBar/appBar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LayoutComponent, AppBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router) { }
  ngOnInit() {
    this.router.navigate(['courses']);
  }

}
