import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRaspoComponent } from './add-raspo.component';

describe('AddRaspoComponent', () => {
  let component: AddRaspoComponent;
  let fixture: ComponentFixture<AddRaspoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRaspoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRaspoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
