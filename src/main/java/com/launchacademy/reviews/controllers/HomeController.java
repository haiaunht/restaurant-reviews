package com.launchacademy.reviews.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
  @GetMapping(value = {"/", "/categories", "/{categoryName}/restaurant/{id}", "/{categoryName}/restaurants", "/restaurants/new", "review/new", "/about"})
  public String forward() {
    return "forward:/index.html";
  }
//  TESTTESTTEST
}
