import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigationService {
  
  constructor(private $router: Router) { }
  
  /**
   * Перейти в '/' и перезагрузить страницу
   * @returns any
   */
  toRoot(): any {
      this.$router.navigateByUrl('/').then(_=> location.reload())
  }
  
}
