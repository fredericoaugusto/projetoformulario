package br.ufrn.imd.sendemail.model;

import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.NumberFormat;

import java.io.File;
import java.io.Serializable;
import java.time.ZonedDateTime;

@Entity
public class Curriculo implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SEQ_CURRICULO")
    @SequenceGenerator(name = "SEQ_CURRICULO", sequenceName = "seq_curriculo", allocationSize = 1)
    private Long id;
    @CreatedDate
    @DateTimeFormat(pattern = "dd-MM-yyyy hh:mm:ss ")
    @Column(name = "send_at", nullable = false, updatable = false)
    private ZonedDateTime sendDate;

    @NotEmpty
    private String nome;
    @Email
    private String email;
    @NumberFormat(pattern = "(##)9.####-####")
    private String telefone;
    @NotEmpty
    private String cargoDesejado;
    @NotEmpty
    private String Escolaridade;
    private String observacoes;
    @OneToOne
    private FileDB curriculo;

    private String ipaddr;

    public String getIpaddr() {
        return ipaddr;
    }

    public void setIpaddr(String ipaddr) {
        this.ipaddr = ipaddr;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getCargoDesejado() {
        return cargoDesejado;
    }

    public void setCargoDesejado(String cargoDesejado) {
        this.cargoDesejado = cargoDesejado;
    }

    public String getEscolaridade() {
        return Escolaridade;
    }

    public void setEscolaridade(String escolaridade) {
        Escolaridade = escolaridade;
    }

    public String getObservacoes() {
        return observacoes;
    }

    public void setObservacoes(String observacoes) {
        this.observacoes = observacoes;
    }

    public FileDB getCurriculo() {
        return curriculo;
    }

    public void setCurriculo(FileDB curriculo) {
        this.curriculo = curriculo;
    }

    @PrePersist
    private void onSend(){
        this.sendDate = ZonedDateTime.now();
    }

}
