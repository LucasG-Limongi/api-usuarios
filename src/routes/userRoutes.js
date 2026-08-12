const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/users", userController.listar);

router.post("/users", userController.criar);

router.put("/users/:id", userController.atualizar);

router.delete("/users/:id", userController.remover);

module.exports = router;