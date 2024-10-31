import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ReactiveFormsModule } from "@angular/forms"
import { By } from "@angular/platform-browser"
import { TranslatePipeMock } from "test/translate-pipe-mock"
import { RegisterBlockUiComponent } from "./register-block-ui.component"

describe("RegisterBlockUiComponent", () => {
  let component: RegisterBlockUiComponent
  let fixture: ComponentFixture<RegisterBlockUiComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ RegisterBlockUiComponent, TranslatePipeMock ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterBlockUiComponent);
    component = fixture.componentInstance;

    component.formError = ''
    component.disabled = true

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  })

  it('empty value of login causes an error', () => {
    component.formGroup.setValue({
      login: '',
      password: 'password',
      confirmPassword: 'password',
    });
    expect(component.formGroup.valid).toEqual(false);
  });

  it('an empty password value causes an error', () => {
    component.formGroup.setValue({
      login: 'login',
      password: '',
      confirmPassword: 'password',
    })
    expect(component.formGroup.valid).toEqual(false);
  })

  it('checking #1 submitDisabled logic on inputs and fields', () => {
    component.formGroup.setValue({
      login: 'login',
      password: 'password',
      confirmPassword: 'password',
    })
    component.formError = ''
    component.disabled = false
    component.onChangePass()
    expect(component.submitDisabled).toEqual(false)
  })
  it('checking #2 submitDisabled logic on inputs and fields', () => {
    component.formGroup.setValue({
      login: 'login',
      password: 'password',
      confirmPassword: 'pass',
    })
    component.formError = ''
    component.disabled = false
    component.onChangePass()
    expect(component.submitDisabled).toEqual(true)
  })

  it('the onHide method reverses the Hide state', () => {
    const mockEvent = new MouseEvent('click')
    component.hide = false
    component.onHide(mockEvent)
    expect(component.hide).toEqual(true)

    component.onHide(mockEvent)
    expect(component.hide).toEqual(false)
  });

  it('Should emit a register event with an IAuthUser object on Submit', () => {
    const event = spyOn(component.register, "emit");
    component.formGroup.setValue({
      login: 'user',
      password: 'confidentiality',
      confirmPassword: 'confidentiality',
    })
    component.onSubmit();
    expect(event).toHaveBeenCalledWith({login: 'user', password: 'confidentiality'});
  })

  it('Should emit an errorSkip event when the form changes.',
  () => {
    const event = spyOn(component.errorSkip, "emit");
    component.onFormChange()
    expect(event).toHaveBeenCalled();
  })


})
