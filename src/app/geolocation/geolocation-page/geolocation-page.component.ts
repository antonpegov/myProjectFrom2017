import { Component, OnInit } from '@angular/core';
import { HardcodeService, AppToolbarService } from '../../_services/';
//import { routerTransition } from '../../_animations/';

@Component({
  selector: 'app-geolocation-page',
  //animations: [routerTransition],
  //host: { '[@fadeInAnimation]': '' },
  templateUrl: './geolocation-page.component.html',
  styleUrls: ['./geolocation-page.component.scss']
})
export class GeolocationPageComponent implements OnInit {

  constructor( 
    private $hardcode: HardcodeService,
    private $toolbar: AppToolbarService
  ) {}

  ngOnInit() {
    this.$hardcode.setDrowerClass(this.$toolbar.getActiveRoute());
    this.$toolbar.setSubMenu([]);
  }
  ngAfterViewInit(){

  }
}
