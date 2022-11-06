
import { DdrCacheService } from './../../services/ddr-cache.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-accordion',
  templateUrl: './showcase-accordion.component.html',
  styleUrls: ['./showcase-accordion.component.scss']
})
export class ShowcaseAccordionComponent  {

  constructor(
    public ddrCache: DdrCacheService
  ) {
    this.ddrCache.setElement('title', 'Accordion');
  }


}
