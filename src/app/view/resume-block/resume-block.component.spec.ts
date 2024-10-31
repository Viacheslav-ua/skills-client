import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { Router } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'
import { TranslatePipeMock } from 'test/translate-pipe-mock'
import { ResumeBlockComponent } from './resume-block.component'

describe('ResumeBlockComponent', () => {
  let component: ResumeBlockComponent;
  let fixture: ComponentFixture<ResumeBlockComponent>

  const fakeRouter = jasmine.createSpyObj(['url', 'navigateByUrl'])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeBlockComponent, TranslatePipeMock],
      providers: [
        { provide: RouterTestingModule, useValue: fakeRouter }
      ],
      imports: [
        RouterTestingModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  })

  // it('isShowTranslator should take the value true if url === /resume', () => {
  //   // fakeRouter.url.and.returnValue('/resume')
  //   fakeRouter.navigateByUrl.and.returnValue('/resume')
  //   // fixture.detectChanges()
  //   // console.log(component.getUrl());

  //   expect(component.isShow).toBeFalsy()
  // })
});
