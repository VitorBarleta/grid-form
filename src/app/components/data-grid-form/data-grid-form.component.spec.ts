import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridFormComponent } from './data-grid-form.component';

describe('DataGridFormComponent', () => {
  let component: DataGridFormComponent;
  let fixture: ComponentFixture<DataGridFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataGridFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
