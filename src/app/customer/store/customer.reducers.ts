
import { Customer } from "../model/customer.model";
import * as CustomerActions from './customer.actions';

export interface State {
    customers: Customer[];
    editedCustomer: Customer;
  }

const initialState: State = {
    customers: [],
    editedCustomer:null
  };
  

export function customerReducer(state = initialState, action : CustomerActions.CustomerActions) {
switch(action.type) {
    case CustomerActions.CUSTOMER_CREATED:
        return  {
            ...state,
            customers : [...state.customers, action.payload]
        };  

        case CustomerActions.CUSTOMER_UPDATED:
        const customerIndex =  state.customers
            .findIndex(c=>c.id == action.payload.id);
        const customer = state.customers[customerIndex];
        const updatedCustomer = {
            ...customer,
            ...action.payload
        };
        const customersUpdate = [...state.customers];
        customersUpdate[customerIndex] = updatedCustomer;
        return  {
            ...state,
            customers : customersUpdate
        };
        case CustomerActions.CUSTOMER_DELETED:
        const customersDelete = [...state.customers];
        const indexToDelete = customersDelete
            .findIndex(c=>c.id == action.payload);
        customersDelete.splice(indexToDelete,1);
        return  {
            ...state,
            customers : customersDelete
        };

        case CustomerActions.START_EDIT_CUSTOMER:
        const editedIndex = state.customers
            .findIndex(c=>c.id == action.payload);
        const editedCustomer = {...state.customers[editedIndex]};
        return  {
            ...state,
            editedCustomer : editedCustomer
        };

        case CustomerActions.STOP_EDIT_CUSTOMER:
        return  {
            ...state,
            editedCustomer : null
        }

        case (CustomerActions.SET_CUSTOMERS):
        return {
          ...state,
          customers: [...action.payload]
        };
        default:
        return state;
    }
    

}