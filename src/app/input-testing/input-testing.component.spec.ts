import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTestingComponent } from './input-testing.component';

describe('InputTestingComponent', () => {
  let component: InputTestingComponent;
  let fixture: ComponentFixture<InputTestingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTestingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
