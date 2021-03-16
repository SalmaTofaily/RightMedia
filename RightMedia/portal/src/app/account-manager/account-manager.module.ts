import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountManagerRoutingModule } from './account-manager-routing.module';
import { AccountManagerComponent } from './account-manager.component';


@NgModule({
  declarations: [AccountManagerComponent],
  imports: [
    CommonModule,
    AccountManagerRoutingModule
  ]
})
export class AccountManagerModule { }
