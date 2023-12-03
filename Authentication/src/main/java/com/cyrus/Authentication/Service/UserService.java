package com.cyrus.Authentication.Service;

import com.cyrus.Authentication.Model.Login;
import com.cyrus.Authentication.Model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    public User saveUser(User user);

    public Optional<User> getUser(Integer id);

    public List<User> getUsers();

    public void putUser(Integer id, User user);

    public void deleteUser(Integer id);

    public Login loginUser(Login login);


}
