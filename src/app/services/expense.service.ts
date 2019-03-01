import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  // public expenses = [
  //     {id: 1, type: 'meal', description: 'Dinner with a client', cost: 75 },
  //     {id: 2, type: 'meal', description: 'Lunch at airport', cost: 15 },
  //     {id: 3, type: 'lodging', description: 'Hotel at convention', cost: 200 }]
  public expenses = []
  public selectedExpense: any;
  ref = firebase.database().ref('expenses/');

  constructor() {
    this.ref.on('value', resp => {
      this.expenses = [];
      this.expenses = snapshotToArray(resp);
      console.log(this.expenses);
    });
  }

  addExpense(expense) {
    expense['user'] = firebase.auth().currentUser.email;
    return firebase.database().ref('expenses/').push(expense);
  }
}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });
  // console.log(returnArr);
  return returnArr;
};
