import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../../wishlist.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wishlist',  // The component's HTML element
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',  // The HTML template file
  styleUrls: ['./wish-list.component.css']  // The CSS stylesheet for the component
})
export class WishlistComponent implements OnInit {
  wishlistItems: any[] = [];

  constructor(private wishlistService: WishlistService) { }

  private wishlistKey = 'WISHLIST';

  getWishlist(): any[] {
    let wishlistJSON = localStorage.getItem(this.wishlistKey);
    if (wishlistJSON) {
      return JSON.parse(wishlistJSON);
    }
    return [];
  }

  ngOnInit() {
    this.wishlistItems = this.getWishlist();

    setInterval(() => {
      localStorage.removeItem(this.wishlistKey);
    }, 6500000)
  }
}
