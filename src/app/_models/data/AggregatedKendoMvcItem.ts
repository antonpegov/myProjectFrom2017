/**
 * Агрегированные данные, генериуемых на сервере кендовым методом ToDataSourceResult()
 */
export interface AggregatedKendoMvcItem {
    
    Aggregates; // Не использую, пустой объект
    ItemCount;  // Количество сгруппированных объектов
    Items;      // Массив сгруппированных 
    Key;        // Значение свойства, по которому происходит групировка
    Member;     // Название свойства, по которому происходит групировка

}