import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AppToolbarService, MenuItem, UserService } from "../../_services/";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {
    appName = 'Мосгортранс';
    mainMenuItems: MenuItem[];
    activeMenuItem$: Observable<MenuItem>;

    constructor(private $toolbar: AppToolbarService, private $route: ActivatedRoute, private $user: UserService) {
        this.mainMenuItems = this.$toolbar.getMenuItems();
        this.activeMenuItem$ = this.$toolbar.activeMenuItem$;

    }

    ngOnInit() {
        this.$user.init();
    }
}
