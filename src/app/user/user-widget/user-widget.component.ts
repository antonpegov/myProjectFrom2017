import { Component, OnInit } from '@angular/core';
import { UserService } from '../../_services/';
import { User } from '../../_models/';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-widget',
  templateUrl: './user-widget.component.html',
  styleUrls: ['./user-widget.component.scss']
})
export class UserWidgetComponent implements OnInit {

  constructor(private $user: UserService, private $router: Router) { }

  public appUser: User;

  public openUser(){
      this.$router.navigateByUrl('/user')
  }

  ngOnInit() {
    this.$user.currentUser$.subscribe(user => {
      if (!user || user.id === 'init') return;
      this.appUser = user
    })
  }
}

