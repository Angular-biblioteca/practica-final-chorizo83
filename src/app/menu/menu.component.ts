import { cloneDeep } from 'lodash-es';
import { DdrConfigService } from './../../../projects/ddr-library-roberto/src/services/ddr-config/ddr-config.service';
import { DdrDetailComponent } from './../../../projects/ddr-library-roberto/src/components/ddr-detail/ddr-detail.component';
import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { DdrCacheService } from '../services/ddr-cache.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ddr-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

  public menuItemsOri: any[];
  public menuItemsFiltered: any[];
  public showMenuItems: boolean;

  @ViewChild(DdrDetailComponent, {static: false}) detail: DdrDetailComponent;
  @ViewChild("main") main: ElementRef;

  constructor(
    public ddrCache: DdrCacheService,
    public ddrConfig: DdrConfigService,
    private router: Router
  ) { 
    this.showMenuItems = false;
    this.menuItemsOri = this.ddrConfig.getData('menuItems');
    this.menuItemsFiltered = cloneDeep(this.menuItemsOri);
  }

  ngOnInit() {
  }

  clickLogo(){
    this.closeDetail();
    this.router.navigateByUrl('get-started');
  }

  goToRoute(route: string){
    this.router.navigateByUrl(route);
    this.closeDetail();
  }

  openCloseMenu(){
    if(this.showMenuItems){
      this.closeDetail();
    }else{
      this.main.nativeElement.scrollTo({ top: 0 })
      this.main.nativeElement.style.overflowY = 'hidden';
      this.showMenuItems = !this.showMenuItems;
    }

  }

  openTheme() {

  }

  closeDetail(){
    if(this.detail){
      this.detail.closeDetail();
    }
    setTimeout(() => {
      this.main.nativeElement.style.overflowY = 'auto';
      this.menuItemsFiltered = this.menuItemsOri;
      this.showMenuItems = false;
    }, 600);
  }

  filterMenuItems($event){

    console.log($event);
    
    if(!$event.target.value){
      this.menuItemsFiltered = this.menuItemsOri;
    }else{
      this.menuItemsFiltered = cloneDeep(this.menuItemsOri).filter(mi => {
        mi.children = mi.children.filter(m => m.text.toLowerCase().includes($event.target.value.toLowerCase()));
        return mi.children.length > 0;
      })
    }



  }

}
