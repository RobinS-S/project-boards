import { TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterTestingModule } from "@angular/router/testing";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import {
  NbButtonGroupModule,
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbSelectModule,
  NbSidebarModule,
  NbThemeModule,
} from "@nebular/theme";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { BoardComponent } from "./components/board/board.component";
import { BoardSelectionComponent } from "./components/boardselection/boardselection.component";

describe("AppComponent", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,

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
      declarations: [AppComponent, BoardSelectionComponent, BoardComponent],
    }).compileComponents();
  });

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector("nb-layout-header > nav > h2")?.textContent).toBe("ProjectBoards");
  });
});
