import { v4 as uuidv4 } from "uuid";

export default class Card {
  uuid = "";
  name = "";
  description = "";
  created: Date | null;

  constructor(uuid: string | null, name: string, description: string, created: Date) {
    this.uuid = !uuid ? uuidv4() : uuid;
    this.name = name;
    this.description = description;
    this.created = created ?? new Date();
  }
}
