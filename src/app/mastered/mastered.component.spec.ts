import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteredComponent } from './mastered.component';

describe('MasteredComponent', () => {
  let component: MasteredComponent;
  let fixture: ComponentFixture<MasteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
