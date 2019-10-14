import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuotesComponent } from './quotes.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DailyQuoteComponent } from './daily-quote/daily-quote.component';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';
import { AllQuotesComponent } from './all-quotes/all-quotes.component';
import { BooksQuotesComponent } from './books-quotes/books-quotes.component';

describe('QuotesComponent', () => {
	let component: QuotesComponent;
	let fixture: ComponentFixture<QuotesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [QuotesComponent, BooksQuotesComponent, AllQuotesComponent, EditQuoteComponent],
			imports: [
				RouterTestingModule.withRoutes([
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
				])
			]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(QuotesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
