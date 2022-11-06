import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcelinjakComponent } from './pcelinjak.component';

describe('PcelinjakComponent', () => {
  let component: PcelinjakComponent;
  let fixture: ComponentFixture<PcelinjakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PcelinjakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcelinjakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
