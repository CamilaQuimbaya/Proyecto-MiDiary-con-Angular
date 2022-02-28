import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroAmigosComponent } from './registro-amigos.component';

describe('RegistroAmigosComponent', () => {
  let component: RegistroAmigosComponent;
  let fixture: ComponentFixture<RegistroAmigosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroAmigosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroAmigosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
