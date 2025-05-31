import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Cliente, ClientesResponse } from '../../models/cliente';
import Swal from 'sweetalert2';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-modulo-clientes',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './modulo-clientes.component.html',
  styleUrl: './modulo-clientes.component.css',
})
export class ModuloClientesComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(
    private router: Router,
    private location: Location,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.clienteService.findAll().subscribe((clientes: ClientesResponse) => {
      this.clientes = clientes.data;
    });
  }

  onRemoveCliente(id: string): void {
    Swal.fire({
      title: '¿Confirma eliminación?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.deleteCliente(id).subscribe({
          next: () => {
            this.clientes = this.clientes.filter((c) => c.id !== id);
          },
          error: (err: any) => {
            console.error('Error al eliminar cliente:', err);
            Swal.fire({
              title: 'Error',
              text: 'No se pudo eliminar el cliente.',
              icon: 'error',
            });
          },
        });
        Swal.fire({
          title: 'Eliminado!',
          text: 'El elemento ha sido eliminado',
          icon: 'success',
        });
      }
    });
  }

  onSelectedCliente(cliente: Cliente): void {
    this.router.navigate([`/clientes/edit/${cliente.id}`], {
      state: { cliente },
    });
  }

  goBack(): void {
    this.location.back(); // Regresa a la página anterior
  }
}
