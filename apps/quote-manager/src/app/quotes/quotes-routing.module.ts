import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent } from './quotes.component';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';
import { DailyQuoteComponent } from './daily-quote/daily-quote.component';

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