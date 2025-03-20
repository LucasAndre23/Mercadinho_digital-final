
import { Component } from '@angular/core';
import { Produto } from '../../produto';
import { ProdutoService } from '../../services/produto.service';
@Component({
  selector: 'app-cadastro-produto',
  standalone: false,
  
  templateUrl: './cadastro-produto.component.html',
  styleUrl: './cadastro-produto.component.css'
})
export class CadastroProdutoComponent {
  
  products: Produto;
  
  

  constructor(private produtoservices : ProdutoService) {

    this.products = new Produto( );

   }
  addProduct() {
    
    
    this.produtoservices.addProduct(this.products).subscribe( );
    this.products = new Produto( );
  }

  
}
