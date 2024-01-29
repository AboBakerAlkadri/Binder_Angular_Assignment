import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlistKey = 'WISHLIST';

  addToWishlist(course: any): void {
    let wishlist = this.getWishlist();
    wishlist.push(course);
    localStorage.setItem(this.wishlistKey, JSON.stringify(wishlist));

  }

  getWishlist(): any[] {
    let wishlistJSON = localStorage.getItem(this.wishlistKey);
    if (wishlistJSON) {
      return JSON.parse(wishlistJSON);
    }
    return [];
  }
}
