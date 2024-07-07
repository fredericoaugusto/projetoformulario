package br.ufrn.imd.sendemail.repository;

import br.ufrn.imd.sendemail.model.FileDB;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface FileDBRepository extends CrudRepository<FileDB, UUID> {
}
