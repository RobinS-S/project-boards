import { Component, Input } from "@angular/core";
import { BoardStoreService } from "../../boardstore.service";
import Board from "../../classes/board";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"],
})
export class BoardComponent {
  @Input() board: Board | undefined;

  @Input() editing = false;
  @Input() editingListUuid = "";

  constructor(public boardStore: BoardStoreService) {}

  deleteBoard(): void {
    if (this.boardStore.currentBoard) {
      this.boardStore.removeBoard(this.boardStore.currentBoard);
      this.boardStore.currentBoard = null;
    }
  }

  saveList(): void {
    this.editing = false;
    this.editingListUuid = "";
  }

  clickEdit(listUuid: string): void {
    if (this.editing) {
      if (this.editingListUuid === listUuid) {
        this.editing = false;
        return;
      }
      this.editingListUuid = listUuid;
    } else {
      this.editing = true;
      this.editingListUuid = listUuid;
    }
  }
}
