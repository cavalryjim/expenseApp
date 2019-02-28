import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.page.html',
  styleUrls: ['./expense-detail.page.scss'],
})
export class ExpenseDetailPage implements OnInit {
  // expense = this.navParams.get('expense');
  constructor(  ) { }

  ngOnInit() {
    // console.log(this.navParams.get('expense');)
  }

}
