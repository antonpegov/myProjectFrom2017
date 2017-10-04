import { Component, OnInit } from '@angular/core';
import { HardcodeService, NavigationService, AppToolbarService } from '../../_services/';
import { fadeInAnimation, routerTransition } from '../../_animations/';
import { Router } from '@angular/router';

@Component({
  //selector: 'app-selector-page',
  //animations: [routerTransition],
  //host: { '[@fadeInAnimation]': '' },
  templateUrl: './selector-page.component.html',
  styleUrls: ['./selector-page.component.scss']
})
export class SelectorPageComponent implements OnInit {

  private moduleMenu = [
    {
      path: 'selector',
      title: 'Добавленные',
      outletName: 'selector',
      routeName: 'added',
      routerLink: "['selector', {outlets: {'selector':['added']}}]"
    },{
      path: 'selector',
      title: 'Загруженные',
      outletName: 'selector',
      routeName: 'loaded',
      routerLink: "['selector', {outlets: {'selector':['loaded']}}]"
    }];

  constructor( 
    private $hardcode: HardcodeService,
    private $toolbar: AppToolbarService,
    private $nav: NavigationService,
    private $router: Router
  ) {}

  ngOnInit() {
    this.$hardcode.setDrowerClass(this.$toolbar.getActiveRoute());
    this.$toolbar.setSubMenu(this.moduleMenu);
  }
  ngOnDestroy(){
    //console.info('onDestroy')
    this.$toolbar.setToolbarText(''); // Очистить текст за собой )
  }
  ngOnChanges(){
    //console.info('onChange')
  }
  ngAfterViewInit(){
    //this.$router.navigate(['selector',{outlets:{'selector': ['added']}}])
    this.$router.navigate(['selector','added']);
    this.$toolbar.setToolbarText('Добавление данных');
  }
}
