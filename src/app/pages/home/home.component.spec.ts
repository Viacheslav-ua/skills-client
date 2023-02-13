import { ComponentFixture, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core'
import { Pipe, PipeTransform } from '@angular/core';
import { HomeComponent } from './home.component'

@Pipe({
	name: "translate"
})
class TranslatePipeMock implements PipeTransform {
	public name: string = "translate";

	public transform(query: string, ...args: any[]): any {
		return query;
	}
}

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  const fakeTranslateService = jasmine.createSpyObj(['translate'])

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, TranslatePipeMock],
      imports: [
        RouterTestingModule
      ],
      providers: [
        HomeComponent,
        { provide: TranslateService, useValue: fakeTranslateService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  })
})
