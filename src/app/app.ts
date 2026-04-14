import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  titulo: string = 'Bienvenidos';
  nombreProfesor: string = 'Pablo';
  cantidadAlumnos: number = 25;
}
