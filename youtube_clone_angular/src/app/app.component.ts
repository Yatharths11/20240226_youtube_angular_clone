import { Component } from '@angular/core';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component'; 
import { RecommendationsComponent } from './recommendations/recommendations.component'; 
import { NavbarComponent } from './navbar/navbar.component'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'youtube_clone_angular';
}
