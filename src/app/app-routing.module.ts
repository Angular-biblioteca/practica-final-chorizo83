import { GetStartedComponent } from './get-started/get-started.component';
import { ShowcaseDdrModalComponent } from './showcase/showcase-ddr-modal/showcase-ddr-modal.component';
import { ShowcaseDdrTranslateComponent } from './showcase/showcase-ddr-translate/showcase-ddr-translate.component';
import { ShowcaseAccordionComponent } from './showcase/showcase-accordion/showcase-accordion.component';
import { ShowcaseDdrResolutionComponent } from './showcase/showcase-ddr-resolution/showcase-ddr-resolution.component';

import { ShowcaseDdrBlockListComponent } from './showcase/showcase-ddr-block-list/showcase-ddr-block-list.component';
import { ShowcaseDdrConfigComponent } from './showcase/showcase-ddr-config/showcase-ddr-config.component';
import { ShowcaseDdrLoadIframeComponent } from './showcase/showcase-ddr-load-iframe/showcase-ddr-load-iframe.component';
import { ShowcaseClickoutsideComponent } from './showcase/showcase-clickoutside/showcase-clickoutside.component';
import { ShowcaseDdrJoinPipeComponent } from './showcase/showcase-ddr-join-pipe/showcase-ddr-join-pipe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowcaseDdrSpinnerComponent } from './showcase/showcase-ddr-spinner/showcase-ddr-spinner.component';
import { ShowcaseDdrDetailComponent } from './showcase/showcase-ddr-detail/showcase-ddr-detail.component';
import { ShowcaseDdrTabsComponent } from './showcase/showcase-ddr-tabs/showcase-ddr-tabs.component';
import { ShowcaseCheckimageComponent } from './showcase/showcase-checkimage/showcase-checkimage.component';

const routes: Routes = [
  {path: 'ddr-join', component: ShowcaseDdrJoinPipeComponent},
  {path: 'ddr-spinner', component: ShowcaseDdrSpinnerComponent},
  {path: 'ddr-click-outside', component: ShowcaseClickoutsideComponent},
  {path: 'ddr-check-image', component: ShowcaseCheckimageComponent},
  {path: 'ddr-load-iframe', component: ShowcaseDdrLoadIframeComponent},
  {path: 'ddr-config', component: ShowcaseDdrConfigComponent},
  {path: 'ddr-detail', component: ShowcaseDdrDetailComponent},
  {path: 'ddr-block-list', component: ShowcaseDdrBlockListComponent},
  {path: 'ddr-tabs', component: ShowcaseDdrTabsComponent},
  {path: 'ddr-resolution', component: ShowcaseDdrResolutionComponent},
  {path: 'ddr-accordion', component: ShowcaseAccordionComponent},
  {path: 'ddr-translate', component: ShowcaseDdrTranslateComponent},
  {path: 'ddr-modal', component: ShowcaseDdrModalComponent},
  {path: 'get-started', component: GetStartedComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'get-started'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
