import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpassComponent } from './gpass.component';

describe('GpassComponent', () => {
  let component: GpassComponent;
  let fixture: ComponentFixture<GpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
