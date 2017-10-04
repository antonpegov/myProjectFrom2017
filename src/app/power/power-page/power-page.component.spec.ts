import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerPageComponent } from './power-page.component';

describe('PowerPageComponent', () => {
  let component: PowerPageComponent;
  let fixture: ComponentFixture<PowerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
