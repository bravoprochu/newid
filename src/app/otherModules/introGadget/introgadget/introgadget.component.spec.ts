import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrogadgetComponent } from './introgadget.component';

describe('IntrogadgetComponent', () => {
  let component: IntrogadgetComponent;
  let fixture: ComponentFixture<IntrogadgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrogadgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrogadgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
