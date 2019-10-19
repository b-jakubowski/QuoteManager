import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';

const DECLARATIONS = [
	BooksComponent
];

const MODULES = [
	CommonModule
];

@NgModule({
	declarations: DECLARATIONS,
	imports: MODULES,
	providers: [],
	exports: [...DECLARATIONS, ...MODULES]
})

export class BooksModule { }
