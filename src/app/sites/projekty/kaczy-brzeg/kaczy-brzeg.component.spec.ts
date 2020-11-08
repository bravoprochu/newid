import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaczyBrzegComponent } from './kaczy-brzeg.component';

describe('KaczyBrzegComponent', () => {
  let component: KaczyBrzegComponent;
  let fixture: ComponentFixture<KaczyBrzegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaczyBrzegComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KaczyBrzegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
