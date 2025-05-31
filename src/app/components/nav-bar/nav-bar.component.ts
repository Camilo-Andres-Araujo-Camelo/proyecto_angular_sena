import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  sesionActiva: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    this.authService.sesionActiva$.subscribe((estado) => {
      this.sesionActiva = estado; // Se actualizará automáticamente
    });
  }

  ngOnInit(): void {}

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
