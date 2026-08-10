import { Component } from '@angular/core';
import { UserProfile } from "./user-profile/user-profile";

@Component({
  selector: 'app-dashboard',
  imports: [UserProfile],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
