import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RouterModule} from "@angular/router";
import {UIIconsModule} from "@solenopsys/uimatrix-icons";
import {DeclaredService, UtilsModule} from "@solenopsys/uimatrix-utils";
import {LayoutComponent} from "./layout.compoent";

const components:any = [
  LayoutComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    RouterModule,
    UtilsModule,
    UIIconsModule,
  ],
  exports: [

  ]
})
export class UILayoutsModule {
  constructor(private ds: DeclaredService) {
    ds.addComps("@solenopsys/uimatrix-layouts", components)
  }
}
