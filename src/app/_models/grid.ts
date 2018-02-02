import { DataStateChangeEvent, PageChangeEvent, GridDataResult } from "@progress/kendo-angular-grid";
import { State } from '@progress/kendo-data-query';
import { Observable } from "rxjs";
import { GridDataService } from "../_services/rest/";

/**
 * Класс для инкапсуляции данных таблицы
 * @param  {Array<any>} items - массив входных данных
 * @param  {number} take - количество элементов данных на странице
 * @returns this
 */
export class Grid {
    
    public view: GridDataResult;                // Здесь хранятся данные в случае отсутствия сервиса
    public view$: Observable<GridDataResult>;   // Сюда инжектится Observable-сервис получения данных
    private _state: State;

    constructor(
        private _items: Array<any> = [], 
        dataService: Observable<GridDataResult> = null,
        take: number = 10, 
        skip: number = 0,
        group: any[] = [{ field: 'SelectorId'}]
    ){
        this._state = {take: take, skip: skip, group: group}  // Инициировать начальное состояние таблицы
        this.view$ = dataService;               // Подключить сервис получения данных
    }
      
    /**
     * Использует одноименный метод сервиса данных, перезавая ему стейт грида
     * @returns void
     */
    public query = (): void => this.view$ && (this.view$ as GridDataService).query(this._state);
    
    /**
     * Формирует вырезку из загруженных данных для отображения в таблице 
     * (для случая когда все даннуе загружаются сразу и отсутствует сервис связи с бэкендом)
     * @returns void
     */
    public loadItems = (): void => {
        this.view = {
            data: this._items.slice(this._state.skip, this._state.skip + this._state.take),
            total: this._items.length
        };
       //console.log(this.view);
    }
    
    /**
     * Обработчик, вызываемый при любо изменении состояния в таблицы.
     * При отсутствии сервиса данных пытается работать с внутренним обработчиком
     * @param  {DataStateChangeEvent} state
     * @returns void
     */
    public stateChange(state: DataStateChangeEvent): void {
        this._state = state;
        this.view$ ? (this.view$ as GridDataService).query(this._state) : this.loadItems() ;
    }
    
    /**
     * Обработчик нажария на пейджинг (для работы без сервиса)
     * @param  {PageChangeEvent} event
     * @returns void
     */
    public pageChange = (event: PageChangeEvent): void => {
        this._state.skip = event.skip;
        this.loadItems();
    }
      
    /**
     * Парсинг С# DateTime в JS Date
     * @param  {} csdate - дата в формате С#
     */
    public parseCSDate = (csdate) => {
        let date = new Date(csdate);
        console.log(date);
        return date;

    }
}