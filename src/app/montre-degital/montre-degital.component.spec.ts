import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontreDegitalComponent } from './montre-degital.component';

describe('MontreDegitalComponent', () => {
  let component: MontreDegitalComponent;
  let fixture: ComponentFixture<MontreDegitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontreDegitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontreDegitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
