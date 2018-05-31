import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtoonComponent } from './newtoon.component';

describe('NewtoonComponent', () => {
  let component: NewtoonComponent;
  let fixture: ComponentFixture<NewtoonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewtoonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
