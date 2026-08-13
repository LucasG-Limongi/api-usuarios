const userModel = require("../models/userModel");

async function listarUsuarios(req, res) {
    const users = await userModel.getUsers();
    return res.json(users);
};

async function criarUsuario(req, res) {
    const { nome, email } = req.body;
    const user = await userModel.createUser(
        nome,
        email
    );
    return res.status(201).json(user);
};

async function atualizarUsuario(req, res) {
    const { id, nome, email } = req.body;
    const user = await userModel.updateUser(
        id,
        nome,
        email
    );
    return res.status(200).json(user);
};

async function removerUsuario(req, res) {
    const { id } = req.body;
    const user = await userModel.deleteUser(id);
    return res.status(200);
}

module.exports = {
    listarUsuarios,
    criarUsuario,
    atualizarUsuario,
    removerUsuario
};