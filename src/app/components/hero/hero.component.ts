import { Component } from '@angular/core';
import { FormRutaComponent } from '../form-ruta/form-ruta.component';
import { HeroMapComponent } from '../hero-map/hero-map.component';
import { Ciudad } from '../../models/ciudad';
import { Ruta } from '../../models/ruta';
import { CiudadService } from '../../services/ciudad.service';
import { RutaService } from '../../services/rutas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'hero',
  standalone: true,
  imports: [FormRutaComponent, HeroMapComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  origen: Ciudad = new Ciudad();
  destino: Ciudad = new Ciudad();
  ciudades: Ciudad[] = [];
  rutas: Ruta[] = [];

  constructor(
    private ciudadService: CiudadService,
    private rutaService: RutaService,
    private route: Router
  ) {
    this.ciudadService.findAll().subscribe((ciudades: Ciudad[]) => {
      this.ciudades = ciudades;
    });
    this.rutaService.findAll().subscribe((rutas: Ruta[]) => {
      this.rutas = rutas;
    });
  }

  setOrigen(origen: Ciudad): void {
    this.origen = origen;
  }

  setDestino(destino: Ciudad): void {
    this.destino = destino;
  }
}
