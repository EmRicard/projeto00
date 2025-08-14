const User = require('../models/userModel');

const users = [];
let currentID = 1;

class UserRepository {

    save(userData) {
        const user = new User(currentID++, userData.name, userData.email);
        users.push(user);
        return user;
    }

    findAll() {
        return users;
    }
}

module.exports = new UserRepository();