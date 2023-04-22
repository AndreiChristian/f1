import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacesTableComponent } from './races-table.component';

describe('RacesTableComponent', () => {
  let component: RacesTableComponent;
  let fixture: ComponentFixture<RacesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RacesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
