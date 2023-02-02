import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BBScoreComponent } from './bb-score.component';

describe('BBScoreComponent', () => {
  let component: BBScoreComponent;
  let fixture: ComponentFixture<BBScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BBScoreComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BBScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
