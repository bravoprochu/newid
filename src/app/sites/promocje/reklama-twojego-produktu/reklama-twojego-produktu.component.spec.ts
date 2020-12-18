import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReklamaTwojegoProduktuComponent } from './reklama-twojego-produktu.component';

describe('ReklamaTwojegoProduktuComponent', () => {
  let component: ReklamaTwojegoProduktuComponent;
  let fixture: ComponentFixture<ReklamaTwojegoProduktuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReklamaTwojegoProduktuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReklamaTwojegoProduktuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
