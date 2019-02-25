import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private userService: UserService,
               public navCtrl: NavController ) { }

  ngOnInit() {
  }

  doLogin() {
    this.userService.signedIn = true;
    this.navCtrl.navigateRoot('/list');
  }

  gotoSignup() {
    this.navCtrl.navigateForward('/signup');
  }

}
