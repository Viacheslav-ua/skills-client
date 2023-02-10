import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBlockComponent } from './resume-block.component';

describe('ResumeBlockComponent', () => {
  let component: ResumeBlockComponent;
  let fixture: ComponentFixture<ResumeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
