import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubdemoComponent } from './subdemo.component';


describe('SubdemoComponent', () => {
  let component: SubdemoComponent;
  let fixture: ComponentFixture<SubdemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubdemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
