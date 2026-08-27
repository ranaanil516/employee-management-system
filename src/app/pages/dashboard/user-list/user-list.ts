import { AfterViewInit, Component, QueryList, ViewChild, viewChild, ViewChildren } from '@angular/core';
import { User } from '../../../shared/models/user';
import { UserAction, UserCard } from "../user-card/user-card";
import { UserPanel } from '../user-panel/user-panel';
import { UserPanelDirective } from '../user-panel/user-panel-directive';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-list',
  imports: [UserCard, UserPanel, UserPanelDirective],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList implements AfterViewInit{

  isActive :boolean= true;
  isEditing: boolean = false;
  userId:number=0;
  selectedUser!: User;
  @ViewChild(UserCard) card !: UserCard;
  @ViewChildren(UserCard) cards !: QueryList<UserCard>;
  private cardsSubscription?: Subscription;

  users: User[] = [
    {id:1, name:'A', role:'Sr Lead', email:'A@test.com', experience:10, location:'Pune',image:'/logo.png',status:'Active', joined:new Date('2026-08-25'), salary: 300000, skills:['Angular','React','Java']},
    {id:2, name:'B', role:'Lead', email:'B@test.com', experience:9, location:'Mumbai',image:'/logo.png',status:'Inactive', joined:new Date('2026-08-25'), salary: 300000,skills:['React']},
    {id:3, name:'C', role:'Dev', email:'C@test.com', experience:8, location:'Nagpur',image:'/logo.png',status:'Inactive', joined:new Date('2026-08-25'), salary: 300000,skills:['Extjs']},
    {id:4, name:'D', role:'Architecture', email:'D@test.com', experience:6, location:'Banglore',image:'/logo.png',status:'Active',joined:new Date('2026-08-25'), salary: 300000,skills:['Java']},
    {id:5, name:'E', role:'Sr Dev', email:'E@test.com', experience:6, location:'NY',image:'/logo.png',status:'Active',joined:new Date('2026-08-25'), salary: 300000, skills:['Python']}
  ];

  constructor() {
    console.log('UserList constructor');
    console.log('card in constructor:', this.card);
  }

  ngAfterViewInit(): void {
    console.log('UserList ngAfterViewInit');

    console.log('First card:', this.card);

    console.log('All cards:', this.cards);

    console.log('Number of cards:', this.cards.length);

    this.cards.forEach((card, index) => {
      console.log(
        'Card index:',
        index,
        'User ID:',
        card.userFromChild.id,
        'Name:',
        card.userFromChild.name
      );
    });
    this.cards.changes.subscribe(() => {
      console.log('UserCard QueryList changed');
      console.log('New count:', this.cards.length);
    });
  }

  editUserProfile(user:User){
    if(user.status == 'Active'){
      this.isEditing = true;
      this.selectedUser = user;
      //this.userId = user.id    
      console.log(this.selectedUser);
    }
  }

  handleAction(obj:UserAction){

    switch (obj.type) {
      case 'edit':
        //console.log('edit'+ obj.user);
        this.editUserProfile(obj.user);
        
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

  resetAllCards(): void {

    console.log('Total cards:', this.cards.length);

    this.cards.forEach((card, index) => {

      console.log(
        `Resetting card ${index + 1}, User ID: ${card.userFromChild.id}`
      );

      card.resetCard();
    });
  }
  changeName() {
    this.users[0].name = 'Anil';

    // this.users[0] = {
    //   ...this.users[0],
    //   name: 'Anil'
    // };
  }
  changeStatus() {

      this.users[0] = {
        ...this.users[0],
        status: this.users[0].status === 'Active'
          ? 'Inactive'
          : 'Active'
      };
      //this.users[0].status = this.users[0].status === 'Active' ? 'Inactive' : 'Active';
      // this.users[0] = {
      //   ...this.users[0],
      //   status: this.users[0].status
      // };
      // console.log('.............');
      // console.log(this.users[0].status);
      //this.card.markCardForCheck();
      
      
  }
  changeUserName() {
    this.users[0].name = 'Anil';
    this.card.markCardForCheck();
    console.log('After markForCheck');
    
  }

  detectCardChanges(){
    this.card.detectCardChanges();
    console.log('After detectChanges');
  }

  addUser(): void {
    const newUser: User = {
      id: this.users.length + 1,
      name: `New User ${this.users.length + 1}`,
      role: 'Developer',
      email: `user${this.users.length + 1}@test.com`,
      experience: 5,
      location: 'Pune',
      salary: 300000,
      image: '/logo.png',
      status: 'Active',
      joined: new Date('2026-08-25'),
      skills: ['Angular']
    };

    this.users.push(newUser);
  }

  removeLastUser(): void {
    this.users.pop();
  }
}
