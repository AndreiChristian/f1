import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitsItemComponent } from './circuits-item.component';

describe('CircuitsItemComponent', () => {
  let component: CircuitsItemComponent;
  let fixture: ComponentFixture<CircuitsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircuitsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircuitsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
