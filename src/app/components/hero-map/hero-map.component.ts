import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { Ciudad } from '../../models/ciudad';

@Component({
  selector: 'hero-map',
  standalone: true,
  imports: [GoogleMap],
  templateUrl: './hero-map.component.html',
  styleUrl: './hero-map.component.css',
})
export class HeroMapComponent implements OnInit, OnChanges {
  @Input() origen!: Ciudad;
  @Input() destino!: Ciudad;

  @ViewChild(GoogleMap) map!: GoogleMap;

  zoom = 6;
  // center: google.maps.LatLngLiteral = { lat: 4.711, lng: -74.0721 };
  center: google.maps.LatLngLiteral = { lat: 5.0, lng: -73.0 };
  directionsRenderer = new google.maps.DirectionsRenderer();
  directionsService = new google.maps.DirectionsService();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['origen'] || changes['destino']) {
      console.log('ngOnChanges - Origen:', this.origen);
      console.log('ngOnChanges - Destino:', this.destino);
      this.trazarRuta();
    }
  }

  ngAfterViewInit() {
    this.directionsRenderer.setMap(this.map.googleMap!);
    this.trazarRuta();
  }

  trazarRuta() {
    if (!this.origen || !this.destino) {
      console.log('No hay origen o destino válido');
      return;
    }

    const request: google.maps.DirectionsRequest = {
      origin: { lat: this.origen.lat, lng: this.origen.lng }, // Usar las coordenadas de Origen
      destination: { lat: this.destino.lat, lng: this.destino.lng }, // Usar las coordenadas de Origen
      travelMode: google.maps.TravelMode.DRIVING, // Modo de transporte
    };

    this.directionsService.route(request, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.directionsRenderer.setDirections(result);
      } else {
        console.error('Error al calcular la ruta:', status);
      }
    });
  }
}
