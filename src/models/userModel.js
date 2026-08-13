const db = require("../database/connection");

async function getUsers() {
    const [rows] = await db.query("SELECT * FROM users ORDER BY id");
    return rows;
};

async function createUser(nome, email) {
    const [result] = await db.query(
        "INSERT INTO users (nome, email) VALUES (?, ?)",
        [nome, email]
    );
    const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [result.insertId]);
    return rows[0];
};

async function updateUser(id, nome, email) {
    await db.query(
        "UPDATE users SET nome = ?, email = ? WHERE id = ?",
        [nome, email, id]
    );
    const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0];
};

async function deleteUser(id) {
    await db.query("DELETE FROM users WHERE id = ?", [id]);
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};