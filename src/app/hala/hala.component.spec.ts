import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalaComponent } from './hala.component';

describe('HalaComponent', () => {
  let component: HalaComponent;
  let fixture: ComponentFixture<HalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
