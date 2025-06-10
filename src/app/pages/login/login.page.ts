import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonInput,
    IonButton
  ]
})
export class LoginPage {
  nombreUsuario: string = '';

  constructor(private router: Router) {}

  entrar() {
    if (this.nombreUsuario.trim()) {
      this.router.navigate(['/tareas'], {
        state: { usuario: this.nombreUsuario.trim() }
      });
    } else {
      alert('Por favor ingresa tu nombre');
    }
  }
}
