import { Injectable } from '@angular/core';
import * as $ from 'jquery';  

@Injectable()
export class HardcodeService {
  
  constructor() { }

  /**
   * Устанавливает класс элементу .mat-drawer-content
   * @param  {} className
   */
  public setDrowerClass(className){
    $('.mat-drawer-content')
    .removeClass()
    .addClass('mat-drawer-content ' + className);
  }
  
  /**
   * Раздвигает верхний тулбар для показа меню
   * @returns any
   */
  // public showSubMenu(): any {
  //   $('.widget-toolbar').height(120).find('app-subnavigation').css('visibility','visible');
  // }  
  
  /**
   * Уменьшает верхний тулбар и прячет меню
   * @returns any
   */
  // hideSubMenu(): any {
  //   $('.widget-toolbar').height(70).find('app-subnavigation').css('visibility','hidden');
  // }
}
