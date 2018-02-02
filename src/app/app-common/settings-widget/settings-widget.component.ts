import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService, AppToolbarService } from '../../_services/';
import { Role } from '../../_models/user';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-settings-widget',
  templateUrl: './settings-widget.component.html',
  styleUrls: ['./settings-widget.component.scss']
})
export class SettingsWidgetComponent implements OnInit {

  public active: boolean = false;  
  private combined$: Observable<Array<any>>;

  constructor(
    private $user: UserService,
    private $toolbar: AppToolbarService,
    private $router: Router,
    private $route: ActivatedRoute
  ) { 
    // Объеденить состояния Пользователя и Роута
    this.combined$ = Observable.combineLatest(
      $router.events
        .filter(e => e instanceof NavigationEnd)
        .map(() => $router.routerState.root.snapshot)
        .filter(snap => !!snap.firstChild)
        .map(snap => snap.firstChild.data),
      this.$user.currentUser$
        .filter(user => user !== null)
    )
  }

  @Output()
  showSettings: EventEmitter<boolean> = new EventEmitter;

  ngOnInit() {
    //Выяснить, есть ли у пользователя право на виджет )
    let self = this;
    this.combined$
      .subscribe(([route, user]) => {
        //console.log(`role = ${user.role}`)
        //console.log(`menu = ${route.menu}`)
        !route.menu || user.role === Role.user 
          ? self.showSettings.emit(false) 
          : self.showSettings.emit(true);
        self.active = self.$router.routerState.snapshot.url.indexOf('settings') > 0 ? true : false;
      })

    // ЗИП выдаёт ответ только при одновременном получении сигналов от всех своих составляющих
    // Observable.zip(
    //   this.$router.events
    //     .filter(e => e instanceof NavigationEnd)
    //     .map(() => this.$router.routerState.root.snapshot.firstChild.data),
    //   this.$user.currentUser$.filter(user => user !== null)
    // )
    //.catch(err => console.warn(err))
    // .subscribe(([routeData, userData])=> {
    //   console.log(routeData)
    //   console.log(userData)
    // })
  }
}
