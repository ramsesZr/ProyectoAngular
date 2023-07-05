import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreRamsesComponent } from './sobre-ramses.component';

describe('SobreRamsesComponent', () => {
  let component: SobreRamsesComponent;
  let fixture: ComponentFixture<SobreRamsesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobreRamsesComponent]
    });
    fixture = TestBed.createComponent(SobreRamsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
