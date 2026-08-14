import { Component } from '@angular/core';
import { UserList } from "./user-list/user-list";
import { UserCard } from "./user-card/user-card";
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-dashboard',
  imports: [UserList],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {


}
