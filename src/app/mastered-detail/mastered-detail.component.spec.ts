import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteredDetailComponent } from './mastered-detail.component';

describe('MasteredDetailComponent', () => {
  let component: MasteredDetailComponent;
  let fixture: ComponentFixture<MasteredDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasteredDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasteredDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
