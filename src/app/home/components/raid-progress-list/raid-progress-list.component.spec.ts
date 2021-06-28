import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaidProgressListComponent } from './raid-progress-list.component';

describe('RaidProgressListComponent', () => {
  let component: RaidProgressListComponent;
  let fixture: ComponentFixture<RaidProgressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaidProgressListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaidProgressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
