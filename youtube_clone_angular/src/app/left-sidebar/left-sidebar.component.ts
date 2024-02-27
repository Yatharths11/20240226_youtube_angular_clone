import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {
  icons = [
    {icon:"ri-home-fill icon",text:"Home"},
    {icon:"ri-play-fill icon",text:"Shorts"},
    {icon:"ri-inbox-line icon",text:"Subscriptions"},
    {icon:"ri-play-list-2-fill icon",text:"You"}
  ]
}
