import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { Signup } from '../datatype';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  showLogin: boolean=false;
  authError:String='';
constructor(private seller:SellerService, private route:Router){
}  

  signUp(data:Signup){
    // this.seller.userSignUp(data).subscribe((result)=>{
    //   if(result)
    //     this.route.navigate(['']);
    // })
  }

  login(data: Signup): void {
    // this.seller.userLogin(data);
    // this.seller.isLoginError.subscribe((isError)=>{
    //   if(isError){
    //     this.authError="Email or password is not correct";
    //   }
    // })
  }
  openLogin(){
    this.showLogin=true
  }
  openSignUp(){
    this.showLogin=false
  }
}
