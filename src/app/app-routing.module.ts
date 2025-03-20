import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroProdutoComponent } from '../../src/app/produto/cadastro-produto/cadastro-produto.component';
import { ListagemProdutoComponent } from './lista-produto/listagem-produto/listagem-produto.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ListaProdutoComponent } from './listaproduto/listaproduto.component';
import { ResultadosComponent } from './resultados/resultados.component';
const routes: Routes = [

  {
    path: 'produtos',
    component: ListaProdutoComponent
   },
   {

    path: 'resultados',
     component: ResultadosComponent

    },
  { path: 'carrinho',
     component: CarrinhoComponent },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cadastro-produto',
    component: CadastroProdutoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'listagem-produto',
    component: ListagemProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
