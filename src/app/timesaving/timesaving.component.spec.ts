import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesavingComponent } from './timesaving.component';

describe('TimesavingComponent', () => {
  let component: TimesavingComponent;
  let fixture: ComponentFixture<TimesavingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimesavingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
