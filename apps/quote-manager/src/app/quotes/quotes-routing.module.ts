import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent } from './quotes.component';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';
import { DailyQuoteComponent } from './daily-quote/daily-quote.component';
import { AllQuotesListComponent } from './all-quotes-list/all-quotes-list.component';

const quotesRoutes: Routes = [
	{ path: '', redirectTo: 'quotes', pathMatch: 'full' },
	{
		path: 'quotes',
		component: QuotesComponent,
		children: [
			{
				path: '',
				redirectTo: 'daily',
				pathMatch: 'full'
			},
			{
				path: 'daily',
				component: DailyQuoteComponent,
			},
			{
				path: 'edit',
				component: EditQuoteComponent,
			},
			{
				path: 'all',
				component: AllQuotesListComponent,
			},
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(quotesRoutes)],
	exports: [RouterModule]
})

export class QuotesRoutingModule {
}
