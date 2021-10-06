import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardmenuitemComponent } from './boardmenuitem.component';

describe('BoardmenuitemComponent', () => {
  let component: BoardmenuitemComponent;
  let fixture: ComponentFixture<BoardmenuitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardmenuitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardmenuitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
