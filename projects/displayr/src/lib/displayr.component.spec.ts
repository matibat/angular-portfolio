import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayrComponent } from './displayr.component';

describe('DisplayrComponent', () => {
  let component: DisplayrComponent;
  let fixture: ComponentFixture<DisplayrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
