import BoardList from "./boardlist";
import { v4 as uuidv4 } from "uuid";

export default class Board {
  uuid = "";
  name = "";
  lists: BoardList[] = [];

  constructor(uuid: string | null, name: string, lists: BoardList[]) {
    this.uuid = !uuid ? uuidv4() : uuid;
    this.name = name;
    this.lists = lists;
  }
}
