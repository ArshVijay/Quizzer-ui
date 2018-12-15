import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QestionSetComponent } from './qestion-set.component';

describe('QestionSetComponent', () => {
  let component: QestionSetComponent;
  let fixture: ComponentFixture<QestionSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QestionSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QestionSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
