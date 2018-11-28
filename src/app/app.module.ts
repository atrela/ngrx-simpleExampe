import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { customerReducer }  from './customer/store/customer.reducers';
import { CustomerEffects }  from './customer/store/customer.effects';
import { CustomerDetailsComponent } from 'src/app/customer/customer-details/customer-detail.component';
import { CustomerListComponent } from 'src/app/customer/customer-list/customer-list.component';
import { MatDialogModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule } from '@angular/material';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent, 
    CustomerDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    StoreModule.forRoot({customers:customerReducer}),
    EffectsModule.forRoot([CustomerEffects]),
    StoreDevtoolsModule.instrument({})
  ],
  entryComponents: [
    CustomerDetailsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


