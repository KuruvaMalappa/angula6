import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelProcessedComponent } from './model-processed.component';

describe('ModelProcessedComponent', () => {
  let component: ModelProcessedComponent;
  let fixture: ComponentFixture<ModelProcessedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelProcessedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelProcessedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
