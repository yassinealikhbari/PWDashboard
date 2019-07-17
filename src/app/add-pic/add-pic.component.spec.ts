import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPicComponent } from './add-pic.component';

describe('AddPicComponent', () => {
  let component: AddPicComponent;
  let fixture: ComponentFixture<AddPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
