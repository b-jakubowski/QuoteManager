import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show header', () => {
    expect(fixture.nativeElement.querySelector('[data-test="header"]')).toBeTruthy();
  });

  it('should show navbar logo icon', () => {
    expect(fixture.nativeElement.querySelector('[data-test="logo-icon"]')).toBeTruthy();
  });

  it('should show navbar search input', () => {
    expect(fixture.nativeElement.querySelector('[data-test="search-input"]')).toBeTruthy();
  });

  it('should show navbar user avatar', () => {
    expect(fixture.nativeElement.querySelector('[data-test="user-avatar"]')).toBeTruthy();
  });
});
