import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonItem,
  IonList,
  IonLabel
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonInput,
    IonButton,
    IonItem,
    IonList,
    IonLabel,
    CommonModule,
    FormsModule
  ]
})
export class TareasPage implements OnInit {
  nuevaTarea: string = '';
  listaTareas: string[] = [];
  nombreUsuario: string = 'Usuario';
  guardarLocal: boolean = true;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.nombreUsuario = nav?.extras?.state?.['usuario'] || 'Usuario';
  }

  ngOnInit() {
    const guardar = localStorage.getItem('guardarLocal');
    this.guardarLocal = guardar !== 'false';

    if (this.guardarLocal) {
      const tareasGuardadas = localStorage.getItem('listaTareas');
      if (tareasGuardadas) {
        this.listaTareas = JSON.parse(tareasGuardadas);
      }
    }
  }

  agregarTarea() {
    const tarea = this.nuevaTarea.trim();
    if (tarea) {
      this.listaTareas.push(tarea);
      this.nuevaTarea = '';

      if (this.guardarLocal) {
        localStorage.setItem('listaTareas', JSON.stringify(this.listaTareas));
      }
    }
  }

  eliminarTarea(index: number) {
    this.listaTareas.splice(index, 1);

    if (this.guardarLocal) {
      localStorage.setItem('listaTareas', JSON.stringify(this.listaTareas));
    }
  }

  irAConfiguracion() {
    this.router.navigate(['/configuracion']);
  }

  irAAcerca() {
    this.router.navigate(['/acerca']);
  }
}
