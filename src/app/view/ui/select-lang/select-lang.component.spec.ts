import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslatePipeMock } from 'test/translate-pipe-mock';

// import { SelectLangComponent } from './select-lang.component';

// describe('SelectLangComponent', () => {
//   let component: SelectLangComponent
//   let fixture: ComponentFixture<SelectLangComponent>

//   const fakeTranslateService = jasmine.createSpyObj(['translate'])

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [SelectLangComponent, TranslatePipeMock],
//       imports: [TranslateModule],
//       providers: [
//         { provide: TranslateService, useValue: fakeTranslateService }
//       ],
//       schemas: [CUSTOM_ELEMENTS_SCHEMA],
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(SelectLangComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
