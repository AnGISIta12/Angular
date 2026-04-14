import { Routes } from '@angular/router';
import { ListaEstudiantesComponent } from './Componentes/lista-estudiantes';
import { FormularioEstudianteComponent } from './Componentes/formulario-estudiantes';

export const routes: Routes = [
  { path: '', component: ListaEstudiantesComponent },
  { path: 'formulario', component: FormularioEstudianteComponent }
];