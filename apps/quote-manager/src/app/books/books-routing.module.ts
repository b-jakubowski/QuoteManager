import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';

const booksRoutes: Routes = [
	{
		path: 'books',
		component: BooksComponent,
		children: [
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(booksRoutes)],
	exports: [RouterModule]
})

export class BooksRoutingModule {
}
