import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  sidebarLinks = [
    'Account',
    'Notifications',
    'Playback and performance',
    'Downloads',
    'Privacy',
    'Connected apps',
    'Purchases and memberships',
    'Bills and payments',
    'Advanced settings'
  ];
}
