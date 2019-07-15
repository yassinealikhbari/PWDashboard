import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaspiComponent } from './raspi.component';

describe('RaspiComponent', () => {
  let component: RaspiComponent;
  let fixture: ComponentFixture<RaspiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaspiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaspiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
