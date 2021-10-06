import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormControl } from "@angular/forms";
import { BoardStoreService } from "src/app/boardstore.service";
import Card from "../../classes/card";

@Component({
  selector: "app-list-card",
  templateUrl: "./listcard.component.html",
  styleUrls: ["./listcard.component.scss"],
})
export class ListCardComponent implements OnInit {
  @Input() card: Card | undefined;
  @Input() editing = false;
  @Input() editingCardUuid = "";
  @Input() boardUuid: string | undefined = "";
  @Input() listUuid: string | undefined = "";
  @Output() clickEdit = new EventEmitter<string>();
  @Output() saveBoard = new EventEmitter<void>();
  nameInput = new FormControl("nameinput");
  descriptionInput = new FormControl("descriptioninput");

  constructor(public boardStore: BoardStoreService) {}

  ngOnInit(): void {
    if (this.card) {
      this.nameInput.setValue(this.card.name);
    }
  }

  removeCard(): void {
    if (this.card && this.boardUuid && this.listUuid)
      this.boardStore.removeCard(this.boardUuid, this.listUuid, this.card.uuid);
  }

  saveCard(): void {
    if (this.nameInput.value.length > 0 && this.card) {
      this.card.name = this.nameInput.value;
      this.card.description = this.descriptionInput.value;
      this.saveBoard.emit();
    }
  }
}
