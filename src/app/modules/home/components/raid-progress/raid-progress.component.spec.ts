import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RaidProgressComponent} from './raid-progress.component';

describe('RaidProgressComponent', () => {
  let component: RaidProgressComponent;
  let fixture: ComponentFixture<RaidProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
