import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuotesListComponent } from './all-quotes-list.component';

describe('AllQuotesComponent', () => {
	let component: AllQuotesListComponent;
	let fixture: ComponentFixture<AllQuotesListComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AllQuotesListComponent]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AllQuotesListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
