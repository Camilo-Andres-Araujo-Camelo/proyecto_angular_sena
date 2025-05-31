import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloTiquetesComponent } from './modulo-tiquetes.component';

describe('ModuloTiquetesComponent', () => {
  let component: ModuloTiquetesComponent;
  let fixture: ComponentFixture<ModuloTiquetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuloTiquetesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloTiquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
