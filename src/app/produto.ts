export class Produto {
  id?:  string | number;
  nome!: string;
  descricao!: string;
  preco!: number;

  constructor(id?: string | number , nome?: string, descricao?: string, preco?: number) {
    this.id = id || '';
    this.nome = nome || '';
    this.descricao = descricao || '';
    this.preco = preco || 0;
  }
}
