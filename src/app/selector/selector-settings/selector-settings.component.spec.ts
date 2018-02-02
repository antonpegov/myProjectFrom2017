import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorSettingsComponent } from './selector-settings.component';

describe('SelectorSettingsComponent', () => {
  let component: SelectorSettingsComponent;
  let fixture: ComponentFixture<SelectorSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
