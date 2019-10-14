import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuotesComponent } from './all-quotes.component';

describe('AllQuotesComponent', () => {
	let component: AllQuotesComponent;
	let fixture: ComponentFixture<AllQuotesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AllQuotesComponent]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AllQuotesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
