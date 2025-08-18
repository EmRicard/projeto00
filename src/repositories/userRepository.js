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

    update(id, userData) {
        const user = this.findById(id);
        if (user) {
            user.name = userData.name;
            user.email = userData.email;
            return user;
        }
        return null;
    }

    delete(id) {
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
            return users.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = new UserRepository();