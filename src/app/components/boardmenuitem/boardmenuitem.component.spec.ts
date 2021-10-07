import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import {
  NbThemeModule,
  NbLayoutModule,
  NbCardModule,
  NbButtonModule,
  NbIconModule,
  NbButtonGroupModule,
  NbFormFieldModule,
} from "@nebular/theme";

import { BoardMenuItemComponent } from "./boardmenuitem.component";

describe("BoardMenuItemComponent", () => {
  let component: BoardMenuItemComponent;
  let fixture: ComponentFixture<BoardMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NbThemeModule.forRoot(),
        NbButtonModule,
        NbIconModule,
        NbEvaIconsModule,
        NbButtonGroupModule,
        NbFormFieldModule,
      ],
      declarations: [BoardMenuItemComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
