import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { BoardStoreService } from "src/app/boardstore.service";
import Board from "src/app/classes/board";

@Component({
  selector: "app-board-menu-item",
  templateUrl: "./boardmenuitem.component.html",
  styleUrls: ["./boardmenuitem.component.scss"],
})
export class BoardMenuItemComponent implements OnInit {
  @Input() board: Board | undefined;
  @Input() editing = false;
  @Input() editingBoardUuid = "";

  @Output() clickEdit = new EventEmitter<string>();
  @Output() saveBoard = new EventEmitter<void>();

  nameInput = new FormControl("nameinput");

  constructor(public boardStore: BoardStoreService) {}

  ngOnInit(): void {
    if (this.board) {
      this.nameInput.setValue(this.board.name);
    }
  }

  removeBoard(uuid: string | undefined): void {
    if (uuid) this.boardStore.removeBoard(uuid);
  }

  saveNewName(): void {
    if (this.nameInput.value.length > 0 && this.board) {
      this.board.name = this.nameInput.value;
      this.saveBoard.emit();
    }
  }
}
