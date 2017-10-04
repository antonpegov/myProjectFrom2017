import { Injectable } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';
import { User, Role } from '../_models/';
import { BehaviorSubject } from 'rxjs';
import { AppToolbarService } from './app-toolbar.service';
import { NavigationService } from './navigation.service';
import { Util } from '../_helpers/';

@Injectable()
export class UserService {
  
    
    constructor(
        private $http: Http, 
        private $route: ActivatedRoute, 
        private $toolbar: AppToolbarService,
        private $storage: LocalStorageService,
        private $nav: NavigationService

    ) { }
    
    private currentUserSubject$ = new BehaviorSubject<User>(undefined);
    public readonly currentUser$ = this.currentUserSubject$.asObservable().filter(_=>_!==undefined).distinctUntilChanged(); //фильтрует дублирующиеся значения (===) 
    
    /**
     * Возвращает текущего пользователя
     * @returns User
     */
    public getCurrentUser = (): User => this.currentUserSubject$.value;
    
    /**
     * Очищает текущего пользователя
     */
    public purgeAuth(){
        // Remove JWT from localstorage
        //this.jwtService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject$.next(null);
        // Set auth status to false
        //this.isAuthenticatedSubject.next(false);
    }    
    
    /**
     * Инициализация пользователя либо переданными параметрами, либо из параметров URL
     * @param  {User} user?
     */
    init(user?: User) {  
        let self = this; 
        // Запустить обновление значения в хранилище
        this.currentUser$.subscribe(user => {
            this.$storage.store('appUser', user)
        });
        // Создать пользователя
        if(user){
            this.currentUserSubject$.next(user);
        } else {
            // Попытаться вытащить данные из параметров url
            this.$route.queryParams.subscribe((params: Params) => {
                let newUser;
                if (params.hasOwnProperty('id')) {
                    // Если там есть id, то собрать пользователя из параметров запроса
                    newUser = this.makeUserFromParams(params, Util.getProperties(new User()));
                    ////console.warn(newUser)
                    //this.currentUserSubject.next(newUser.id !='init' ? newUser : null);
                } else {
                    // Если там нет id, то попытаться вынуть пользователя из хранилища
                    newUser = this.$storage.retrieve('appUser');
                }
                this.currentUserSubject$.next(newUser);
            });
        }    
        //Проверить наличие пользователя 
        setTimeout(function(){
            if(!self.getCurrentUser()) {
                console.error("Нет пользователя!");
                self.$nav.toRoot();
            };                
        },1000);
    }
    
    /**
     * Создать Юзера из параметров запроса
     * @param  {} params - объект, полученный из $route.queryParams
     * @param  {} props - массив, полученный из публичных полей класса User
     * @returns User
     */
    private makeUserFromParams(params, props) : User {
        let user = new User();
        props.forEach(prop => {
            let warn = prop !== 'photo' ? `no_${prop}!` : `${Util._ROOT}assets/man.svg`;            
            if(prop === 'role') {
                user[prop] = 
                    params[prop] == 'user' ? 1 :
                    params[prop] == 'adviser' ? 2 : 3  
            } else {
                user[prop] = params[prop] ? params[prop] : warn;
            }
        });
        return user;
    }
    //getAll() {
    //    return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
    //}
    //getById(id: number) {
    //    return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    //}
    //create(user: User) {
    //    return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
    //}
    //update(user: User) {
    //    return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
    //}
    //delete(id: number) {
    //    return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
    //}

    // private helper methods

    //private jwt() {
    //    // create authorization header with jwt token
    //    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //    if (currentUser && currentUser.token) {
    //        let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
    //        return new RequestOptions({ headers: headers });
    //    }
    //}
}