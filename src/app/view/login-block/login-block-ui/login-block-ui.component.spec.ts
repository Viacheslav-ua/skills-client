import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { TranslatePipeMock } from "test/translate-pipe-mock";
import { LoginBlockUiComponent } from "./login-block-ui.component";

describe("LoginBlockUiComponent", () => {
  let component: LoginBlockUiComponent;
  let fixture: ComponentFixture<LoginBlockUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ LoginBlockUiComponent, TranslatePipeMock ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginBlockUiComponent);
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
    });
    expect(component.formGroup.valid).toEqual(false);
  });

  it('an empty password value causes an error', () => {
    component.formGroup.setValue({
      login: 'login',
      password: '',
    })
    expect(component.formGroup.valid).toEqual(false);
  })

  it('checking submitDisabled logic on inputs and fields', () => {
    component.formGroup.setValue({
      login: 'login',
      password: 'password',
    })
    component.formError = ''
    component.disabled = false

    expect(component.submitDisabled).toEqual(false)
  })

  it('the onHide method reverses the Hide state', () => {
    const mockEvent = new MouseEvent('click')
    component.hide = false
    component.onHide(mockEvent)
    expect(component.hide).toEqual(true)

    component.onHide(mockEvent)
    expect(component.hide).toEqual(false)
  });

  it('Should emit a login event with an IAuthUser object on Submit', () => {
    const event = spyOn(component.login, "emit");
    component.formGroup.setValue({
      login: 'user',
      password: 'confidentiality',
    })

    component.onSubmit();
    expect(event).toHaveBeenCalledWith({login: 'user', password: 'confidentiality'});
  })

  it('Should emit a loginTest event when the \"Test Login\" button in the template is clicked',
  () => {
    const event = spyOn(component.loginTest, "emit");
    const button = fixture.debugElement.query(By.css(".ng-test-login"));
    event.calls.reset();
    button.nativeElement.click();
    expect(event).toHaveBeenCalled();
  })

  it('Should emit an errorSkip event when the form changes.',
  () => {
    const event = spyOn(component.errorSkip, "emit");
    component.onFormChange()
    expect(event).toHaveBeenCalled();
  })


})
