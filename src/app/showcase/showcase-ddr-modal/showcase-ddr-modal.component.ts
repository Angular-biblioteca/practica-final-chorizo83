
import { DdrCacheService } from './../../services/ddr-cache.service';
import { DdrModalService } from './../../../../projects/ddr-library-roberto/src/components/ddr-modal/ddr-modal.service';
import { DdrConstantsService } from './../../../../projects/ddr-library-roberto/src/services/ddr-constants.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase-ddr-modal',
  templateUrl: './showcase-ddr-modal.component.html',
  styleUrls: ['./showcase-ddr-modal.component.scss']
})
export class ShowcaseDdrModalComponent {

  constructor(
    public constants: DdrConstantsService,
    private ddrModal: DdrModalService,
    private ddrCache: DdrCacheService
  ) { 
    this.ddrCache.setElement('title', 'Modal');
  }

  clickConfirm(){
    this.ddrModal.open("confirm");
  }

  clickInfo(){
    this.ddrModal.open("info");
  }

  clickNoButtons(){
    this.ddrModal.open("no-buttons");
  }

  clickForceClose(){
    this.ddrModal.open("force-close");
  }
}
