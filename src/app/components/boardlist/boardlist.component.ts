import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { BoardStoreService } from "../../boardstore.service";
import BoardList from "../../classes/boardlist";

@Component({
  selector: "app-board-list",
  templateUrl: "./boardlist.component.html",
  styleUrls: ["./boardlist.component.scss"],
})
export class BoardListComponent implements OnInit {
  @Input() list: BoardList | undefined;
  @Input() boardUuid: string | undefined = "";

  @Input() editing = false;
  @Input() editingList = false;
  @Input() editingCardUuid = "";
  @Input() editingListUuid = "";

  @Output() saveList = new EventEmitter<void>();
  @Output() clickEditList = new EventEmitter<string>();

  nameInput = new FormControl("nameinput");

  constructor(public boardStore: BoardStoreService) {}

  ngOnInit(): void {
    this.nameInput.setValue(this.list?.name);
  }

  clickEdit(cardUuid: string): void {
    if (this.editing) {
      if (this.editingCardUuid === cardUuid) {
        this.editing = false;
        return;
      }
      this.editingCardUuid = cardUuid;
    } else {
      this.editing = true;
      this.editingCardUuid = cardUuid;
    }
  }

  clickBoard(cardUuid: string | undefined): void {
    if (cardUuid) {
      this.boardStore.selectBoard(cardUuid);
      if (this.editing && this.editingCardUuid !== cardUuid) {
        this.editing = false;
        this.editingCardUuid = "";
      }
    }
  }

  createCard(): void {
    if (this.editing) {
      this.editing = false;
      this.editingCardUuid = "";
    }
    this.boardStore.addCard(this.boardUuid, this.list?.uuid);
  }

  saveCard(): void {
    this.editing = false;
    this.editingCardUuid = "";
  }

  saveNewName(): void {
    if (this.nameInput.value.length > 0 && this.list) {
      this.list.name = this.nameInput.value;
      this.saveList.emit();
    }
  }

  removeList(): void {
    if (this.boardUuid && this.list) this.boardStore.removeList(this.boardUuid, this.list.uuid);
  }

  clickEditForList(): void {
    if (this.list) this.clickEditList.emit(this.list.uuid);
  }
}
