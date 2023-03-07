import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { Store } from "@ngrx/store"
import { IAuthUser } from "src/app/core/interfaces/user.interfaces"
import { RegisterBlockComponent } from "./register-block.component"

describe("RegisterBlockComponent", () => {
  let component: RegisterBlockComponent
  let fixture: ComponentFixture<RegisterBlockComponent>
  const user = {login: 'login', password: 'password'}

  const fakeStore = jasmine.createSpyObj("fStore", ["dispatch", "pipe"])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterBlockComponent ],
      providers: [
        { provide: Store, useValue: fakeStore }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBlockComponent)
    component = fixture.componentInstance

    fakeStore.dispatch.and.callFake((obj: IAuthUser) => obj)
    fakeStore.dispatch.calls.reset()
    fixture.detectChanges()
  });

  it("should create", () => {
    expect(component).toBeTruthy()
  })

  it("onRegister should call the dispatch.register() selector and pass the payload to it.", () => {
    component.onRegister(user)
    expect(fakeStore.dispatch).toHaveBeenCalledWith({
      ...user,
      type: '[Auth] Register',
    })
  })

  it("onErrorSkip should call the dispatch.loginSkipError() selector", () => {
    component.onErrorSkip()
    expect(fakeStore.dispatch).toHaveBeenCalledWith({ type: '[Auth] Login Skip Error' })
  })

})
