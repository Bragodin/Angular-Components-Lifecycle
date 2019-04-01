import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifsysleComponent } from './lifsysle.component';

describe('LifsysleComponent', () => {
  let component: LifsysleComponent;
  let fixture: ComponentFixture<LifsysleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifsysleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifsysleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
