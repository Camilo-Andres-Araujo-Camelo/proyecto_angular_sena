import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../../models/cliente';
import Swal from 'sweetalert2';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'form-cliente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-cliente.component.html',
  styleUrl: './form-cliente.component.css',
})
export class FormClienteComponent {
  cliente: Cliente;
  isEditing: boolean = false;

  constructor(
    private router: Router,
    private location: Location,
    private clienteService: ClienteService
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.['cliente']) {
      this.cliente = { ...navigation.extras.state['cliente'] };
      this.isEditing = true;
    } else {
      this.cliente = new Cliente();
    }
  }

  onSubmit(clienteForm: NgForm): void {
    if (clienteForm.valid) {
      Swal.fire({
        title: 'Estás seguro de guardar los cambios?',
        icon: 'warning',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Guardar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          // Convertir id a string
          const clienteModified = {
            ...this.cliente,
            id: String(this.cliente.id),
          };

          const request$ = this.isEditing
            ? this.clienteService.updateCliente(clienteModified)
            : this.clienteService.createCliente(clienteModified);

          request$.subscribe({
            next: () => {
              Swal.fire('Guardado!', '', 'success');
              clienteForm.resetForm();
              this.goBack();
            },
            error: (err: any) => {
              console.error('Error al crear cliente:', err.message);
              Swal.fire({
                title: 'Error',
                text: err.message,
                icon: 'error',
              });
            },
          });
        }
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
}
