//Imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql2 = require("mysql2/promise");
const port = process.env.PORT || 4000;

//Crear y configurar el Servidor
const server = express();
server.use(cors());
server.use(express.json());
server.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});

//Conectarse a MYSQL
const getConnection = async () => {
  return await mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  });
};

//Endpoints

server.get("/frases", async (req, res) => {
  try {
    const conn = await getConnection();
    const [result] = await conn.query(`
      SELECT frases.texto,
             personajes.nombre AS personaje,
             personajes.apellido,
             personajes.ocupacion,
             personajes.descripcion,
             capitulos.titulo AS capitulo
      FROM frases
      JOIN personajes ON frases.personaje_id = personajes.id
      JOIN capitulos ON frases.capitulo_id = capitulos.id
    `);

    await conn.end();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener frases." });
  }
});

//Obtener una frase específica

server.get("/frases/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const conn = await getConnection();
    const [results] = await conn.query("SELECT * FROM frases WHERE id = ?", [
      id,
    ]);
    await conn.end();

    if (results.length === 0) {
      return res.status(404).json({
        error: "Frase no encontrada",
      });
    }
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//Actualizar una frase existente
server.put("/frases/:id", async (req, res) => {
  const id = req.params.id;
  const { texto, marca_tiempo, descripcion, personaje_id, capitulo_id } =
    req.body;

  try {
    const conn = await getConnection();
    const [results] = await conn.query(
      "UPDATE frases SET texto = ?, marca_tiempo = ?, descripcion = ?, personaje_id = ?, capitulo_id = ? WHERE id = ?",
      [texto, marca_tiempo, descripcion, personaje_id, capitulo_id, id]
    );
    await conn.end();

    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
