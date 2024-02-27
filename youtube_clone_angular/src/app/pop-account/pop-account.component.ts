import { Component } from '@angular/core';

@Component({
  selector: 'app-pop-account',
  templateUrl: './pop-account.component.html',
  styleUrl: './pop-account.component.css'
})
export class PopAccountComponent {
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
