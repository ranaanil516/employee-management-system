import {
  Component,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  ContentChild,
  Input
} from '@angular/core';

import { UserPanelDirective } from './user-panel-directive';
import { User } from '../../../shared/models/user';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-panel',
  imports: [FormsModule],
  templateUrl: './user-panel.html',
  styleUrl: './user-panel.css'
})
export class UserPanel
  implements
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked {

  @ContentChild(UserPanelDirective)
  projectedContent!: UserPanelDirective;
  @Input() user !: User;
  userForm!: NgForm;

  checkCount = 0;

  ngAfterContentInit(): void {
    console.log('UserPanel: ngAfterContentInit');

    console.log(
      'Projected content:',
      this.projectedContent
    );
  }

  ngAfterContentChecked(): void {
    console.log('UserPanel: ngAfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('UserPanel: ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    this.checkCount++;

    console.log(
      'UserPanel: ngAfterViewChecked',
      this.checkCount
    );
  }

  save(): void {
    console.log('--- Save button clicked ---');
    console.log(this.user);
    
  }
}