# 🚀 Proyecto Angular

Este proyecto fue generado con Angular CLI versión **21.2.7** y está diseñado para el desarrollo de aplicaciones web modernas, escalables y mantenibles.

---

## 📌 Descripción General

Esta aplicación web ha sido desarrollada utilizando el framework Angular con el objetivo de construir una interfaz de usuario dinámica, modular y fácil de mantener.  

El proyecto sigue buenas prácticas de desarrollo frontend, incluyendo:
- Separación de responsabilidades
- Uso de componentes reutilizables
- Organización modular
- Escalabilidad del código

---

## 🎯 Objetivos del Proyecto

- Implementar una aplicación web utilizando Angular
- Comprender la arquitectura basada en componentes
- Aplicar buenas prácticas de desarrollo frontend
- Facilitar la reutilización de código
- Crear una interfaz interactiva y responsive

---

## 🧰 Tecnologías Utilizadas

- **Angular** → Framework principal
- **TypeScript** → Lenguaje de programación
- **HTML5** → Estructura de la aplicación
- **CSS3 / SCSS** → Estilos
- **Node.js** → Entorno de ejecución
- **Angular CLI** → Herramienta de desarrollo
- **RxJS** → Programación reactiva

---

## 📂 Estructura del Proyecto

```bash
src/
│── app/
│   ├── components/      # Componentes reutilizables
│   ├── services/        # Servicios para lógica de negocio
│   ├── models/          # Modelos de datos
│   ├── pages/           # Vistas principales
│   ├── app.component.*  # Componente raíz
│   └── app.module.ts    # Módulo principal
│
│── assets/              # Recursos estáticos (imágenes, íconos)
│── environments/        # Configuración de entornos
│── index.html           # HTML principal
│── main.ts              # Punto de entrada
│── styles.css           # Estilos globales

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
