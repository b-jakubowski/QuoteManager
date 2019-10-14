import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent } from './quotes.component';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';
import { DailyQuoteComponent } from './daily-quote/daily-quote.component';
import { AllQuotesComponent } from './all-quotes/all-quotes.component';
import { BooksQuotesComponent } from './books-quotes/books-quotes.component';

const appRoutes: Routes = [
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
				component: AllQuotesComponent,
			},
			{
				path: 'books',
				component: BooksQuotesComponent,
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})

export class QuotesRoutingModule {
}
