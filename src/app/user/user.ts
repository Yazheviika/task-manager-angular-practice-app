import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from '../shared/card/card';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return '/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
