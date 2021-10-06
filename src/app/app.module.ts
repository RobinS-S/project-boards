import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbSelectModule,
  NbCardModule,
  NbListModule,
  NbButtonModule,
  NbIconModule,
  NbButtonGroupModule,
  NbInputModule,
  NbFormFieldModule,
} from "@nebular/theme";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import { BoardSelectionComponent } from "./components/boardselection/boardselection.component";
import { BoardComponent } from "./components/board/board.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BoardlistComponent } from "./components/boardlist/boardlist.component";
import { ListCardComponent } from "./components/listcard/listcard.component";
import { FindBoardPipe } from "./find-board-pipe";
import { BoardMenuItemComponent } from "./components/boardmenuitem/boardmenuitem.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BoardSelectionComponent,
    BoardComponent,
    BoardlistComponent,
    ListCardComponent,
    FindBoardPipe,
    BoardMenuItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    NbSidebarModule.forRoot(),
    NbThemeModule.forRoot({ name: "dark" }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSelectModule,
    NbCardModule,
    NbListModule,
    NbButtonModule,
    NbIconModule,
    NbButtonGroupModule,
    NgbModule,
    NbInputModule,
    NbFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
