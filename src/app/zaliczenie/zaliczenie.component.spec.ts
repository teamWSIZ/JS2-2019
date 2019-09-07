import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaliczenieComponent } from './zaliczenie.component';

describe('ZaliczenieComponent', () => {
  let component: ZaliczenieComponent;
  let fixture: ComponentFixture<ZaliczenieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaliczenieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaliczenieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
