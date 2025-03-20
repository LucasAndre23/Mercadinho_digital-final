import { Component, OnInit } from '@angular/core';
import { Produto } from '../../produto';
import { ProdutoService } from '../../services/produto.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  standalone : false,

  styleUrls: ['./listagem-produto.component.css']
})
export class ListagemProdutoComponent implements OnInit {
  products: Produto[] = [];
  produtoEmEdicao: Produto | null = null;

  constructor(
    private produtoService: ProdutoService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtoService.listar().subscribe({
      next: (produtos) => {
        this.products = produtos;
      },
      error: (err) => {
        console.error('Erro ao carregar produtos:', err);

        if (err.status === 404) {
          // Caso o endpoint não seja encontrado
          this.snackBar.open('Erro 404: Produtos não encontrados. Verifique a URL do servidor.', 'Fechar', {
            duration: 30000,
            panelClass: ['error-snackbar']
          });
        } else if (err.status === 503) {
          // Caso o servidor esteja indisponível
          this.snackBar.open('Erro 503: O servidor está indisponível no momento. Tente novamente mais tarde.', 'Fechar', {
            duration: 30000,
            panelClass: ['error-snackbar']
          });
        } else {
          // Qualquer outro erro
          this.snackBar.open('Erro ao carregar produtos. O servidor pode estar fora do ar.', 'Fechar', {
            duration: 30000,
            panelClass: ['error-snackbar']
          });
        }
      }
    });
  }


  removeProduct(produto: Produto): void {
    if (produto.id) {
      this.produtoService.removeProduct(produto.id as number).subscribe({
        next: () => {
          const index = this.products.findIndex((p) => p.id === produto.id);
          if (index !== -1) {
            this.products.splice(index, 1);
          }
          this.snackBar.open(`${produto.nome} foi removido com sucesso!`, 'Fechar', {
            duration: 3000,
            panelClass: ['success-snackbar']
          });
        },
        error: () => {
          this.snackBar.open('Erro ao remover o produto!', 'Fechar', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        }
      });
    }
  }

  editarProduto(produto: Produto): void {
    // Coloca o produto em estado de edição
    this.produtoEmEdicao = { ...produto }; // Clona o produto para edição
  }

  salvarEdicao(): void {
    if (this.produtoEmEdicao && this.produtoEmEdicao.id) {
      this.produtoService.atualizarProduto(+this.produtoEmEdicao.id, this.produtoEmEdicao).subscribe({
        next: (produtoAtualizado) => {
          const index = this.products.findIndex((p) => p.id === produtoAtualizado.id);
          if (index !== -1) {
            this.products[index] = produtoAtualizado; // Atualiza o produto na lista
          }
          this.snackBar.open(`${produtoAtualizado.nome} foi atualizado com sucesso!`, 'Fechar', {
            duration: 3000,
            panelClass: ['success-snackbar']
          });
          this.produtoEmEdicao = null; // Sai do modo de edição
        },
        error: () => {
          this.snackBar.open('Erro ao atualizar o produto!', 'Fechar', {
            duration: 3000,
            panelClass: ['error-snackbar']
          });
        }
      });
    }
  }

  cancelarEdicao(): void {
    this.produtoEmEdicao = null; // Cancela a edição
  }
}
