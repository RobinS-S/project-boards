import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { NbEvaIconsModule } from "@nebular/eva-icons";
import {
  NbButtonGroupModule,
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconModule,
  NbLayoutModule,
  NbThemeModule,
} from "@nebular/theme";

import { ListCardComponent } from "./listcard.component";

describe("ListCardComponent", () => {
  let component: ListCardComponent;
  let fixture: ComponentFixture<ListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NbThemeModule.forRoot(),
        NbLayoutModule,
        NbCardModule,
        NbButtonModule,
        ReactiveFormsModule,
        NbIconModule,
        NbEvaIconsModule,
        NbButtonGroupModule,
        NbFormFieldModule,
      ],
      declarations: [ListCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
