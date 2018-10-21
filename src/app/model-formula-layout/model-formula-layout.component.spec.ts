import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelFormulaLayoutComponent } from './model-formula-layout.component';

describe('ModelFormulaLayoutComponent', () => {
  let component: ModelFormulaLayoutComponent;
  let fixture: ComponentFixture<ModelFormulaLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelFormulaLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelFormulaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
