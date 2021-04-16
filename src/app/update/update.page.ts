import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';
import { HomePage } from '../home/home.page';
import { SignupPage } from '../signup/signup.page';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  tour = null;
  constructor(
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'SignIn or Create Account',
      cssClass: 'my-custom-class',
      buttons: [
        {
          text: 'LogIn',
          icon: 'log-in-outline',
          handler: () => {
            this.presentLogIn();
          },
        },
        {
          text: 'SignUp',
          icon: 'log-out-outline',
          handler: () => {
            this.presentSignUp();
          },
        },
      ],
    });
    await actionSheet.present();
  }

  async presentLogIn() {
    const modal = await this.modalCtrl.create({
      component: HomePage,
      componentProps: this.tour,
    });
    modal.present();
  }

  async presentSignUp() {
    const modal = await this.modalCtrl.create({
      component: SignupPage,
      componentProps: this.tour,
    });
    modal.present();
  }
}
