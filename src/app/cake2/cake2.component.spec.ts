import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cake2Component } from './cake2.component';

describe('Cake2Component', () => {
  let component: Cake2Component;
  let fixture: ComponentFixture<Cake2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cake2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cake2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
