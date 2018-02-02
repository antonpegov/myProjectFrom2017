import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppToolbarService, SubMenuItem, HardcodeService } from '../../_services/';

@Component({
  selector: 'app-subnavigation',
  templateUrl: './subnavigation.component.html',
  styleUrls: ['./subnavigation.component.scss']
})
export class SubnavigationComponent implements OnInit {

  subMenuItems: SubMenuItem[] = [];

  constructor(
    private $toolbar : AppToolbarService,
    private $hardcode : HardcodeService
  ) { }

  @Output()
  showMenu: EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {
    this.$toolbar.subMenu$.subscribe((menu : SubMenuItem[]) => {
      let show = menu.length === 0 ? false : true;
      this.showMenu.emit(show) // Просигналить родительскому компоненту, что делать с субменюшкой
      if (show){
          // Обновить содержимое меню c задержкой, чтобы оно успело выехать
          setTimeout(_=> {
            this.subMenuItems = menu; 
          },500)
        } else {
          this.subMenuItems = menu; 
        }

    });
  }
  /**
   * Динамически генерирует линки из свойств элементов субнавигации - почему-то результат приходит в routerLink обрезанный
   * @param  {SubMenuItem} item
   */
  public makeRouterLink = (item: SubMenuItem) => {
    let x = `['${item.path}',{outlets:{'${item.outletName}':['${item.routeName}']}}]`;
    console.log(x)
    return x;
  }

}
