package br.ufrn.imd.sendemail.repository;

import br.ufrn.imd.sendemail.model.Curriculo;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface CurriculoRepository  extends CrudRepository<Curriculo, Long> {
    Optional<Curriculo> findByEmail(String email);
}
