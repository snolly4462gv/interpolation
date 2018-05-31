import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RazionalComponent } from './razional.component';

describe('RazionalComponent', () => {
  let component: RazionalComponent;
  let fixture: ComponentFixture<RazionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RazionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RazionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
