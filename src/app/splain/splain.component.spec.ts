import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplainComponent } from './splain.component';

describe('SplainComponent', () => {
  let component: SplainComponent;
  let fixture: ComponentFixture<SplainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
