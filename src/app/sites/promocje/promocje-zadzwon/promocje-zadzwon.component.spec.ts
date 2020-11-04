import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocjeZadzwonComponent } from './promocje-zadzwon.component';

describe('PromocjeZadzwonComponent', () => {
  let component: PromocjeZadzwonComponent;
  let fixture: ComponentFixture<PromocjeZadzwonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromocjeZadzwonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocjeZadzwonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
