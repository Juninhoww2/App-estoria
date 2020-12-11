import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor() { }

  onToggleColorTheme(event) {
    console.log(event.detail.checked);
    if  (event.detail.checked){
      document.body.setAttribute('color-theme',  'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }

  ngOnInit() {
  }

}