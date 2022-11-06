
import { DdrCacheService } from './../../services/ddr-cache.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-checkimage',
  templateUrl: './showcase-checkimage.component.html',
  styleUrls: ['./showcase-checkimage.component.scss']
})
export class ShowcaseCheckimageComponent {

  public mode: string;

  constructor(
    private ddrCache: DdrCacheService
  ) {
    this.ddrCache.setElement('title', 'Check image');
    this.mode = 'estandar';
  }


}
