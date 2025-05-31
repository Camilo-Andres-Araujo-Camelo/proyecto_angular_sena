import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ciudad } from '../../models/ciudad';
import { FormsModule } from '@angular/forms';
import { Ruta } from '../../models/ruta';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'form-ruta',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './form-ruta.component.html',
  styleUrl: './form-ruta.component.css',
})
export class FormRutaComponent implements OnInit {
  @Input() rutas: Ruta[] = [];
  @Input() ciudades: Ciudad[] = [];

  @Output() origenEmmit: EventEmitter<Ciudad> = new EventEmitter();
  @Output() destinoEmmit: EventEmitter<Ciudad> = new EventEmitter();

  origen: Ciudad = new Ciudad();
  destino: Ciudad = new Ciudad();

  constructor(private router: Router) {}
  ngOnInit(): void {}

  setOrigen(origen: Ciudad): void {
    this.origen = origen;
    this.origenEmmit.emit(this.origen);
  }

  setDestino(destino: Ciudad): void {
    this.destino = destino;
    this.destinoEmmit.emit(this.destino);
  }

  comprarNext() {
    this.router.navigate(['/facturacion']);
  }
}
