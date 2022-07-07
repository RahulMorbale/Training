import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributedireciveComponent } from './attributedirecive.component';

describe('AttributedireciveComponent', () => {
  let component: AttributedireciveComponent;
  let fixture: ComponentFixture<AttributedireciveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributedireciveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributedireciveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
