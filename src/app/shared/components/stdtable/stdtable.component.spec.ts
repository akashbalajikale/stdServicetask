import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdtableComponent } from './stdtable.component';

describe('StdtableComponent', () => {
  let component: StdtableComponent;
  let fixture: ComponentFixture<StdtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
