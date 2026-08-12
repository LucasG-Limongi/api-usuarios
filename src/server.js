const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", userRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "API funcionando!"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Servidor iniciado");
});