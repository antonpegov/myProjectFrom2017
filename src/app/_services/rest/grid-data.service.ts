import { BehaviorSubject } from "rxjs";
import { GridDataResult } from "@progress/kendo-angular-grid";
import { RestService } from "./rest.service";
import { HttpClient } from "@angular/common/http";
import { PlatformLocation } from "@angular/common";
import { State, toODataString, toDataSourceRequestString } from "@progress/kendo-data-query";
//import { AggregatedKendoMvcItem } from "../../_models/";

/**
 * Базовый Класс сервисов получения данных для таблиц Kendo Grid
 */
export class GridDataService extends RestService<GridDataResult> {

  constructor(
    $http: HttpClient,
    $location: PlatformLocation,
    resourceName: string,
    groupNamingFunction?: any
  ) {
    super($http, $location, resourceName);
    // Переопределить конструктор названий групп
    if(typeof groupNamingFunction === 'function') this.groupNameExtractor = groupNamingFunction;
    // Переопределить обработчик ответа сервера базового класса
    this.responseHandler = (response: DataSourceResult) => {
      // Если пришли агрегированные объекты, то прогнать их через адаптер
      if(response.Data && response.Data.length > 0 && response.Data[0].Aggregates){
        response.Data = this.aggregatesAdapter(response.Data);
      }
      return <GridDataResult>{
        data: response.Data,
        total: response.Total
      }
    }
  }

  query(state: State){
    this.PARAMS = `${toDataSourceRequestString(state)}&$count=true`;
    this.get();
  }

  /**
   * Преобразует кривые объекты, сгенерированные на сервере методом ToDataSourceResult()
   * в прекрасные AggregatedDataSourceItem, которые так любит Kendo Grid
   * @param  {AggregatedKendoMvcItem[]} data
   */
  aggregatesAdapter(data: AggregatedKendoMvcItem[]){
    let result = new Array<AggregatedDataSourceItem>();
    data.forEach(x=>
      result.push(new AggregatedDataSourceItem({
        aggregates: x.Aggregates,
        items: x.Items,
        field: x.Member,
        value: this.groupNameExtractor(x)
      })
    ));
    return result;
  }

  /**
   * По умолчанию в название группы подставляется значение поля Key аггрегированных DataSourceResult
   * Функция предназначена для предоставления возможности произвольно конструировать названия групп
   * @param  {AggregatedKendoMvcItem} item
   */
  private groupNameExtractor = (item: AggregatedKendoMvcItem) => {
    return item.Key;
  }
}

/**
 * Пришлось ввести дополнительный класс, т.к. API кенды отдает имена свойств с большой буквы,
 * а компонент кендовой таблицы на фронтенде ждет названия в lowercase.
 */
export class DataSourceResult implements GridDataResult {

  /**
   * The data that will be rendered by the Grid as an array.
   */
  public data;
  public Data = this.data;
  /**
   * The total number of records that are available.
   */
  public total;
  public Total = this.total;
}

/**
 * Аггрегированный результат запроса, подходящий для скармливания гриду.
 * Отличается от того, что генерирует кенда на бэкенде.
 */
export class AggregatedDataSourceItem {

  /**
   * Объект с настройками аггрегации.
   */
  public aggregates;
  /**
   * Массив сгрупиррованных объектов.
   */
  public items;
  /**
   * Название поля, по которому производится группировака.
   */
  public field;
  /**
   * Название группы.
   */
  public value;

  /**
   * Универсальный конструктор
   * @param  {Partial<AggregatedDataSourceItem>} init?
   */
  public constructor(init?:Partial<AggregatedDataSourceItem>) {
    Object.assign(this, init);
  }

}
export interface AggregatedKendoMvcItem {

  Aggregates; // Не использую, пустой объект
  ItemCount;  // Количество сгруппированных объектов
  Items;      // Массив сгруппированных
  Key;        // Значение свойства, по которому происходит групировка
  Member;     // Название свойства, по которому происходит групировка

}
