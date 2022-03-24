import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SodaCanComponent } from './soda-can.component';

describe('SodaCanComponent', () => {
  let component: SodaCanComponent;
  let fixture: ComponentFixture<SodaCanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SodaCanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SodaCanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
