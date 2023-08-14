package co.devskills.springbootboilerplate;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

    @GetMapping(value = "/account/{account_id}")
    @ResponseStatus(HttpStatus.OK)
    public String healthCheck(){
        return "pong";
    }
}
