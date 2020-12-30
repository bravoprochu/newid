import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowSliderComponent } from './window-slider.component';

describe('WindowSliderComponent', () => {
  let component: WindowSliderComponent;
  let fixture: ComponentFixture<WindowSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
