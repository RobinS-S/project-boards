import { Component, Input } from "@angular/core";
import { BoardStoreService } from "src/app/boardstore.service";
import Board from "src/app/classes/board";

@Component({
  selector: "app-boardselection",
  templateUrl: "./boardselection.component.html",
  styleUrls: ["./boardselection.component.scss"],
})
export class BoardSelectionComponent {
  @Input() boards: Board[] | null = null;
  editing = false;
  editingBoardUuid = "";

  constructor(public boardStore: BoardStoreService) {}

  clickEdit(boardUuid: string): void {
    console.log(`clickedit ${boardUuid}`);
    if (this.editing) {
      if (this.editingBoardUuid === boardUuid) {
        this.editing = false;
        return;
      }
      this.editingBoardUuid = boardUuid;
    } else {
      this.editing = true;
      this.editingBoardUuid = boardUuid;
    }
  }

  clickBoard(boardUuid: string | undefined): void {
    if (boardUuid) {
      this.boardStore.selectBoard(boardUuid);
      if (this.editing && this.editingBoardUuid !== boardUuid) {
        this.editing = false;
        this.editingBoardUuid = "";
      }
    }
  }

  createBoard(): void {
    if (this.editing) {
      this.editing = false;
      this.editingBoardUuid = "";
    }
    this.boardStore.addBoard();
  }

  saveBoard(): void {
    this.editing = false;
    this.editingBoardUuid = "";
  }
}
