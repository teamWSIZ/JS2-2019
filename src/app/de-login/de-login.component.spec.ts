import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeLoginComponent } from './de-login.component';

describe('DeLoginComponent', () => {
  let component: DeLoginComponent;
  let fixture: ComponentFixture<DeLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
