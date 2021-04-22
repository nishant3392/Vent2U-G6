import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home',
    },
    {
      title: 'Update',
      url: '/update',
      icon: 'sync',
    },
    {
      title: 'Feedback',
      url: '/feedback',
      icon: 'chatbubble',
    },
    {
      title: 'Preferences',
      url: '/preferences',
      icon: 'cog',
    },
    {
      title: 'Reviews',
      url: '/review',
      icon: 'star',
    },
    {
      title: 'Check Out',
      url: '/landing',
      icon: 'exit',
      component: 'button',
    },
  ];

  constructor(private platform: Platform, private router: Router) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.router.navigateByUrl('landing');
    });
  }
}
