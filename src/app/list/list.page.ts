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
  items = this.expenseService.expenses;

  constructor( private userService: UserService,
               // private storage: Storage,
               private expenseService: ExpenseService,
               private navCtrl: NavController ) {
  }


  ngOnInit() {

  }

  onSelect(expense) {
    // this.navCtrl.navigateForward('/expense-detail');
    this.navCtrl.navigateForward(['/expense-detail', { expense: expense }]);
  }

  newExpense() {
    this.navCtrl.navigateForward('/expense-new');
  }

}
