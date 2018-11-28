import { Component } from '@angular/core';
import { Customer } from 'src/app/customer/model/customer.model';
import { Store } from '@ngrx/store';
import * as CustomersActions from '../store/customer.actions';
import { OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject } from '@angular/core';

@Component({
  selector: 'customer-details',
  templateUrl: 'customer-details.component.html',
  styleUrls: ['customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  
  private _isNewCustomer: boolean;

  customer : Customer;
  
  constructor(private store:Store<{customers}>,public dialogRef: MatDialogRef<CustomerDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any){
  }

  ngOnInit(): void {
    this.store.select(c=>c.customers).subscribe(data=> {
      if(data.editedCustomer!=null) {
        this._isNewCustomer = false;
        this.customer = data.editedCustomer;
      }

      else {
        this._isNewCustomer = true;
        this.customer = new Customer();
      }
    })
  }
  
   onSubmit() {
    if(this._isNewCustomer) {
     this.store.dispatch(new CustomersActions.CreateCustomer(this.customer));
    }

    else {
      this.store.dispatch(new CustomersActions.UpdateCustomer(this.customer));
    }
    this.dialogRef.close({isEdit:!this._isNewCustomer});
   
   }

   onCancelClick(): void {
    this.dialogRef.close();
  }
}