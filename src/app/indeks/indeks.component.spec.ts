import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndeksComponent } from './indeks.component';

describe('IndeksComponent', () => {
  let component: IndeksComponent;
  let fixture: ComponentFixture<IndeksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndeksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndeksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
