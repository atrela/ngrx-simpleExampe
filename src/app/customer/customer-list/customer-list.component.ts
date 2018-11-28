import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/customer/model/customer.model';
import { MatDialog } from '@angular/material';
import { CustomerDetailsComponent } from 'src/app/customer/customer-details/customer-detail.component';
import * as CustomersActions from '../store/customer.actions';


@Component({
  selector: 'customer-list',
  templateUrl: 'customer-list.component.html',
  styleUrls: ['customer-list.component.css']
})
export class CustomerListComponent implements OnInit{

  customersState$: Observable<{customers: Customer[]}>;
  displayedColumns: string[] = ['firstName', 'lastName', 'actions'];

  constructor(private store:Store<{customers}>, private dialog: MatDialog) {   
  }

  ngOnInit(): void {
    this.customersState$ = this.store.select(c=> c.customers);
  }

  openDialog(){
    let dialogRef = this.dialog.open(CustomerDetailsComponent);

    dialogRef.afterClosed().subscribe(data=> {
      if(data.isEdit)
      this.store.dispatch(new CustomersActions.StopEditCustomer());
    })
  }

  deleteItem(id:string) {
    this.store.dispatch(new CustomersActions.DeleteCustomer(id));
  }

  editItem(id:string) {
    this.store.dispatch(new CustomersActions.StartEditCustomer(id));
    this.openDialog();
  }
  }

