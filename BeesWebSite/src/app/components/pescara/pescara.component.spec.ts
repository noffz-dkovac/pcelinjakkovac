import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PescaraComponent } from './pescara.component';

describe('PescaraComponent', () => {
  let component: PescaraComponent;
  let fixture: ComponentFixture<PescaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PescaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PescaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
