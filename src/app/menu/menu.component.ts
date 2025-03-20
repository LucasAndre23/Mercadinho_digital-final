import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProdutoService } from '../services/produto.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  nomeProduto: string = '';
  resultados: any[] = [];

  constructor(
    private produtoService: ProdutoService,
    private router: Router,
    private http: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  irParaHome() {
    this.router.navigate(['/']);
  }

  buscarProduto() {
    const nomeProdutoTrimmed = this.nomeProduto.trim();
    if (nomeProdutoTrimmed) {
      this.produtoService.buscarPorNome(nomeProdutoTrimmed).subscribe({
        next: (response) => {
          if (response && response.length > 0) {
            this.router.navigate(['/resultados'], { state: { resultados: response } });
          } else {

            this.snackBar.open('Nenhum produto encontrado.', 'Fechar', {
              duration: 3000,
              panelClass: ['info-snackbar']
            });
          }
          this.nomeProduto = '';
        },
        error: (error) => {
          console.error('Erro ao buscar produto:', error);

          this.snackBar.open('Erro ao realizar a busca. Tente novamente mais tarde.', 'Fechar', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
          this.nomeProduto = '';
        }
      });
    } else {

      this.snackBar.open('Por favor, digite algo para buscar!', 'Fechar', {
        duration: 3000,
        panelClass: ['warning-snackbar']
      });
      this.nomeProduto = '';
    }
  }
}
