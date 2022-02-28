import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDailyComponent } from './registro-daily.component';

describe('RegistroDailyComponent', () => {
  let component: RegistroDailyComponent;
  let fixture: ComponentFixture<RegistroDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroDailyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
