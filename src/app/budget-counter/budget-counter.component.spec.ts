import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetCounterComponent } from './budget-counter.component';

describe('BudgetCounterComponent', () => {
  let component: BudgetCounterComponent;
  let fixture: ComponentFixture<BudgetCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
