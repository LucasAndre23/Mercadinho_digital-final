package com.example.socialbackspring.servico;

import com.example.socialbackspring.modelo.Produto;
import com.example.socialbackspring.repositorio.ProdutoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProdutoServico {

    @Autowired
    private ProdutoRepositorio produtoRepositorio;

    public List<Produto> listarProdutos() {
        return produtoRepositorio.findAll();
    }

    public List<Produto> buscarPorNome(String nome) {
        return produtoRepositorio.findByNomeContainingIgnoreCase(nome);
    }
    
    

    public Produto getProdutoPorId(Long id) {
        return produtoRepositorio.findById(id).orElseThrow(() -> new RuntimeException("Produto não encontrado"));
    }

    public Produto inserirOuAtualizar(Produto produto) {
        return produtoRepositorio.save(produto);
    }

    public void apagar(Long id) {
        produtoRepositorio.deleteById(id);
    }
}
