import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lession2Component } from './lession2.component';

describe('Lession2Component', () => {
  let component: Lession2Component;
  let fixture: ComponentFixture<Lession2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Lession2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Lession2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
