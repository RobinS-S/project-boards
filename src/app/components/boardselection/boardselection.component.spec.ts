import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import {
  NbButtonModule,
  NbCardModule,
  NbIconModule,
  NbListModule,
  NbThemeModule,
} from "@nebular/theme";
import { BoardMenuItemComponent } from "../boardmenuitem/boardmenuitem.component";

import { BoardSelectionComponent } from "./boardselection.component";

describe("BoardSelectionComponent", () => {
  let component: BoardSelectionComponent;
  let fixture: ComponentFixture<BoardSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NbThemeModule.forRoot(), NbButtonModule, NbIconModule, NbEvaIconsModule, NbListModule, NbCardModule],
      declarations: [BoardSelectionComponent, BoardMenuItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it('can create new board', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector(""))
  }
});
