package com.web.portfolio.contact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class PortService {

    @Autowired
    private JavaMailSender jms;

    public void sendMessage(Model model) {
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo("aliabdealifakhri53@gmail.com");
        msg.setSubject("Get in touch contact message from: " + model.getFirstName() + model.getLastName());
        msg.setText("Message: " + model.getMessage() + "\n\n" + "Name: " + model.getFirstName() + model.getLastName() + "\n"
                + "Email: " + model.getEmail() + "\n" + "Phone: " + model.getPhone());
        jms.send(msg);
    }
}
