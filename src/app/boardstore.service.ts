import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import Board from "./classes/board";
import BoardList from "./classes/boardlist";
import Card from "./classes/card";

@Injectable({
  providedIn: "root",
})
export class BoardStoreService {
  private readonly _boards = new BehaviorSubject<Board[]>([]);

  readonly boards$ = this._boards.asObservable();

  currentBoard: string | null = null;
  currentEditingBoard: string | null = null;

  get boards(): Board[] {
    return this._boards.getValue();
  }

  private set boards(val: Board[]) {
    this._boards.next(val);
  }

  get currentBoardItem(): Board | undefined {
    console.log("get");
    return this.boards.find((b) => b.uuid === this.currentBoard);
  }

  setBoardsArray(boards: Board[]): void {
    this._boards.next(boards);
  }

  addBoard(): void {
    const newBoard = new Board(null, "New board", []);
    this.boards = [...this.boards, newBoard];
    this.currentBoard = newBoard.uuid;
  }

  removeBoard(boardUuid: string): void {
    if (boardUuid === this.currentBoard) this.currentBoard = null;
    this.boards = this.boards.filter((b) => b.uuid !== boardUuid);
  }

  findBoard(boardUuid: string): Board | undefined {
    return this.boards.find((b) => b.uuid === boardUuid);
  }

  findList(boardUuid: string, listUuid: string): BoardList | undefined {
    return this.boards.find((b) => b.uuid === boardUuid)?.lists.find((l) => l.uuid === listUuid);
  }

  addList(boardUuid: string): void {
    const board = this.findBoard(boardUuid);
    if (board) {
      board.lists.push(new BoardList(null, "New list", []));
    }
  }

  removeList(boardUuid: string, listUuid: string): void {
    const board = this.findBoard(boardUuid);
    if (board) {
      board.lists = board.lists.filter((list) => list.uuid !== listUuid);
    }
  }

  removeCard(boardUuid: string, listUuid: string, cardUuid: string): void {
    const list = this.findList(boardUuid, listUuid);
    if (list) {
      const index = list.cards.findIndex((c) => c.uuid === cardUuid);
      if (index !== -1) list.cards.splice(index, 1);
    }
  }

  selectBoard(uuid: string | undefined): void {
    if (uuid) {
      this.currentBoard = uuid;
      this.currentEditingBoard = null;
    }
  }

  addCard(boardUuid: string | undefined, listUuid: string | undefined): void {
    if (boardUuid && listUuid) {
      const list = this.findList(boardUuid, listUuid);
      console.log(boardUuid);
      if (list) {
        list.cards.push(new Card(null, "New card", "Description", new Date(), null, null));
      }
    }
  }

  loadFromLocalStorage(): void {
    if (this.testLocalStorage()) {
      try {
        const data = localStorage.getItem("todo_list");
        if (data) {
          const parsedData = JSON.parse(data) as Board[];
          this.boards = parsedData;
        }
      } catch {
        localStorage.removeItem("todo_list");
      }
    }
  }

  saveToLocalStorage(): void {
    if (this.testLocalStorage()) {
      try {
        localStorage.setItem("todo_list", JSON.stringify(this.boards));
      } catch {
        console.log("halp");
      }
    }
  }

  testLocalStorage(): boolean {
    if (typeof localStorage !== "undefined") {
      try {
        localStorage.setItem("feature_test", "yes");
        if (localStorage.getItem("feature_test") === "yes") {
          localStorage.removeItem("feature_test");
          return true;
        } else {
          return false;
        }
      } catch (e) {
        return false;
      }
    } else {
      return false;
    }
  }
}
