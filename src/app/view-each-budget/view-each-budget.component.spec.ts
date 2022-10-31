import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEachBudgetComponent } from './view-each-budget.component';

describe('ViewEachBudgetComponent', () => {
  let component: ViewEachBudgetComponent;
  let fixture: ComponentFixture<ViewEachBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEachBudgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEachBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
