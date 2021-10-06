import { v4 as uuidv4 } from "uuid";

export default class Card {
  uuid = "";
  name = "";
  description = "";
  created: Date | null;
  updated: Date | null;
  dueDate: Date | null;

  constructor(
    uuid: string | null,
    name: string,
    description: string,
    created: Date,
    updated: Date | null,
    dueDate: Date | null
  ) {
    this.uuid = !uuid ? uuidv4() : uuid;
    this.name = name;
    this.description = description;
    this.created = created ?? new Date();
    this.updated = updated;
    this.dueDate = dueDate;
  }
}
