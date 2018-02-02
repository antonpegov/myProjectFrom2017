import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { Observable, BehaviorSubject } from "rxjs";
import { Injectable } from '@angular/core';
import { Title } from "@angular/platform-browser";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
//import * as $ from 'jquery';

export class MenuItem {
    path: string;
    title: string;
    icon?: string;
    menu?: boolean;
}  

export class SubMenuItem extends MenuItem {
    outletName: string;
    routeName: string;
    routerLink?: string;
} 

@Injectable()
export class AppToolbarService {

    public readonly activeMenuItem$: Observable<MenuItem>;
    public readonly activeRouteParams$: Observable<any> = new Observable;
    public readonly subMenu$ = new BehaviorSubject<SubMenuItem[]>([]);
    public readonly toolbarText$ = new BehaviorSubject<string>('');

    constructor(private $router: Router, private $title: Title) {
        this.activeMenuItem$ = this.$router.events
            .filter(e => e instanceof NavigationEnd)
            .map(_ => this.$router.routerState.root)
            .map(route => {
                let active = this.lastRouteWithMenuItem(route.root);
                this.$title.setTitle(active ? active.title : 'Главная');
                return active;
            });
    }

    /**
     * Обновить значение Сабжекта toolbarText$
     * @param  {} text
     */
    public setToolbarText = (text): void => this.toolbarText$.next(text);

    /**
     * Отдаёт массив MenuItem-ов, т.е. роутов, у которых проставлено свойство 'order'
     * @returns MenuItem
     */
    public getMenuItems(): MenuItem[] {
        return this.$router.config
            .filter(route => route.data && route.data.title && route.data.order)
            .map(route => {
                if (!route.data.title) {
                    throw new Error('Missing title for toolbar menu route ' + route.path);
                }
                return {
                    path: route.path,
                    title: route.data.title,
                    icon: route.data.icon
                };
            });
    }

    /**
     * Возвращает текущий роут без слеша, дочернего роута и параметров запроса
     * @returns string
     */
    public getActiveRoute = (): string => {
        let url = this.$router.routerState.snapshot.url.substr(1);
        return url.indexOf('/') > 0 ? url.substr(0, url.indexOf('/')) 
            : url.indexOf('?') > 0 ? url.substr(0, url.indexOf('?')) 
            : url;
    }
    /**
     * Загружает в верхний тулбар меню текущего компонента
     * @param  {SubMenuItem[]} items - массив элементов подменю
     * @returns any
     */
    public setSubMenu = (items: SubMenuItem[]): any => 
            this.subMenu$.next(items);
    
    private extractMenu = (route: ActivatedRoute) => {
        let cfg = route.routeConfig;
        return cfg && cfg.data && cfg.data.title
            ? { path: cfg.path, title: cfg.data.title, icon: cfg.data.icon }
            : undefined

    }

    private lastRouteWithMenuItem = (route: ActivatedRoute): MenuItem => {
        let lastMenu = undefined;
        do { lastMenu = this.extractMenu(route) || lastMenu; }
        while ((route = route.firstChild));
        return lastMenu;
    }

}
