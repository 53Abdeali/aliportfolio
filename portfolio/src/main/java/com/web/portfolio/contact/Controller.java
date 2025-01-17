package com.web.portfolio.contact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class Controller {
    
    @Autowired
    private PortService portService;

    @PostMapping("/contact")
    public ResponseEntity<String> postMethodName(@RequestBody Model model) {
        portService.sendMessage(model);
        return new ResponseEntity<>("Message sent successfully", HttpStatus.OK);
    }
    
}
