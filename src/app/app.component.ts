import { Component, OnInit } from '@angular/core';
import { Params, Router } from '@angular/router';
import { AppToolbarService, MenuItem, UserService } from "./_services/";
import { Observable } from "rxjs/Observable";
import { routerTransition } from './_animations/';

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
    
    settingsPosition: SettingsPosition = SettingsPosition.top;
    settingsVisible: boolean = true;

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
        this.toolbarHeight = event ? 120 : 70;
        this.settingsPosition = event ? SettingsPosition.top : SettingsPosition.bottom;
    }
    
    /**
     * Обработчик события от дочернего компонента SubMenu
     * @param  {} event
     */
    public showSettingsWidget = (event: boolean) => this.settingsVisible = event;

    /**
     * Обработчик события от дочернего компонента SubMenu
     * @param  {} event
     */
    public getSettingsPosition = (event: boolean) => SettingsPosition[this.settingsPosition];

    /**
     * Хелпер для запуска анимации, с которой пока не сложилось
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
    }
}
