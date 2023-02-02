import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BBteamDetailsComponent } from './bbteam-details.component';

describe('BBteamDetailsComponent', () => {
  let component: BBteamDetailsComponent;
  let fixture: ComponentFixture<BBteamDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BBteamDetailsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(BBteamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
