import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { Store } from "@ngrx/store"
import { IAuthUser } from "src/app/core/interfaces/user.interfaces"
import { LoginBlockComponent } from "./login-block.component"

describe("LoginBlockComponent", () => {
  let component: LoginBlockComponent
  let fixture: ComponentFixture<LoginBlockComponent>
  const user = {login: 'login', password: 'password'}

  const fakeStore = jasmine.createSpyObj("fStore", ["dispatch", "pipe"])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBlockComponent ],
      providers: [
        { provide: Store, useValue: fakeStore }
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents()
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBlockComponent)
    component = fixture.componentInstance

    fakeStore.dispatch.and.callFake((obj: IAuthUser) => obj)
    fakeStore.dispatch.calls.reset()
    fixture.detectChanges()
  });

  it("should create", () => {
    expect(component).toBeTruthy()
  })

  it("onLogin should call the dispatch.login() selector and pass the payload to it.", () => {
    component.onLogin(user)
    expect(fakeStore.dispatch).toHaveBeenCalledWith({
      ...user,
      type: '[Auth] Login',
    })
  })

  it("onErrorSkip should call the dispatch.loginSkipError() selector", () => {
    component.onErrorSkip()
    expect(fakeStore.dispatch).toHaveBeenCalledWith({ type: '[Auth] Login Skip Error' })
  })

  it("onLoginTest should call the dispatch.login() selector and pass the TestLogin to it.", () => {
    component.onLoginTest()
    expect(fakeStore.dispatch).toHaveBeenCalledWith({
      login: 'Test',
      password: 'test',
      type: '[Auth] Login',
    })
  })
})
