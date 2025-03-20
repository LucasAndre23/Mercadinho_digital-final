import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ProdutoModule } from '../produto/produto.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    ProdutoModule,
    FormsModule,
    MatButtonModule
  ]
})
export class ListaProdutoModule { }
