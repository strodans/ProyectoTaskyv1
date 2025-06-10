import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'bienvenida',
    pathMatch: 'full',
  },
  {
    path: 'bienvenida',
    loadComponent: () => import('./pages/bienvenida/bienvenida.page').then(m => m.BienvenidaPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'tareas',
    loadComponent: () => import('./pages/tareas/tareas.page').then(m => m.TareasPage)
  },
  {
    path: 'acerca',
    loadComponent: () => import('./pages/acerca/acerca.page').then(m => m.AcercaPage)
  },
  {
    path: 'configuracion',
    loadComponent: () => import('./pages/configuracion/configuracion.page').then(m => m.ConfiguracionPage)
  }
];
