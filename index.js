const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let tareas = [];

app.post("/tareas", (req, res) => {
    const { descripcion, completada } = req.body;
    const tarea = { descripcion, completada };
    tareas.push(tarea);
    res.status(201).send('Tarea registrada exitosamente.');
});

app.get("/tareas", (req, res) => {
    res.json(tareas);
});

app.post("/total", (req, res) => {
    const total = tareas.length;
    res.json({ total });
});


app.get("/total", (req, res) => {
    const total = tareas.length;
    res.json({ total });
});

app.listen(3000, () => console.log("Servidor creado en el puerto 3000"));