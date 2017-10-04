import { Component, OnInit } from '@angular/core';
import { HardcodeService, AppToolbarService } from '../../_services/';

@Component({
  selector: 'app-power-page',
  templateUrl: './power-page.component.html',
  styleUrls: ['./power-page.component.scss']
})
export class PowerPageComponent implements OnInit {

  constructor( 
    private $hardcode: HardcodeService,
    private $toolbar: AppToolbarService
  ) {}

  ngOnInit() {
    this.$hardcode.setDrowerClass(this.$toolbar.getActiveRoute());
    this.$toolbar.setSubMenu([]);
  }

}
