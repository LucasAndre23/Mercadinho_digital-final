import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../services/carrinho.service';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itens: any[] = [];
  total: number = 0;

  constructor(private snackBar : MatSnackBar,private carrinhoService: CarrinhoService) {}

  ngOnInit(): void {
    this.carregarCarrinho();
  }

  carregarCarrinho() {
    this.itens = this.carrinhoService.obterItens();
    this.calcularTotal();
  }

  limparCarrinho() {
    this.carrinhoService.limparCarrinho();
    this.carregarCarrinho();

    this.snackBar.open('Carrinho limpo!', 'Fechar', {
      duration: 3000,
      panelClass: ['success-snackbar'],
    });
  }


  calcularTotal() {
    this.total = this.carrinhoService.calcularTotal();
  }
}
