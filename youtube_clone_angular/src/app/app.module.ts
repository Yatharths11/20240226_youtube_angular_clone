import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { SettingsComponent } from './settings/settings.component';
import { PopAccountComponent } from './pop-account/pop-account.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftSidebarComponent,
    RecommendationsComponent,
    SettingsComponent,
    PopAccountComponent,
    SubscriptionsComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
