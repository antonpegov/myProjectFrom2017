import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorLoadedComponent } from './selector-loaded.component';

describe('SelectorLoadedComponent', () => {
  let component: SelectorLoadedComponent;
  let fixture: ComponentFixture<SelectorLoadedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorLoadedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorLoadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
