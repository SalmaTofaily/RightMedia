import { Component, OnInit } from '@angular/core';
import {User} from './models/users.model';

@Component({
  selector: 'app-account-manager',
  templateUrl: './account-manager.component.html',
  styleUrls: ['./account-manager.component.sass']
})
export class AccountManagerComponent implements OnInit {

   users:User[] | undefined;
   myUser: User | undefined;
  constructor() { }

  ngOnInit(): void {
    let u1:User = new User ();
    u1.Id="id";

    this.users?.push(u1);
    this.myUser=u1;
    this.myUser= new User();
    this.myUser.Email="test@gmail.com";

  }

}
