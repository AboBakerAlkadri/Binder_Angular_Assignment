import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';



@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './appBar.component.html',


  styleUrl: './appBar.component.css'
})
export class AppBarComponent {
  navbarOpen = false;
  navItems = [
    { name: 'Company', icon: 'fas fa-tachometer-alt', route: '/company' },
    { name: 'Courses', icon: 'far fa-address-book', route: '/courses' },
    { name: 'Wishlist', icon: 'far fa-address-book', route: '/wish-list' },
    { name: 'Cart Details', icon: 'far fa-address-book', route: '/cart-details' },

  ];

  activeItem: any = null;
  searchAttribute: any = '';

  @ViewChild('navbar') navbar!: ElementRef;
  @ViewChild('selector') selector!: ElementRef;

  constructor(private renderer: Renderer2, private router: Router) { }

  ngOnInit() {

  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  setActive(item: any) {
    this.activeItem = item;
    this.updateSelectorPosition();
  }

  isActive(item: any): boolean {
    return this.activeItem === item;
  }

  navigate(item: any): any {
    this.router.navigate([item]);

  }

  private searchAttributeSource = new BehaviorSubject<string>('');
  currentSearchAttribute = this.searchAttributeSource.asObservable();

  changeSearchAttribute(attribute: string) {
    this.searchAttributeSource.next(attribute);
  }

  searchNavigate(): any {
    this.router.navigate(['courses', { searchAttribute: this.searchAttribute }]);
    this.changeSearchAttribute(this.searchAttribute)
  }



  updateSelectorPosition() {
    if (!this.activeItem || !this.selector || !this.navbar) {
      return;
    }

    const activeElement = this.navbar.nativeElement.querySelector('.active');
    if (activeElement) {
      const position = activeElement.getBoundingClientRect();
      const navbarPosition = this.navbar.nativeElement.getBoundingClientRect();

      this.renderer.setStyle(this.selector.nativeElement, 'top', position.top - navbarPosition.top + 'px');
      this.renderer.setStyle(this.selector.nativeElement, 'left', position.left - navbarPosition.left + 'px');
      this.renderer.setStyle(this.selector.nativeElement, 'width', position.width + 'px');
      this.renderer.setStyle(this.selector.nativeElement, 'height', position.height + 'px');
    }
  }
}


