package com.cyrus.Authentication.Controller;

import com.cyrus.Authentication.Model.Login;
import com.cyrus.Authentication.Model.User;
import com.cyrus.Authentication.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/post")
    public ResponseEntity<String> post(@RequestBody User user){
        userService.saveUser(user);
        return ResponseEntity.ok("user added");
    }

    @GetMapping("/get/{id}")
    public Optional<User> getUser(@PathVariable("id") Integer id){
        return userService.getUser(id);
    }

    @GetMapping("/get/all")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @PutMapping("/put/{id}")
    public ResponseEntity<String> putUser(@PathVariable("id") Integer id, @RequestBody User user){
        userService.putUser(id, user);
        return ResponseEntity.ok("user updated");
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") Integer id){
        userService.deleteUser(id);
        return ResponseEntity.ok("user deleted");
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Login login){
        Login currentLogin = userService.loginUser(login);
        return ResponseEntity.ok(currentLogin);
    }

    @GetMapping("/cash/{id}")
    public Integer getCash(@PathVariable("id") Integer id){
        return userService.getCash(id);
    }



}
