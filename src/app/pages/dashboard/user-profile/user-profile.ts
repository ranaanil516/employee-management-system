import { Component } from '@angular/core';
import { User } from '../../../shared/models/user';


@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.html',
  styleUrl: './user-profile.css',
})
export class UserProfile {

  isActive :boolean= true;
  isEditing: boolean = false;
  users: User[] = [
    {id:1, name:'A', role:'Sr Lead', email:'A@test.com', expr:'10', location:'Pune',image:'/logo.png',active:true,skill:'Angular'},
    {id:2, name:'B', role:'Lead', email:'B@test.com', expr:'9', location:'Mumbai',image:'/logo.png',active:true,skill:'React'},
    {id:3, name:'C', role:'Dev', email:'C@test.com', expr:'8', location:'Nagpur',image:'/logo.png',active:false,skill:'Extjs'},
    {id:4, name:'D', role:'Architecture', email:'D@test.com', expr:'7', location:'Banglore',image:'/logo.png',active:true,skill:'Java'},
    {id:5, name:'E', role:'Sr Dev', email:'E@test.com', expr:'6', location:'NY',image:'/logo.png',active:true,skill:'Python'}
  ];

  editUserProfile(user:User){
    if(user.active)
      console.log(user);
    
  }
}
