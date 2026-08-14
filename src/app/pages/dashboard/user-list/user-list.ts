import { Component, QueryList, ViewChild, viewChild, ViewChildren } from '@angular/core';
import { User } from '../../../shared/models/user';
import { UserAction, UserCard } from "../user-card/user-card";


@Component({
  selector: 'app-user-list',
  imports: [UserCard],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {

  isActive :boolean= true;
  isEditing: boolean = false;
  userId:number=0;

@ViewChild(UserCard) card !: UserCard;
@ViewChildren(UserCard) cards !: QueryList<UserCard>;

  users: User[] = [
    {id:1, name:'A', role:'Sr Lead', email:'A@test.com', experience:10, location:'Pune',image:'/logo.png',status:'Active',skills:['Angular','React','Java']},
    {id:2, name:'B', role:'Lead', email:'B@test.com', experience:9, location:'Mumbai',image:'/logo.png',status:'Inactive',skills:['React']},
    {id:3, name:'C', role:'Dev', email:'C@test.com', experience:8, location:'Nagpur',image:'/logo.png',status:'Inactive',skills:['Extjs']},
    {id:4, name:'D', role:'Architecture', email:'D@test.com', experience:6, location:'Banglore',image:'/logo.png',status:'Active',skills:['Java']},
    {id:5, name:'E', role:'Sr Dev', email:'E@test.com', experience:6, location:'NY',image:'/logo.png',status:'Active',skills:['Python']}
  ];

  
  editUserProfile(user:User){
    if(user.status == 'Active'){
      this.isEditing = true;
      this.userId = user.id    
         console.log(user);
    }
  }
  handleAction(obj:UserAction){

    switch (obj.type) {
      case 'edit':
        console.log('edit'+ obj.user);
        
        break;
      case 'delete':
          console.log('delete- '+obj.user);
        
        break;
      case 'reset':
          console.log('reset- '+obj.user);
          
        
        break;  
      default:
        console.log('default');
        
        break;
    }
  }

  resetAllCards(){
    this.cards.forEach(card =>{
      card.resetCard();
    })
  }

  // resetCard(){
  //   if (this.isEditing == false) {
  //     this.isEditing = true;
  //   }
  // }
}
