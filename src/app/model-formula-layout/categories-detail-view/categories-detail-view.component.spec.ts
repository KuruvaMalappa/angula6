import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesDetailViewComponent } from './categories-detail-view.component';

describe('CategoriesDetailViewComponent', () => {
  let component: CategoriesDetailViewComponent;
  let fixture: ComponentFixture<CategoriesDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriesDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
