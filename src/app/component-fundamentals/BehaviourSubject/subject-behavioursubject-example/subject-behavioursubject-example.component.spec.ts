import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectBehavioursubjectExampleComponent } from './subject-behavioursubject-example.component';

describe('SubjectBehavioursubjectExampleComponent', () => {
  let component: SubjectBehavioursubjectExampleComponent;
  let fixture: ComponentFixture<SubjectBehavioursubjectExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectBehavioursubjectExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectBehavioursubjectExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
