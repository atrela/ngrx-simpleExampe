import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as CustomersActions from './customer.actions';
import { switchMap ,map } from 'rxjs/operators';
import { Customer } from 'src/app/customer/model/customer.model';
import { ofType } from '@ngrx/effects';
import { environment } from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class CustomerEffects {

    @Effect()
    customersFetch = this.actions.pipe(
    ofType(CustomersActions.FETCH_CUSTOMERS),
    switchMap((action: CustomersActions.FetchCustomers) => {
      return this.httpClient.get<Customer[]>(environment.api.address)
    })).pipe
    (map(
      (data) => {
        return {
          type: CustomersActions.SET_CUSTOMERS,
          payload: data
        };
      }
    ));


    
    @Effect()
    customerCreated = this.actions.pipe(
      ofType(CustomersActions.CREATE_CUSTOMER)).pipe(
      map((action: CustomersActions.CreateCustomer) => {
        return action.payload;
      })).pipe(
      switchMap((newCustomer: Customer) => {
        return this.httpClient
          .post(environment.api.address, newCustomer
            ,{
            headers: new HttpHeaders().set('Content-Type', 'application/json')
          }
        );
      }
      )).pipe(map((data:any) => {
        return {
          type: CustomersActions.CUSTOMER_CREATED,
          payload: data
        };
      }));


      @Effect()
      customerUpdate = this.actions.pipe(
        ofType(CustomersActions.UPDATE_CUSTOMER)).pipe(
        map((action: CustomersActions.UpdateCustomer) => {
          return action.payload;
        })).pipe(
        switchMap((customer: Customer) => {
          return this.httpClient
            .put(`${environment.api.address}/${customer.id}`, customer,{
              headers: new HttpHeaders().set('Content-Type', 'application/json')
            });
        }
        )).pipe(map((data:any) => {
          return {
            type: CustomersActions.CUSTOMER_UPDATED,
            payload: data
          };
        }));

        @Effect()
        customerDelete = this.actions.pipe(
          ofType(CustomersActions.DELETE_CUSTOMER)).pipe(
          map((action: CustomersActions.DeleteCustomer) => {
            return action.payload;
          })).pipe(
          switchMap((id: string) => {
            return this.httpClient
              .delete(`${environment.api.address}/${id}`);
          }
          )).pipe(map((data:any) => {
            return {
              type: CustomersActions.CUSTOMER_DELETED,
              payload: data
            };
          }));

  
    constructor (private actions: Actions,
                private httpClient: HttpClient) {

    }
}