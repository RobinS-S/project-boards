import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import {
  NbButtonGroupModule,
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconModule,
  NbLayoutModule,
  NbThemeModule,
} from "@nebular/theme";
import { BoardStoreService } from "src/app/boardstore.service";
import { ListCardComponent } from "../listcard/listcard.component";

import { BoardListComponent } from "./boardlist.component";

class BoardStoreServiceStub {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  selectBoard = (cardUuid: string | undefined) => {};
}

describe("BoardListComponent", () => {
  let component: BoardListComponent;
  let fixture: ComponentFixture<BoardListComponent>;
  const boardStoreServiceStub = new BoardStoreServiceStub();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NbThemeModule.forRoot(),
        NbLayoutModule,
        NbCardModule,
        NbButtonModule,
        ReactiveFormsModule,
        NbIconModule,
        NbEvaIconsModule,
        NbButtonGroupModule,
        NbFormFieldModule,
      ],
      declarations: [BoardListComponent, ListCardComponent],
      providers: [{ provide: BoardStoreService, useValue: boardStoreServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  fit("should be able to click board", () => {
    const sampleUuid = "crazy-card";
    component.editing = true;
    component.editingCardUuid = sampleUuid;
    spyOn(boardStoreServiceStub, "selectBoard").and.callThrough();
    component.clickBoard(sampleUuid);
    expect(boardStoreServiceStub.selectBoard).toHaveBeenCalledWith(sampleUuid);
    expect(component.editing).toBe(true);
    expect(component.editingCardUuid).toBe(sampleUuid);
  });
});
