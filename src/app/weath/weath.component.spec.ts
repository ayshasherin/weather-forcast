import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeathComponent } from './weath.component';

describe('WeathComponent', () => {
  let component: WeathComponent;
  let fixture: ComponentFixture<WeathComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeathComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
