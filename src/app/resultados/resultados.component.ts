import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { CarrinhoService } from '../services/carrinho.service';
@Component({
  selector: 'app-resultados',
  standalone : false,
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {
  resultados: any[] = [];

  constructor(private router: Router, private carrinhoService: CarrinhoService) {
    // Recupera os dados passados pelo state
    const navigation = this.router.getCurrentNavigation();
    this.resultados = navigation?.extras.state?.['resultados'] || [];
  }

  adicionarAoCarrinho(produto: any): void {
    const produtoFormatado = {
      nome: produto.nome || produto.name, // Mapeia `name` para `nome`
      descricao: produto.descricao || produto.description, // Mapeia `description` para `descricao`
      preco: produto.preco || produto.price // Mapeia `price` para `preco`
    };

    this.carrinhoService.adicionarAoCarrinho(produtoFormatado);
    alert(`${produtoFormatado.nome} foi adicionado ao carrinho!`);
  }


}
