import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PakietStartZamowComponent } from './pakiet-start-zamow.component';

describe('PakietStartZamowComponent', () => {
  let component: PakietStartZamowComponent;
  let fixture: ComponentFixture<PakietStartZamowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PakietStartZamowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PakietStartZamowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
