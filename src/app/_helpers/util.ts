export class Util {

    static readonly _ROOT: string = 'Scripts/NgApp/';

    /**
     * Возвращает массив публичных свойств переданного объекта
     * @param  {any} obj
     * @returns string
     */
    static getProperties(obj: any): string[] {
      const result = [];
      for (let property in obj) {
        if (obj.hasOwnProperty(property) && !property.startsWith('_')) {
          result.push(property);
        }
      }
      return result;
    }
}
