import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone : false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  senha: string = '';

  constructor(private router: Router, private snackBar: MatSnackBar) {}

  fazerLogin(): void {
    if (this.usuario.trim() === '' || this.senha.trim() === '') {
      this.snackBar.open('Por favor, preencha todos os campos!', 'Fechar', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
      return;
    }

    if (this.usuario === 'admin' && this.senha === '1234') {
      this.snackBar.open('Login realizado com sucesso!', 'Fechar', {
        duration: 3000,
        panelClass: ['success-snackbar']
      });
      this.router.navigate(['/']);
    } else {
      this.snackBar.open('Usuário ou senha inválidos!', 'Fechar', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
    }
  }


  esqueciSenha(): void {
    this.snackBar.open('Funcionalidade em desenvolvimento!', 'Fechar', {
      duration: 3000,
      panelClass: ['info-snackbar']
    });
  }


  registrar(): void {
    this.router.navigate(['/']);
  }
}
