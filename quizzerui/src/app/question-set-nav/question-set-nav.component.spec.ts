import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSetNavComponent } from './question-set-nav.component';

describe('QuestionSetNavComponent', () => {
  let component: QuestionSetNavComponent;
  let fixture: ComponentFixture<QuestionSetNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionSetNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSetNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
