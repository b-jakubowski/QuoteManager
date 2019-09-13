import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

const DECLARATIONS = [
  NavbarComponent
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
