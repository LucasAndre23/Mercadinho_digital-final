import { Component } from '@angular/core';
import { Produto } from '../produto';
import { ProdutoFirestoreService } from '../services/produto-firestore.service';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listagem-produto',
  standalone: true,
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './listaproduto.component.html',
  styleUrls: ['./listaproduto.component.css']
})
export class ListaProdutoComponent {
  produtos: Produto[] = [];
  displayedColumns: string[] = ['nome', 'descricao', 'preco', 'acoes'];
  novoProduto: Produto = { nome: '', descricao: '', preco: 0 };

  constructor(private produtoService: ProdutoFirestoreService, private roteador: Router, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.produtoService.listar().subscribe(produtos => {
      this.produtos = produtos;
    });
  }

  adicionarProduto(): void {

    if (!this.novoProduto.nome || !this.novoProduto.descricao || this.novoProduto.preco <= 0) {
      this.snackBar.open('Todos os campos devem ser preenchidos corretamente!', 'Fechar', {
        duration: 3000,
        panelClass: ['error-snackbar'],
      });
      return;
    }

    this.produtoService.inserir(this.novoProduto).subscribe({
      next: (produtoAdicionado) => {
        console.log('Produto adicionado:', produtoAdicionado);
        this.produtos.push(produtoAdicionado);
        this.novoProduto = { nome: '', descricao: '', preco: 0 };


        this.snackBar.open('Produto adicionado com sucesso!', 'Fechar', {
          duration: 3000,
          panelClass: ['success-snackbar'],
        });
      },
      error: (err) => {
        console.error('Erro ao adicionar produto:', err);
        this.snackBar.open('Erro ao adicionar o produto!', 'Fechar', {
          duration: 3000,
          panelClass: ['error-snackbar'],
        });
      }
    });
  }




  apagar(id: string | undefined): void {
    if (!id) {
      this.snackBar.open('Erro: O ID do produto é inválido ou não foi encontrado!', 'Fechar', {
        duration: 3000,
        panelClass: ['error-snackbar']
      });
      console.error('O ID do produto está ausente ou inválido!');
      return;
    }

    this.produtoService.apagar(id).subscribe({
      next: () => {
        console.log('Produto removido com sucesso:', id);
        this.produtos = this.produtos.filter(produto => produto.id !== id);

        this.snackBar.open('Produto removido com sucesso!', 'Fechar', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
      },
      error: (err) => {
        console.error('Erro ao remover o produto:', err);

        this.snackBar.open('Erro ao remover o produto. Tente novamente mais tarde.', 'Fechar', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    });
  }

}
