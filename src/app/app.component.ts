import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as CustomersActions from './customer/store/customer.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store:Store<{customers}>) {}
  ngOnInit(): void {
    this.store.dispatch(new CustomersActions.FetchCustomers());
  }


}
