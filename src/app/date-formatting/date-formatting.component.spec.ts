import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateFormattingComponent } from './date-formatting.component';

describe('DateFormattingComponent', () => {
  let component: DateFormattingComponent;
  let fixture: ComponentFixture<DateFormattingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateFormattingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateFormattingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
