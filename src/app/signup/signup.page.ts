import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor( private userService: UserService,
               private navCtrl: NavController ) { }

  ngOnInit() {
  }

  doSignup() {
    this.navCtrl.navigateBack('/login');
  }

  gotoLogin() {
    this.navCtrl.navigateBack('/login');
  }

}
