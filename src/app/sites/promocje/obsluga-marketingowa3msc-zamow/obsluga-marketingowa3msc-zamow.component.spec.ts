import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObslugaMarketingowa3mscZamowComponent } from './obsluga-marketingowa3msc-zamow.component';

describe('ObslugaMarketingowa3mscZamowComponent', () => {
  let component: ObslugaMarketingowa3mscZamowComponent;
  let fixture: ComponentFixture<ObslugaMarketingowa3mscZamowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObslugaMarketingowa3mscZamowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObslugaMarketingowa3mscZamowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
