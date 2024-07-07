package br.ufrn.imd.sendemail.service;

import br.ufrn.imd.sendemail.model.FileDB;
import br.ufrn.imd.sendemail.repository.FileDBRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;
import java.util.stream.Stream;

@Service
public class FileDBService {

    @Autowired
    private FileDBRepository fileDBRepository;

    public FileDB store(MultipartFile file) throws IOException {
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        FileDB fileDB = new FileDB();
        fileDB.setData(file.getBytes());
        fileDB.setName(fileName);
        fileDB.setType(file.getContentType());

        return fileDBRepository.save(fileDB);
    }

    public FileDB getFile(UUID id){
        return fileDBRepository.findById(id).get();
    }

    public Iterable<FileDB> getAllFiles(){
        return fileDBRepository.findAll();
    }
}
