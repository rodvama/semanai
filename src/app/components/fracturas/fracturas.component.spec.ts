import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FracturasComponent } from './fracturas.component';

describe('FracturasComponent', () => {
  let component: FracturasComponent;
  let fixture: ComponentFixture<FracturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FracturasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FracturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
