const ProdutoService = require('../services/produtoService');

class ProdutoController {
    async save(req, res) {
        try {
            const produtoData = req.body;
            const produto = await ProdutoService.save(produtoData);
            res.status(201).json(produto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findAll(req, res) {
        try {
            const produtos = await ProdutoService.findAll();
            res.status(200).json(produtos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async findById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const produto = await ProdutoService.findById(id);
            if (produto) {
                res.status(200).json(produto);
            } else {
                res.status(404).json({ error: 'Produto não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async update(req, res) {
        try {
            const id = parseInt(req.params.id);
            const produtoData = req.body;
            const produto = await ProdutoService.update(id, produtoData);
            if (produto) {
                res.status(200).json(produto);
            } else {
                res.status(404).json({ error: 'Produto não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async delete(req, res) {
        try {
            const id = parseInt(req.params.id);
            const produto = await ProdutoService.delete(id);
            if (produto) {
                res.status(200).json(produto);
            } else {
                res.status(404).json({ error: 'Produto não encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ProdutoController();