import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { AppToolbarService, MenuItem, UserService } from './_services/';
import { routerTransition } from './_animations/';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

enum  SettingsPosition { top, bottom };

@Component({
  selector: 'body',
  animations: [routerTransition],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit  {

    appName = 'Мосгортранс';
    mainMenuItems: MenuItem[];
    activeMenuItem$: Observable<MenuItem>;
    toolbarText$: Observable<string> = this.$toolbar.toolbarText$;
    toolbarHeight: number = 70;
    //SettingsPosition = new Enum(top, bottom); // Позиционирование виджета настроек

    settingsPosition$: BehaviorSubject<string> = new BehaviorSubject('top');
    settingsVisible$: BehaviorSubject<string> = new BehaviorSubject('hidden');

    constructor(
        private $toolbar: AppToolbarService,
        private $user: UserService,
        private $router: Router
    ) {
        this.mainMenuItems = this.$toolbar.getMenuItems();
        this.activeMenuItem$ = this.$toolbar.activeMenuItem$;
    }

    /**
     * Обработчик события от дочернего компонента SubMenu
     * @param  {} event
     */
    public showSubMenu = (event: boolean) => {
        if (event) {
            this.toolbarHeight = 120;
            setTimeout(() => this.settingsPosition$.next(SettingsPosition[SettingsPosition.bottom]), 500);
        } else {
            this.toolbarHeight = 70;
            setTimeout(() => this.settingsPosition$.next(SettingsPosition[SettingsPosition.top]), 50);
        }
        //console.log(event);
        //console.warn(`this.settingsPosition = ${this.settingsPosition}`)
    }

    /**
     * Обработчик события от дочернего компонента SubMenu
     * @param  {} event
     */
    public showSettingsWidget = (event: boolean) => {
        if (event) {
            setTimeout(() => this.settingsVisible$.next(''), 500);
        } else {
            this.settingsVisible$.next('hidden');
        }
    }
    // /**
    //  * Обработчик события от дочернего компонента SubMenu
    //  * @param  {} event
    //  */
    // public getSettingsPosition = (event: boolean) => {
    //         let x = SettingsPosition[this.settingsPosition];
    //         //console.log(this.settingsPosition)
    //         return x;
    // }

    /**
     * Хелпер для запуска анимации, достает из объекта outlet имя вьюшки (activatedRouteData.state)
     * @param  {} outlet
     */
    public getState = (outlet) => outlet.activatedRouteData.state;

    // Загрузить субмодуль - получилось обойти
    // private openPage = (name) =>
    //     this.$router.navigate(['selector',{outlets:{'selector': [name]}}])

    ngOnInit() {
        this.$user.init();
        // Запустить открытие суброута только после появления пользователя, иначе сгорают параметры первичного запроса и пользователь не успевает создасться
        //this.$user.currentUser$.subscribe(user => user != null && this.openPage('added'))
    }

    ngAfterViewInit(){
        //console.log('After Init:');
        //console.log(this.settingsPosition);

    }

    ngAfterViewChecked()
    {
        //console.log( "! Изменения в компоненте AppComponent !" );
        //console.log(this.settingsPosition);
    }
}
