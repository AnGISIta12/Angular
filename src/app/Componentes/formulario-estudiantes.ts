import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-estudiante',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-estudiantes.html'
})
export class FormularioEstudianteComponent {

  nombre: string = '';

  guardar() {
    console.log("Nombre guardado:", this.nombre);
  }
}