import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LagrangComponent } from './lagrang.component';

describe('LagrangComponent', () => {
  let component: LagrangComponent;
  let fixture: ComponentFixture<LagrangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LagrangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LagrangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
