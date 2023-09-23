import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Signup } from '../datatype';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerLogedIn = new BehaviorSubject<boolean>(false)
  constructor(private http: HttpClient, private router: Router) { }

  url = "http://localhost:3000/seller"

  userSignUp(data: Signup) {
    console.log("seller log")
    return this.http.post(this.url, data, { observe: 'response' })
      .subscribe((result) => {
        if (result) {
          this.isSellerLogedIn.next(true);
          localStorage.setItem('user', JSON.stringify(result.body));
          this.router.navigate(['/']);
        }
      });

  }

  userLogin()
  {
    
  }
}
