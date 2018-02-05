import { Component, OnInit, OnDestroy, ElementRef, AfterViewInit, Input, ViewChildren, ViewChild, Query, Directive } from '@angular/core';
import { UserService, User, Role } from '../../_services/';
import { HttpClient } from '@angular/common/http';
import { MdButton } from '@angular/material';
import { products } from '../../_mocks/products';
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { IntlService } from '@progress/kendo-angular-intl';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Grid} from '../../_models/';
import { GridDataService } from '../../_services/rest/grid-data.service';
import { PlatformLocation } from '@angular/common';

@Component({
  // selector: 'app-selector-added',
  templateUrl: './selector-added.component.html',
  styleUrls: ['./selector-added.component.scss']
})
export class SelectorAddedComponent implements OnInit, OnDestroy {

  // @ViewChildren(MdButton) private _buttons: QueryList<MdButton>;
  @ViewChild('add') private _add: MdButton;
  @ViewChild('upload') private _upload: MdButton;
  @ViewChild('del') private _del: MdButton;
  @ViewChild('change') private _change: MdButton;
  @ViewChild('show') private _show: MdButton;

  public _click = new Subject();
  public clicked$: Observable<any> = this._click.asObservable();

  public role;
  public Role = Role; // Прокинуть импортированные роли (Enum) в темплейт
  public grid: Grid;  // Объект для управления таблицей

  constructor(
    // private $report$: ReportService,
    private $location: PlatformLocation,
    private $http: HttpClient,
    private $user: UserService,
    private $intl: IntlService,
    private elementRef: ElementRef
  ) {
    $user.currentUser$.filter(user => !!user).subscribe(user => this.role = user.role);
    this.grid = new Grid(null, new GridDataService(this.$http, this.$location, 'Report', null), 10, 0);
    this.grid.query();
    // this.grid.loadItems(); // загрузка всех данных сразу
    this.clicked$.subscribe(x => console.log(`Button #${x} is clicked`));

  }

  // #region: =========== ngOn ===========

  ngOnInit() {
    // Убрать падинг у контейнеру модуля
    this.elementRef.nativeElement.parentElement.classList.add('no-padding');
    // this.$report$.subscribe(data=>console.log(data),error=>console.error(error))
  }

  ngOnDestroy() {
    // Вернуть падинг контейнеру модуля
    this.elementRef.nativeElement.parentElement.classList.remove('no-padding');
  }

  // #endregion

}

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: 'ngInit',
  exportAs: 'ngInit'
})
export class NgInitDirective {
  @Input() values: any = {};

  @Input() ngInit;
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    if (this.ngInit) { this.ngInit(); }
  }
}
