import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvulsionesComponent } from './convulsiones.component';

describe('ConvulsionesComponent', () => {
  let component: ConvulsionesComponent;
  let fixture: ComponentFixture<ConvulsionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvulsionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvulsionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
