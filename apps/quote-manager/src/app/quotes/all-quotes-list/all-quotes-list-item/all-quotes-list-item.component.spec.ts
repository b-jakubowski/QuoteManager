import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuotesListItemComponent } from './all-quotes-list-item.component';

describe('AllQuotesListItemComponent', () => {
  let component: AllQuotesListItemComponent;
  let fixture: ComponentFixture<AllQuotesListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllQuotesListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllQuotesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
