import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeComponent } from './free.component';

describe('FreeComponent', () => {
  let component: FreeComponent;
  let fixture: ComponentFixture<FreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreeComponent]
    });
    fixture = TestBed.createComponent(FreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
