import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BepDailogComponent } from './bep-dailog.component';

describe('BepDailogComponent', () => {
  let component: BepDailogComponent;
  let fixture: ComponentFixture<BepDailogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BepDailogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BepDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
