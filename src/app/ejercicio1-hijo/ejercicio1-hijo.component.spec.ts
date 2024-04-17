import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio1HijoComponent } from './ejercicio1-hijo.component';

describe('Ejercicio1HijoComponent', () => {
  let component: Ejercicio1HijoComponent;
  let fixture: ComponentFixture<Ejercicio1HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio1HijoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ejercicio1HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
