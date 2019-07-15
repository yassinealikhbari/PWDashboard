import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicsDetailsComponent } from './pics-details.component';

describe('PicsDetailsComponent', () => {
  let component: PicsDetailsComponent;
  let fixture: ComponentFixture<PicsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
