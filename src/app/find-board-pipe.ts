import { Pipe, PipeTransform } from "@angular/core";
import Board from "./classes/board";

@Pipe({
  name: "currentBoard",
  pure: false,
})
export class FindBoardPipe implements PipeTransform {
  transform(items: Board[], uuid: string): Board | undefined {
    if (!items || !uuid) return;
    return items.find((b) => b.uuid === uuid);
  }
}
