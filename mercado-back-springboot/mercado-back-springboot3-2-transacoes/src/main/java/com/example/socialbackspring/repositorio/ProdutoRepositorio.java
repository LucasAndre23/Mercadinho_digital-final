package com.example.socialbackspring.repositorio;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.socialbackspring.modelo.Produto;

@Repository
public interface ProdutoRepositorio extends JpaRepository<Produto, Long> {

    // Criação do método de consulta derivada
    List<Produto> findByNomeContainingIgnoreCase(String nome);

}
