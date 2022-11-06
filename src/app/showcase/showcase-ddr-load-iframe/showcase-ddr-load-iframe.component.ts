import { DdrSpinnerService } from './../../../../projects/ddr-library-roberto/src/components/ddr-spinner/ddr-spinner.service';
import { DdrCacheService } from './../../services/ddr-cache.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-ddr-load-iframe',
  templateUrl: './showcase-ddr-load-iframe.component.html',
  styleUrls: ['./showcase-ddr-load-iframe.component.scss']
})
export class ShowcaseDdrLoadIframeComponent {

  constructor(
    private ddrSpinner: DdrSpinnerService,
    private ddrCache: DdrCacheService
  ) { 
    this.ddrCache.setElement('title', 'Load iframe');
    this.ddrSpinner.showSpinner();
  }

  load(){
    this.ddrSpinner.hideSpinner();
  }

}
