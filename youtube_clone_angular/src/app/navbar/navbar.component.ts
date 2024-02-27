import { Component } from '@angular/core';
import { PopAccountComponent } from '../pop-account/pop-account.component';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // menuIcon = fabars
  // dragDownOpen = false;
  // openAccountDropdown(){
  //   this.dragDownOpen = !this.dragDownOpen
  //   const popup = document.querySelector(".popup_container")
  //   if(this.dragDownOpen){
  //     console.log(popup?.classList)
  //     popup?.classList.add("show")
  //   }else{
  //     popup?.classList.remove("show")
  //   }
    
  // }



  

  isButtonVisible: boolean = false; // Set it based on your condition



  makevisible(){
    this.isButtonVisible=!this.isButtonVisible // Set it based on your condition
  }

  popup_contents = [
    {
      icon: "bi bi-google",
      text: "Google Acount"
    },
    {
      icon: "bi bi-person-add",
      text: "Switch Account"
    },
    {
      icon: "bi bi-box-arrow-in-right",
      text: "Sign Out"
    }
  ]
}
