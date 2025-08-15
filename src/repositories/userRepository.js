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

    findById(id) {
        return users.find(user => user.id === id);
    }
}

module.exports = new UserRepository();