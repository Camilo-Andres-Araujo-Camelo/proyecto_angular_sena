import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-modulo-viajes',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './modulo-viajes.component.html',
  styleUrl: './modulo-viajes.component.css',
})
export class ModuloViajesComponent {
  constructor(private router: Router, private location: Location) {}

  goBack() {
    this.location.back();
  }
}
