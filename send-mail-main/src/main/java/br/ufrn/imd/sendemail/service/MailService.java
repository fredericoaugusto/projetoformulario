package br.ufrn.imd.sendemail.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.InputStreamSource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;

@Service
public class MailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public void senEmailWithAttachment(String to, String subject, String text, MultipartFile file) {
        try {
            MimeMessage message = javaMailSender.createMimeMessage();

            MimeMessageHelper helper = new MimeMessageHelper(message, true);

            helper.setFrom("noreply@email.com");
            helper.setTo("fred3112.augusto@gmail.com");
            helper.setSubject(subject);
            helper.setText(text);

            InputStreamSource attachment = new ByteArrayResource(file.getBytes());
            helper.addAttachment(file.getOriginalFilename(), attachment);

            javaMailSender.send(message);
        } catch (MessagingException | IOException messagingException ) {
            System.out.println(messagingException.getMessage());
        }
    }
}
