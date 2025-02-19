package com.web.portfolio.contact;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class Config implements WebMvcConfigurer {
    public void addCorsMapping(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins("https://abdealiportfolio.netlify.app").allowedMethods("*")
                .allowedHeaders("*");
    }
}
