import { Component, OnInit } from '@angular/core';
import { HardcodeService, AppToolbarService } from '../../_services/';

@Component({
  selector: 'app-reporting-page',
  templateUrl: './reporting-page.component.html',
  styleUrls: ['./reporting-page.component.scss']
})
export class ReportingPageComponent implements OnInit {

  constructor( 
    private $hardcode: HardcodeService,
    private $toolbar: AppToolbarService
  ) {}

  ngOnInit() {
    this.$hardcode.setDrowerClass(this.$toolbar.getActiveRoute());
    this.$toolbar.setSubMenu([]);
  }

}
