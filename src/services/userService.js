const userRepository = require('../repositories/userRepository');   
const axios = require('axios');

class UserService{

    async createUser(userData){
        if(!userData.name || !userData.email || !userData.cep){
            throw new Error('Nome, e-mail e CEP são obrigatórios.');
        }
        const cep = userData.cep.replace('-', '');
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`).then(response => {
        userData.rua = response.data.logradouro;});
        const user = await userRepository.save(userData);
        return user;
    }

    async findAllUsers(){
        const users = await userRepository.findAll();
        return users;
    }  

    async findUserById(id){
        const user = await userRepository.findById(id);
        return user;
    }

    async updateUser(id, userData){
        const user = await userRepository.update(id, userData);
        return user;
    }

    async deleteUser(id){
        const user = await userRepository.delete(id);
        return user;
    }
}

module.exports = new UserService();