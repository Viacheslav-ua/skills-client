import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Store } from "@ngrx/store";
import { LoginBlockComponent } from "./login-block.component";

describe("LoginBlockComponent", () => {
  let component: LoginBlockComponent;
  let fixture: ComponentFixture<LoginBlockComponent>;

  const fakeStore = jasmine.createSpyObj("fStore", ["dispatch", "pipe"]);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBlockComponent ],
      providers: [
        LoginBlockComponent,
        { provide: Store, useValue: fakeStore }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBlockComponent);
    component = fixture.componentInstance;
    // fakeFirstDependencyService.start.and.callFake(() => console.log("it's a fake dependency"));

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  })
})
