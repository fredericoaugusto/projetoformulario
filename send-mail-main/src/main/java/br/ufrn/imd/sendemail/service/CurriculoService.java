package br.ufrn.imd.sendemail.service;

import br.ufrn.imd.sendemail.model.Curriculo;
import br.ufrn.imd.sendemail.repository.CurriculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CurriculoService {

    @Autowired
    private CurriculoRepository curriculoRepository;

    public Curriculo addCurriculo(Curriculo curriculo){
        return curriculoRepository.save(curriculo);
    }

    public Curriculo updateCurriculo(Curriculo curriculo){
        return curriculoRepository.save(curriculo);
    }

    public void deleteCurriculo(long id){
        curriculoRepository.deleteById(id);
    }

    public Curriculo getCurriculoById(long id){
        return curriculoRepository.findById(id).get();
    }

    public List<Curriculo> getCurriculos(){
        return (List<Curriculo>) curriculoRepository.findAll();
    }
}
