import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';
import { QuotesComponent } from './quotes.component';
import { QuotesRoutingModule } from './quotes-routing.module';
import { DailyQuoteComponent } from './daily-quote/daily-quote.component';
import { AllQuotesListComponent } from './all-quotes-list/all-quotes-list.component';
import { AllQuotesListItemComponent } from './all-quotes-list/all-quotes-list-item/all-quotes-list-item.component';

const DECLARATIONS = [
	QuotesComponent,
	EditQuoteComponent,
	DailyQuoteComponent,
	AllQuotesListComponent,
	AllQuotesListItemComponent
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
