import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScratchMeComponent } from './scratch-me.component';

describe('ScratchMeComponent', () => {
  let component: ScratchMeComponent;
  let fixture: ComponentFixture<ScratchMeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScratchMeComponent]
    });
    fixture = TestBed.createComponent(ScratchMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
