const db = require("../database/connection");

async function getUsers() {
    const result = await db.query( "SELECT * FROM users ORDER BY id");
    return result.rows;
}

async function createUser(nome, email) {
    const result = await db.query(`INSERT INTO users(nome,email) VALUES($1,$2) RETURNING *`, [nome, email]);
    return result.rows[0];
}


async function updateUser(id, nome, email) {
    const result = await db.query(
        `UPDATE users</span><br></div><div><span attribution="{&quot;id&quot;:&quot;E64C3D4F-5E12-4514-AD9B-893A6FAFD00C&quot;,&quot;name&quot;:&quot;Copilot&quot;,&quot;oid&quot;:&quot;E64C3D4F-5E12-4514-AD9B-893A6FAFD00C&quot;,&quot;timestamp&quot;:1786528800000,&quot;dataSource&quot;:0}"> SET nome=$1,</span><br></div><div><span attribution="{&quot;id&quot;:&quot;E64C3D4F-5E12-4514-AD9B-893A6FAFD00C&quot;,&quot;name&quot;:&quot;Copilot&quot;,&quot;oid&quot;:&quot;E64C3D4F-5E12-4514-AD9B-893A6FAFD00C&quot;,&quot;timestamp&quot;:1786528800000,&quot;dataSource&quot;:0}"> email=$2</span><br></div><div><span attribution="{&quot;id&quot;:&quot;E64C3D4F-5E12-4514-AD9B-893A6FAFD00C&quot;,&quot;name&quot;:&quot;Copilot&quot;,&quot;oid&quot;:&quot;E64C3D4F-5E12-4514-AD9B-893A6FAFD00C&quot;,&quot;timestamp&quot;:1786528800000,&quot;dataSource&quot;:0}"> WHERE id=$3</span><br></div><div><span attribution="{&quot;id&quot;:&quot;E64C3D4F-5E12-4514-AD9B-893A6FAFD00C&quot;,&quot;name&quot;:&quot;Copilot&quot;,&quot;oid&quot;:&quot;E64C3D4F-5E12-4514-AD9B-893A6FAFD00C&quot;,&quot;timestamp&quot;:1786528800000,&quot;dataSource&quot;:0}"> RETURNING *`, [nome, email, id]
    );
    return result.rows[0];
}

async function deleteUser(id) {
    await db.query(`DELETE FROM users WHERE id=$1`, [id]);
}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};