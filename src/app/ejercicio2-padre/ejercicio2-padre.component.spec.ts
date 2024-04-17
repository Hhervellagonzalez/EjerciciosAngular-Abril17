import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio2PadreComponent } from './ejercicio2-padre.component';

describe('Ejercicio2PadreComponent', () => {
  let component: Ejercicio2PadreComponent;
  let fixture: ComponentFixture<Ejercicio2PadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio2PadreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ejercicio2PadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
