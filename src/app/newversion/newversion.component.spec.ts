import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewversionComponent } from './newversion.component';

describe('NewversionComponent', () => {
  let component: NewversionComponent;
  let fixture: ComponentFixture<NewversionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewversionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewversionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
