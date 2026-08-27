import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'app-user-panel',
  imports: [FormsModule],
  templateUrl: './user-panel.html',
  styleUrl: './user-panel.css'
})
export class UserPanel {

  @Input() user!: User;

  save(): void {
    console.log('--- Save button clicked ---');
    console.log(this.user);
  }
}