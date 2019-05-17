import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoksComponent } from './boks.component';

describe('BoksComponent', () => {
  let component: BoksComponent;
  let fixture: ComponentFixture<BoksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
