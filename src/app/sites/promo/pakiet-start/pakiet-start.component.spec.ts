import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PakietStartComponent } from './pakiet-start.component';

describe('PakietStartComponent', () => {
  let component: PakietStartComponent;
  let fixture: ComponentFixture<PakietStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PakietStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PakietStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
