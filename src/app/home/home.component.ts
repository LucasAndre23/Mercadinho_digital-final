import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { CarrinhoService } from '../services/carrinho.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule]
})
export class HomeComponent {
  constructor(private snackBar: MatSnackBar, private carrinhoService: CarrinhoService) {}

  adicionarAoCarrinho(produto: any) {
    const nomeProduto = produto.nome || produto.name || 'Produto'; // Verifica a propriedade correta

    this.carrinhoService.adicionarAoCarrinho(produto);

    this.snackBar.open(`${nomeProduto} foi adicionado ao carrinho!`, 'Fechar', {
      duration: 3000,
      panelClass: ['success-snackbar'],
    });
  }
  products = [
    { imageUrl: 'assets/images/image1.png', name: 'Feijao', description: 'Um excelente produto genérico para o dia a dia.', price: 10.99 },
    { imageUrl: 'assets/images/cafe.png', name: 'Café', description: 'Café moído de alta qualidade para começar o dia com energia.', price: 15.50 },
    { imageUrl: 'assets/images/macarrao.png', name: 'Macarrão', description: 'Macarrão artesanal perfeito para suas receitas italianas.', price: 6.99 },
    { imageUrl: 'assets/images/pipos.png', name: 'Pipoca', description: 'Pipoca deliciosa e crocante para acompanhar seus filmes.', price: 4.99 },
    { imageUrl: 'assets/images/treloso.png', name: 'Biscoito Treloso', description: 'Biscoito recheado de chocolate, favorito das crianças.', price: 3.50 },
    { imageUrl: 'assets/images/margarina.png', name: 'Margarina', description: 'Margarina cremosa ideal para pães e torradas.', price: 5.99 },
    { imageUrl: 'assets/images/ovos.png', name: 'Ovos', description: 'Ovos frescos diretamente da granja, ideais para sua dieta diária.', price: 12.00 },
    { imageUrl: 'assets/images/shampoo.png', name: 'Shampoo', description: 'Shampoo revitalizante para todos os tipos de cabelo.', price: 18.90 },
    { imageUrl: 'assets/images/leite.png', name: 'Leite', description: 'Leite integral rico em cálcio, ótimo para sua saúde.', price: 4.50 },
    { imageUrl: 'assets/images/cuscuz.png', name: 'Cuscuz', description: 'Cuscuz tradicional, perfeito para o café da manhã.', price: 3.99 },
    { imageUrl: 'assets/images/leitec.png', name: 'Leite Condensado', description: 'Leite condensado cremoso, ideal para sobremesas.', price: 6.50 },
    { imageUrl: 'assets/images/pipoca.png', name: 'Pipoca Premium', description: 'Grãos de pipoca selecionados para um preparo perfeito.', price: 5.00 },
    { imageUrl: 'assets/images/image2.jpg', name: 'Arroz', description: 'Arroz branco selecionado para as suas refeições.', price: 8.50 },
    { imageUrl: 'assets/images/image3.jpg', name: 'Feijão', description: 'Feijão carioca de alta qualidade, rico em proteínas.', price: 9.80 },
    { imageUrl: 'assets/images/image4.png', name: 'Óleo de Cozinha', description: 'Óleo vegetal ideal para frituras e preparos diversos.', price: 7.20 },
    { imageUrl: 'assets/images/image5.png', name: 'Farinha de Trigo', description: 'Farinha de trigo especial para bolos e pães caseiros.', price: 4.30 },
    { imageUrl: 'assets/images/image6.png', name: 'Açúcar', description: 'Açúcar refinado perfeito para adoçar suas receitas.', price: 3.70 },
    { imageUrl: 'assets/images/image7.jpeg', name: 'Sal', description: 'Sal refinado para temperar suas comidas com precisão.', price: 2.00 },
    { imageUrl: 'assets/images/image8.jpg', name: 'Refrigerante', description: 'Refrigerante refrescante, ideal para qualquer ocasião.', price: 6.90 },
    { imageUrl: 'assets/images/image9.png', name: 'Suco de Laranja', description: 'Suco de laranja natural, pronto para servir.', price: 5.50 },
    { imageUrl: 'assets/images/image10.png', name: 'Biscoito Salgado', description: 'Biscoito salgado crocante e saboroso para qualquer hora.', price: 4.00 }
  ];




}
