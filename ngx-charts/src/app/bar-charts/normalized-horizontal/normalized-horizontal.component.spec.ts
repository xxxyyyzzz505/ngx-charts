import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalizedHorizontalComponent } from './normalized-horizontal.component';

describe('NormalizedHorizontalComponent', () => {
  let component: NormalizedHorizontalComponent;
  let fixture: ComponentFixture<NormalizedHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NormalizedHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalizedHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
