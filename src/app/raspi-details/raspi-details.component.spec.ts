import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaspiDetailsComponent } from './raspi-details.component';

describe('RaspiDetailsComponent', () => {
  let component: RaspiDetailsComponent;
  let fixture: ComponentFixture<RaspiDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaspiDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaspiDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
