const userModel = require("../models/userModel");

async function listar(req, res) {
    const users = await userModel.getUsers();
    return res.json(users);
};

async function criar(req, res) {
    const { nome, email } = req.body;
    const user = await userModel.createUser(
        nome,
        email
    );
    return res.status(201).json(user);
};

async function atualizar(req, res) {
    const { id, nome, email } = req.body;
    const user = await userModel.updateUser(
        id,
        nome,
        email
    );
    return res.json(user);
};

async function remover(req, res) {
    const { id } = req.body;
    const user = await userModel.deleteUser(id);
    return res.status(200);
}

module.exports = {
    listar,
    criar,
    atualizar,
    remover
};