import { inject, Inject, Injectable, Injector, runInInjectionContext } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Produto } from '../produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoFirestoreService {
  private colecaoProdutos: AngularFirestoreCollection<Produto>;
  private injetor = inject(Injector)

  constructor(private afs: AngularFirestore) {
    this.colecaoProdutos = this.afs.collection<Produto>('Produtos');
  }

  listar(): Observable<Produto[]> {
    return this.colecaoProdutos.valueChanges({ idField: 'id' });
  }

  inserir(produto: Produto): Observable<Produto> {
    return from(this.colecaoProdutos.add(Object.assign({}, produto))).pipe(
      map(docRef => {
        return { ...produto, id: docRef.id }; // Retorna o produto com o ID gerado
      })
    );
  }

  apagar(id: string): Observable<void> {
    return runInInjectionContext(this.injetor, () => {
      return from(this.colecaoProdutos.doc(id).delete());
  });
}

  atualizar(produto: Produto): Observable<void> {
    const id = produto.id?.toString();
    if (!id) {
      throw new Error('O ID do produto é obrigatório para atualização.');
    }
    const produtoSemId = { ...produto };
    delete produtoSemId.id;
    return from(this.colecaoProdutos.doc(id).update(produtoSemId));
  }
}
