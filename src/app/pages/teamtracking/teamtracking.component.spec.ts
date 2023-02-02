import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamtrackingComponent } from './teamtracking.component';

describe('TeamtrackingComponent', () => {
  let component: TeamtrackingComponent;
  let fixture: ComponentFixture<TeamtrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamtrackingComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TeamtrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
