import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';
import { QuotesComponent } from './quotes.component';

const DECLARATIONS = [
  QuotesComponent,
  EditQuoteComponent
];

const MODULES = [
  CommonModule,
];

@NgModule({
  declarations: DECLARATIONS,
  imports: MODULES,
  providers: [],
  exports: [...DECLARATIONS, ...MODULES]
})

export class QuotesModule { }
