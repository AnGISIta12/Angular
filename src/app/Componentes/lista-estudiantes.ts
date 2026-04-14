import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Estudiante } from '../models/estudiante';

@Component({
  selector: 'app-lista-estudiantes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-estudiantes.html'
})
export class ListaEstudiantesComponent implements OnInit {

  estudiantes: Estudiante[] = [];

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.estudiantes = [
      { id: 1, nombre: 'Ana', carrera: 'Sistemas', promedio: 4.5 },
      { id: 2, nombre: 'Luis', carrera: 'Industrial', promedio: 4.2 }
    ];
  }
}