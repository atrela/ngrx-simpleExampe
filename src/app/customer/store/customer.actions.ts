
import { Action } from '@ngrx/store';
import { Customer } from '../model/customer.model';

export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER';
export const CREATE_CUSTOMER = 'CREATE_CUSTOMER';
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';
export const START_EDIT_CUSTOMER = 'START_EDIT_CUSTOMER';
export const STOP_EDIT_CUSTOMER = 'STOP_EDIT_CUSTOMER';
export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS';
export const SET_CUSTOMERS = 'SET_CUSTOMERS';
export const CUSTOMER_UPDATED= 'CUSTOMER_UPDATED';
export const CUSTOMER_CREATED= 'CUSTOMER_CREATED';
export const CUSTOMER_DELETED= 'CUSTOMER_DELETED';


export class UpdateCustomer implements Action {
  readonly type = UPDATE_CUSTOMER;
  constructor(public payload: Customer) { }
}

export class CreateCustomer implements Action {
    readonly type = CREATE_CUSTOMER;
    constructor(public payload: Customer) { }
  }

  
export class DeleteCustomer implements Action {
    readonly type = DELETE_CUSTOMER;
    constructor(public payload: string) { }
  }

    
export class StartEditCustomer implements Action {
  readonly type = START_EDIT_CUSTOMER;
  constructor(public payload: string) { }
}

export class StopEditCustomer implements Action {
  readonly type = STOP_EDIT_CUSTOMER; 
}

export class FetchCustomers implements Action {
  readonly type = FETCH_CUSTOMERS
  
}
  
export class SetCustomers implements Action {
  readonly type = SET_CUSTOMERS
  constructor(public payload: Customer[]) {}
}

export class CustomerUpdated implements Action {
  readonly type = CUSTOMER_UPDATED
  constructor(public payload:Customer) {}
}

export class CustomerCreated implements Action {
  readonly type = CUSTOMER_CREATED
  constructor(public payload:Customer) {}
}

export class CustomerDeleted implements Action {
  readonly type = CUSTOMER_DELETED
  constructor(public payload:string) {}
}

export type CustomerActions =
CreateCustomer |
CustomerCreated |
UpdateCustomer |
CustomerUpdated |
DeleteCustomer |
CustomerDeleted |
StartEditCustomer |
StopEditCustomer |
FetchCustomers |
SetCustomers;

 