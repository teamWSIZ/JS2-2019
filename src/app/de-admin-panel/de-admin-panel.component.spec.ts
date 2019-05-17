import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeAdminPanelComponent } from './de-admin-panel.component';

describe('DeAdminPanelComponent', () => {
  let component: DeAdminPanelComponent;
  let fixture: ComponentFixture<DeAdminPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeAdminPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
