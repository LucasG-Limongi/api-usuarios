const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/users", userController.listarUsuarios);
router.post("/users", userController.criarUsuario);
router.put("/users/:id", userController.atualizarUsuario);
router.delete("/users/:id", userController.removerUsuario);

module.exports = router;