import { DdrThemeService } from './services/ddr-theme.service';
import { DdrModalModule } from './components/ddr-modal/ddr-modal.module';
import { DdrTranslateModule } from './services/ddr-translate/ddr-translate.module';
import { DdrResolutionModule } from './services/ddr-resolution/ddr-resolution.module';
import { DdrDetailModule } from './components/ddr-detail/ddr-detail.module';
import { DdrConfigModule } from './services/ddr-config/ddr-config.module';
import { DdrLoadIframeModule } from './directives/ddr-load-iframe/ddr-load-iframe.module';
import { DdrSpinnerModule } from './components/ddr-spinner/ddr-spinner.module';
import { DdrJoinPipeModule } from './pipes/ddr-join-pipe/ddr-join-pipe.module';
import { NgModule } from '@angular/core';
import { DdrConstantsService } from './services/ddr-constants.service';
import { DdrClickOutsideModule } from './directives/ddr-click-outside/ddr-click-outside.module';
import { DdrBlockListModule } from './components/ddr-block-list/ddr-block-list.module';
import { DdrTabsModule } from './components/ddr-tabs/ddr-tabs.module';
import { DdrAccordionModule } from './components/ddr-accordion/ddr-accordion.module';
import { DdrCheckImageModule } from './directives/ddr-check-image/ddr-check-image.module';

@NgModule({
  declarations: [
  ],
  imports: [
    DdrJoinPipeModule,
    DdrSpinnerModule,
    DdrClickOutsideModule,
    DdrLoadIframeModule,
    DdrCheckImageModule,
    DdrConfigModule,
    DdrDetailModule,
    DdrBlockListModule,
    DdrTabsModule,
    DdrResolutionModule,
    DdrAccordionModule,
    DdrTranslateModule,
    DdrModalModule
  ],
  exports: [
    DdrJoinPipeModule,
    DdrSpinnerModule,
    DdrClickOutsideModule,
    DdrLoadIframeModule,
    DdrCheckImageModule,
    DdrConfigModule,
    DdrDetailModule,
    DdrBlockListModule,
    DdrTabsModule,
    DdrResolutionModule,
    DdrAccordionModule,
    DdrTranslateModule,
    DdrModalModule
  ],
  providers: [
    DdrConstantsService,
    DdrThemeService
  ]
})
export class DdrLibraryModule { }
