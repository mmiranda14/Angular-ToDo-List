import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTasksComponent } from './display-tasks.component';

describe('DisplayTasksComponent', () => {
  let component: DisplayTasksComponent;
  let fixture: ComponentFixture<DisplayTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
