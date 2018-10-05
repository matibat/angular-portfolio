import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickerPalleteComponent } from './color-picker-pallete.component';

describe('ColorPickerPalleteComponent', () => {
  let component: ColorPickerPalleteComponent;
  let fixture: ComponentFixture<ColorPickerPalleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPickerPalleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickerPalleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
