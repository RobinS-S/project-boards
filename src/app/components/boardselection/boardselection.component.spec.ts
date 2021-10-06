import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardSelectionComponent } from './boardselection.component';

describe('BoardSelectionComponent', () => {
  let component: BoardSelectionComponent;
  let fixture: ComponentFixture<BoardSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
