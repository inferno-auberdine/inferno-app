import {ComponentFixture, TestBed} from '@angular/core/testing';

import {InfernoCardComponent} from './inferno-card.component';

describe('InfernoCardComponent', () => {
  let component: InfernoCardComponent;
  let fixture: ComponentFixture<InfernoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfernoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfernoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
