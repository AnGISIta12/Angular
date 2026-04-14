import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  titulo: string = 'Bienvenidos';
  nombreProfesor: string = 'Pablo';
  cantidadAlumnos: number = 25;
}

export const App = AppComponent;
