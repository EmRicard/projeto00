const Produto = require('../models/produtoModel');

const produtos = [];
let currentID = 1;

class ProdutoRepository {
    save(produtoData) {
        const produto = new Produto(currentID++, produtoData.descricao, produtoData.preco);
        produtos.push(produto);
        return produto;
    }

    findAll() {
        return produtos;
    }

    findById(id) {
        return produtos.find(produto => produto.id === id);
    }

    update(id, produtoData) {
        const produto = this.findById(id);
        if (produto) {
            produto.descricao = produtoData.descricao;
            produto.preco = produtoData.preco;
            return produto;
        }
        return null;
    }

    delete(id) {
        const index = produtos.findIndex(produto => produto.id === id);
        if (index !== -1) {
            return produtos.splice(index, 1)[0];
        }
        return null;
    }   
}

module.exports = new ProdutoRepository();

