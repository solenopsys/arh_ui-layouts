import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SMenuComponent} from "./smenu/smenu.component";
import {SMenuItemComponent} from "./smenu-item/smenu-item.component";
import {TopPaneComponent} from "./top-pane/top-pane.component";
import {TabsComponent} from "./tabs/tabs.component";
import {RouterModule} from "@angular/router";
import {SubMenuComponent} from "./sub-menu/sub-menu.component";
import { FuiIconsModule } from "@solenopsys/uimatrix-icons";
import { UtilsModule } from "@solenopsys/uimatrix-utils";
@NgModule({
  declarations: [
    SMenuComponent,
    SMenuItemComponent,
    TopPaneComponent,
    TabsComponent,
    SubMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    UtilsModule,
    FuiIconsModule,
  ],
  exports: [
    SMenuComponent,
    SMenuItemComponent,
    TopPaneComponent,
    SubMenuComponent
  ]
})
export class FuiNavigateModule {}
