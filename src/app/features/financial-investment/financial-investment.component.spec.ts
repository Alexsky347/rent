import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialInvestmentComponent } from './financial-investment.component';

describe('FinancialInvestmentComponent', () => {
  let component: FinancialInvestmentComponent;
  let fixture: ComponentFixture<FinancialInvestmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialInvestmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinancialInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
