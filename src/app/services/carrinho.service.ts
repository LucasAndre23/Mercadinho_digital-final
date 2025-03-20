import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private itens: any[] = []; // Armazena os itens do carrinho

  adicionarAoCarrinho(produto: any) {
    this.itens.push(produto); // Adiciona o produto ao carrinho
  }

  obterItens() {
    return this.itens; // Retorna os itens no carrinho
  }

  limparCarrinho() {
    this.itens = []; // Limpa todos os itens do carrinho
  }

  calcularTotal(): number {
    // Soma os preços de todos os itens
    return this.itens.reduce((total, item) => total + item.price, 0);
  }
}
