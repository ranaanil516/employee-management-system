import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../shared/models/user';

export interface UserAction{
  type: 'edit'| 'delete' | 'view' | 'reset',
  user: User
};


@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})

export class UserCard {
  @Input() userFromChild !: User ;
  @Output() editProfile = new EventEmitter<User>();
  @Output() action = new EventEmitter<UserAction>();

  userId:number=0;
  isEditing:boolean =false;

  onEdit(){
    //if(user.status){
      this.editProfile.emit(this.userFromChild);  
    //}
  }
  editAction(){
    this.action.emit({
      type:'edit', user: this.userFromChild
    });
  }
  deleteAction(){
    this.action.emit({
      type:'delete', user: this.userFromChild
    });
  }

  resetAction(){
    this.action.emit({
      type: 'reset',
      user:this.userFromChild
    });
  }

  resetCard() {
    this.isEditing = false;
    //this.userFromChild.status = 'Active'

  }
}
