import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WishlistService } from '../../wishlist.service';
import data from '../../../api/data.json';

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})

export class CourseDetailsComponent implements OnInit {
  course: any;

  constructor(private wishlistService: WishlistService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id) {
      this.course = data.find((element: any) => { return element.id == id })
      console.log('Course Details:', this.course);
    }
  }

  private wishlistKey = 'WISHLIST';

  getWishlist(): any[] {
    let wishlistJSON = localStorage.getItem(this.wishlistKey);
    if (wishlistJSON) {
      return JSON.parse(wishlistJSON);
    }
    return [];
  }

  navigate(course: any): any {
    this.router.navigate(['course-details'], {
      state: { course: course }
    });

  }


  addToWishlist(course: any): void {
    let wishlist = this.getWishlist();
    wishlist.push(course);
    localStorage.setItem(this.wishlistKey, JSON.stringify(wishlist));
  }

}
