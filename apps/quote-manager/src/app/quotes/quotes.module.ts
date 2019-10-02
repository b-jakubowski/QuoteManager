import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';
import { QuotesComponent } from './quotes.component';
import { QuotesRoutingModule } from './quotes-routing.module';
import { DailyQuoteComponent } from './daily-quote/daily-quote.component';

const DECLARATIONS = [
	QuotesComponent,
	EditQuoteComponent,
	DailyQuoteComponent
];

const MODULES = [
	CommonModule,
	QuotesRoutingModule
];

@NgModule({
	declarations: DECLARATIONS,
	imports: MODULES,
	providers: [],
	exports: [...DECLARATIONS, ...MODULES]
})

export class QuotesModule { }
