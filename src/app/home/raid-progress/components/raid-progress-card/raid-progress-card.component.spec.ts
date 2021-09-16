import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RaidProgressCardComponent} from './raid-progress-card.component';

describe('RaidProgressCardComponent', () => {
  let component: RaidProgressCardComponent;
  let fixture: ComponentFixture<RaidProgressCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidProgressCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidProgressCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
