import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectpraciceComponent } from './subjectpracice.component';

describe('SubjectpraciceComponent', () => {
  let component: SubjectpraciceComponent;
  let fixture: ComponentFixture<SubjectpraciceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectpraciceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectpraciceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
