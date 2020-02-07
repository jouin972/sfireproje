import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplemoduleComponent } from './examplemodule.component';

describe('ExamplemoduleComponent', () => {
  let component: ExamplemoduleComponent;
  let fixture: ComponentFixture<ExamplemoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplemoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
