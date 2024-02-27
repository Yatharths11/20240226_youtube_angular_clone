import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    component:HomepageComponent,
    path:''
  },
  {
    component:SettingsComponent,
    path:"settings"
  },
  {
    component:SubscriptionsComponent,
    path:"subscriptions"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
