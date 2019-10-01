import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const DECLARATIONS = [
  NavbarComponent,
  SidebarComponent
];

const MODULES = [
  CommonModule
];

@NgModule({
  declarations: DECLARATIONS,
  imports: MODULES,
  exports: [...DECLARATIONS, ...MODULES]

})
export class SharedModule { }
