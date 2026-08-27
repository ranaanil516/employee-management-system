import { Component, OnChanges, OnInit, EventEmitter, Input, Output, SimpleChange, SimpleChanges, ChangeDetectionStrategy, ChangeDetectorRef, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { User } from '../../../shared/models/user';
import { AsyncPipe, CurrencyPipe, DatePipe, formatNumber, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { interval, map } from 'rxjs';
import { StatusColorDirective } from './status-color.directive';
import { UserExprPipe } from '../../../shared/user-expr-pipe';
import { FormsModule, NgForm } from '@angular/forms'

export interface UserAction{
  type: 'edit'| 'delete' | 'view' | 'reset',
  user: User
};

@Component({
  selector: 'app-user-card',
  imports: [AsyncPipe, StatusColorDirective, UpperCasePipe, TitleCasePipe, 
            CurrencyPipe, DatePipe, UserExprPipe, FormsModule],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class UserCard implements OnChanges, OnInit, DoCheck/*, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked*/{
  @Input() userFromChild !: User ;
  @Output() editProfile = new EventEmitter<User>();
  @Output() action = new EventEmitter<UserAction>();

  //userForm:NgForm;
  userId:number=0;
  isEditing:boolean =false;
  counter=0;
  prevName = '';
  prevStatus = '';

  constructor(private cdr: ChangeDetectorRef){

  }

  ngOnChanges(changes: SimpleChanges){
    if (changes['userFromChild'] && changes['userFromChild'].firstChange) {
      this.prevStatus = this.userFromChild.status;
    }
    console.log('ngOnChanges', changes['userFromChild']?.previousValue);
    console.log('ngOnChanges', changes['userFromChild']?.currentValue);
    console.log('ngOnChanges', changes['userFromChild']?.firstChange);
  }

  ngOnInit(){
    console.log('ngOnInit', this.userFromChild.id); 
  }


  ngDoCheck(): void {

    const currentStatus = this.userFromChild.status;

    if (currentStatus !== this.prevStatus) {

      console.log(
        `User ${this.userFromChild.id} status changed:`,
        this.prevStatus,
        '→',
        currentStatus
      );

      this.prevStatus = currentStatus;
    }
  }

  // ngAfterContentInit(): void {
  //     console.log('ngAfterContentInit - ');
  // }

  // ngAfterViewChecked(): void {
  //     console.log('ngAfterViewChecked');
  // }

  // ngAfterViewInit(): void {
  //     console.log('ngAfterViewInit');
  // }

  // ngAfterContentChecked(): void {
  //     console.log('ngAfterContentChecked');
  // }

  changeNamewithMarkforCheck(){
    this.userFromChild.name = 'Anil';
    this.cdr.markForCheck();
  }

  markCardForCheck() {
    console.log('check component during the NEXT Change Detection life cycle');
    this.cdr.markForCheck();
  }

  detectCardChanges() {
    console.log('check component NOW');
    
    this.cdr.detectChanges();
  }

  //time$ = interval(1000).pipe(map(value => value+1));

  incrementCounter() {
    this.counter++;
  }
  get currentName(): string {
    console.log('currentName getter executed');
    return this.userFromChild.name;
  }
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

  saveUser(){}
}
