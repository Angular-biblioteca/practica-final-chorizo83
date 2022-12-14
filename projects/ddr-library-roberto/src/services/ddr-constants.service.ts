import { DdrBlockListConstants, DdrResolutionConstants, DdrAccordionConstants, DdrModalTypeConstants, DdrThemeConstants } from './../constans/ddr-constans';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DdrConstantsService {

  DdrBlockListConstants = DdrBlockListConstants;
  DdrResolutionConstants = DdrResolutionConstants;
  DdrAccordionConstants = DdrAccordionConstants;
  DdrModalTypeConstants = DdrModalTypeConstants;
  DdrThemeConstants = DdrThemeConstants;

  constructor() { 
  }

}
