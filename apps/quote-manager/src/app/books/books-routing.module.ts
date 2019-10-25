import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksQuotesComponent } from './books-quotes/books-quotes.component';

const booksRoutes: Routes = [
	{
		path: 'books',
		component: BooksComponent,
		children: [
			{
				path: '',
				redirectTo: 'quotes',
				pathMatch: 'full'
			},
			{
				path: 'quotes',
				component: BooksQuotesComponent,
			},
			{
				path: 'list',
				component: BooksListComponent,
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(booksRoutes)],
	exports: [RouterModule]
})

export class BooksRoutingModule {
}
