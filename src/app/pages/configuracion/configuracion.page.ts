import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonToggle,
  IonButton
} from '@ionic/angular/standalone';
import { Location } from '@angular/common';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonItem,
    IonLabel,
    IonToggle,
    IonButton
  ]
})
export class ConfiguracionPage implements OnInit {
  notificaciones = true;
  modoOscuro = false;
  guardarLocal = true;

  constructor(private location: Location) {}

  ngOnInit() {
    const oscuro = localStorage.getItem('modoOscuro');
    const noti = localStorage.getItem('notificaciones');
    const local = localStorage.getItem('guardarLocal');

    this.modoOscuro = oscuro !== 'false';
    this.notificaciones = noti !== 'false';
    this.guardarLocal = local !== 'false';

    this.aplicarModoOscuro();
  }

  aplicarModoOscuro() {
    if (this.modoOscuro) {
      document.body.classList.remove('modo-claro');
      localStorage.setItem('modoOscuro', 'true');
    } else {
      document.body.classList.add('modo-claro');
      localStorage.setItem('modoOscuro', 'false');
    }
  }

  guardarPreferencias() {
    localStorage.setItem('notificaciones', this.notificaciones ? 'true' : 'false');
    localStorage.setItem('guardarLocal', this.guardarLocal ? 'true' : 'false');

    alert('Preferencias guardadas');
  }

  volverAlInicio() {
    window.location.href = '/bienvenida';
  }

  volverAtras() {
    this.location.back();
  }
}
