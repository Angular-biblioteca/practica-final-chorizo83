
import { DdrCacheService } from './../../services/ddr-cache.service';
import { DdrTranslateService } from './../../../../projects/ddr-library-roberto/src/services/ddr-translate/ddr-translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase-ddr-translate',
  templateUrl: './showcase-ddr-translate.component.html',
  styleUrls: ['./showcase-ddr-translate.component.scss']
})
export class ShowcaseDdrTranslateComponent implements OnInit {

  constructor(
    private ddrCache: DdrCacheService
  ) { 
    this.ddrCache.setElement('title', 'DdrTranslate')
  }

  ngOnInit() {}

}
