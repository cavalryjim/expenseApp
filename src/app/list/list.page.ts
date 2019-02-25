import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { ExpenseService } from '../services/expense.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  // items = <any>[];
  items = this.expenseService.expenses;

  constructor( private userService: UserService,
               private expenseService: ExpenseService,
               private navCtrl: NavController ) {
  }

  ngAfterViewInit() {
    if (!this.userService.signedIn) {
      console.log('not signed in');
      this.showLogin();
    }
  }

  ngOnInit() {

  }

  showLogin() {
    this.navCtrl.navigateRoot('/login');
  }

  onSelect(expense) {
    this.navCtrl.navigateForward(['/expense-detail', { expense: expense }]);
  }

  newExpense() {
    this.navCtrl.navigateForward('/expense-new');
  }

}
