import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObslugaMarketingowa3mscComponent } from './obsluga-marketingowa3msc.component';

describe('ObslugaMarketingowa3mscComponent', () => {
  let component: ObslugaMarketingowa3mscComponent;
  let fixture: ComponentFixture<ObslugaMarketingowa3mscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObslugaMarketingowa3mscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObslugaMarketingowa3mscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
