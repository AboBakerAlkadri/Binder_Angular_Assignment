import { Component, SimpleChanges } from '@angular/core';
import { OnInit } from '@angular/core';
import data from '../../../api/data.json';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../../wishlist.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {

  constructor(private wishlistService: WishlistService, private activatedRoute: ActivatedRoute, private router: Router, private route: ActivatedRoute) {

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
    this.router.navigate(['course-details', { id: course.id }]);
  }


  addToWishlist(course: any): void {
    let wishlist = this.getWishlist();
    wishlist.push(course);
    localStorage.setItem(this.wishlistKey, JSON.stringify(wishlist));
  }

  myData: any = data;
  searchAttribute: any = '';


  private searchAttributeSource = new BehaviorSubject<string>('');
  currentSearchAttribute = this.searchAttributeSource.asObservable();


  ngOnInit() {
    /*this.myData = this.activatedRoute.queryParams.subscribe(params => {
      this.searchAttribute = params['searchAttribute'] || '';
      this.getSearchedCourses(this.searchAttribute);
    });*/
  }


  getSearchedCourses(searchAttribute: any) {

    if (searchAttribute) {
      this.myData = data.find((value) => {
        return value.courseName.matchAll(searchAttribute)
      })
      const a = 2
    }
    else {

    }

  }
}


