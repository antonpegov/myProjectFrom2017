import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorAddedComponent } from './selector-added.component';

describe('SelectorAddedComponent', () => {
  let component: SelectorAddedComponent;
  let fixture: ComponentFixture<SelectorAddedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorAddedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
