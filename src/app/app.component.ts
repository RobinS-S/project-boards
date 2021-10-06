import { Component, OnInit } from "@angular/core";
import { BoardStoreService as BoardStoreService } from "./boardstore.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  currentBoardUuid: string | undefined;

  constructor(public boardStore: BoardStoreService) {}

  ngOnInit(): void {
    this.boardStore.loadFromLocalStorage();
  }
}
