import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../_services/';
import { Role } from '../../_models/user';

@Component({
  selector: 'app-settings-widget',
  templateUrl: './settings-widget.component.html',
  styleUrls: ['./settings-widget.component.scss']
})
export class SettingsWidgetComponent implements OnInit {

  constructor(
    private $user: UserService
  ) { }

  @Output()
  showMe: EventEmitter<boolean> = new EventEmitter;

  ngOnInit() {
    //Выяснить, есть ли у пользователя право на виджет )
    this.$user.currentUser$
      .filter(user => user !== null)
      .subscribe(user => 
        user.role === Role.user ? this.showMe.emit(false) : this.showMe.emit(true)
      )
  }
}
