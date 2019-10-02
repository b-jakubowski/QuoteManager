import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuotesComponent } from './quotes/quotes.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: 'quotes', pathMatch: 'full' },
	{
		path: 'quotes',
		loadChildren: () => import('./quotes/quotes.module').then(mod => mod.QuotesModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})

export class AppRoutingModule {
}