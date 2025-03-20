package com.example.socialbackspring.controlador;

import com.example.socialbackspring.modelo.Produto;
import com.example.socialbackspring.servico.ProdutoServico;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produtos")
@CrossOrigin(origins = "*") 
public class ProdutoControlador {

    @Autowired
    private ProdutoServico produtoServico;

    @GetMapping
    public List<Produto> listarProdutos() {
        return this.produtoServico.listarProdutos();
    }

    @GetMapping("/{id}")
    public Produto getProdutoPorId(@PathVariable("id") Long idProduto) {
        return this.produtoServico.getProdutoPorId(idProduto);
    }

    @GetMapping("/buscar")
    public List<Produto> buscarPorNome(@RequestParam String nome) {
        if (nome == null || nome.isEmpty()) {
            throw new IllegalArgumentException("O parâmetro 'nome' não pode ser vazio");
        }
        return produtoServico.buscarPorNome(nome);
    }



    


    @PostMapping
    public Produto inserir(@RequestBody Produto produtoAInserir) {
        return this.produtoServico.inserirOuAtualizar(produtoAInserir);
    }

    @PutMapping("/{id}")
    public Produto atualizar(@PathVariable("id") Long id, @RequestBody Produto produtoAAtualizar) {
        produtoAAtualizar.setId(id);
        return this.produtoServico.inserirOuAtualizar(produtoAAtualizar);
    }

    @DeleteMapping("/{id}")
public ResponseEntity<Void> apagar(@PathVariable("id") Long id) {
    Produto produto = this.produtoServico.getProdutoPorId(id);

    if (produto == null) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build(); 
    }

    this.produtoServico.apagar(id);
    return ResponseEntity.noContent().build(); 
}

}
