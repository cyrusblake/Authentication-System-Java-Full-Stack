package com.cyrus.Authentication.Service;

import com.cyrus.Authentication.Model.Login;
import com.cyrus.Authentication.Model.User;
import com.cyrus.Authentication.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;
    @Autowired
    public UserServiceImpl(PasswordEncoder passwordEncoder){
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User saveUser(User user) {
        User newUser = new User(
                user.getId(),
                user.getName(),
                user.getEmail(),
                this.passwordEncoder.encode(user.getPassword())
        );
        return userRepository.save(newUser);
    }

    @Override
    public Optional<User> getUser(Integer id) {
        return userRepository.findById(id);
    }

    @Override
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @Override
    public void putUser(Integer id, User user) {
        Optional<User> optionalUser = userRepository.findById(id);

        if(optionalUser.isPresent()){
            User existingUser = optionalUser.get();
            existingUser.setName(user.getName());
            existingUser.setEmail(user.getEmail());
            existingUser.setPassword(this.passwordEncoder.encode(user.getPassword()));
            userRepository.save(existingUser);
        }
    }

    @Override
    public void deleteUser(Integer id){ userRepository.deleteById(id); }

    @Override
    public Login loginUser(Login login) {

        User user1 = userRepository.findByEmail(login.getEmail());

        if (user1 != null){
            String password = login.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);

            if(isPwdRight){
                Optional<User> user = userRepository.findByEmailAndPassword(login.getEmail(), encodedPassword);
                if (user.isPresent()){
                    return new Login("Login Success", true);
                } else {
                    return new Login("Login Failed", false);
                }
            } else {
                return new Login("password not match", false);
            }
        } else {
            return new Login("Email not exists", false);
        }

    }

    @Override
    public Integer getCash(Integer id) {
        Optional<User> optionalUser = userRepository.findById(id);

        if (optionalUser.isPresent()){
            User existingUser = optionalUser.get();
            return existingUser.getCash();
        }
        return id;
    }


}
