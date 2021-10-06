import Card from "./card";
import { v4 as uuidv4 } from "uuid";

export default class BoardList {
  uuid = "";
  name = "";
  cards: Card[] = [];

  constructor(uuid: string | null, name: string, cards: Card[]) {
    this.uuid = !uuid ? uuidv4() : uuid;
    this.name = name;
    this.cards = cards;
  }
}
