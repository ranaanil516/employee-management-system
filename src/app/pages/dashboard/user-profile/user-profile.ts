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
  userId:number=0;
  users: User[] = [
    {id:1, name:'A', role:'Sr Lead', email:'A@test.com', experience:10, location:'Pune',image:'/logo.png',status:'Active',skills:['Angular','React','Java']},
    {id:2, name:'B', role:'Lead', email:'B@test.com', experience:9, location:'Mumbai',image:'/logo.png',status:'Inactive',skills:['React']},
    {id:3, name:'C', role:'Dev', email:'C@test.com', experience:8, location:'Nagpur',image:'/logo.png',status:'Inactive',skills:['Extjs']},
    {id:4, name:'D', role:'Architecture', email:'D@test.com', experience:6, location:'Banglore',image:'/logo.png',status:'Active',skills:['Java']},
    {id:5, name:'E', role:'Sr Dev', email:'E@test.com', experience:6, location:'NY',image:'/logo.png',status:'Active',skills:['Python']}
  ];

  editUserProfile(user:User){
    if(user.status)
      this.isEditing = true;
      this.userId = user.id
      console.log(user);
    
  }
}
