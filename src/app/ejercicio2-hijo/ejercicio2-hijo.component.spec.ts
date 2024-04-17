import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio2HijoComponent } from './ejercicio2-hijo.component';

describe('Ejercicio2HijoComponent', () => {
  let component: Ejercicio2HijoComponent;
  let fixture: ComponentFixture<Ejercicio2HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio2HijoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ejercicio2HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
