-- Crear base de datos
CREATE DATABASE simpsons_db;

-- Seleccionar la base de datos
USE simpsons_db;

-- Crear tabla personajes
CREATE TABLE personajes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(45) NOT NULL,
  apellido VARCHAR(45),
  ocupacion VARCHAR(70),
  descripcion TEXT
);

-- Crear tabla capitulos
CREATE TABLE capitulos (
  id INT AUTO_INCREMENT PRIMARY KEY, 
  titulo VARCHAR(255) NOT NULL,
  numero_episodio INT,
  temporada INT, 
  fecha_emision DATE,
  sinopsis TEXT
);

-- Crear tabla frases
CREATE TABLE frases (
  id INT AUTO_INCREMENT PRIMARY KEY,
  texto TEXT NOT NULL,
  marca_tiempo TIME,
  descripcion TEXT,
  personaje_id INT NOT NULL,
  capitulo_id INT NOT NULL,
  FOREIGN KEY (personaje_id) REFERENCES personajes(id),
  FOREIGN KEY (capitulo_id) REFERENCES capitulos(id)
);

-- Crear tabla intermedia personajes_capitulos
CREATE TABLE personajes_capitulos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  personaje_id INT NOT NULL,
  capitulo_id INT NOT NULL,
  FOREIGN KEY (personaje_id) REFERENCES personajes(id),
  FOREIGN KEY (capitulo_id) REFERENCES capitulos(id)
);

-- Insertar personajes
INSERT INTO personajes (nombre, apellido, ocupacion, descripcion) VALUES
('Homer', 'Simpson', 'Operario nuclear', 'El patriarca torpe y amante de los donuts.'),
('Bart', 'Simpson', 'Estudiante', 'Niño travieso famoso por ''¡Ay, caramba!''.'),
('Señor Burns', '', 'Dueño planta nuclear', 'El villano avaro que siempre dice ''¡Excelente!''.'),
('Lisa', 'Simpson', 'Estudiante', 'Genio precoz y activista social.'),
('Marge', 'Simpson', 'Ama de casa', 'Madre cariñosa con el característico peinado azul.');

-- Insertar capítulos
INSERT INTO capitulos (titulo, numero_episodio, temporada, fecha_emision, sinopsis) VALUES
('Bart se hace famoso', 12, 5, '1994-02-03', 'Bart grita ''¡Ay, caramba!'' y es famoso un día.'),
('Un pez, dos peces, pez globo, pez azul', 11, 2, '1991-01-24', 'Homer casi muere tras comer pez globo.'),
('Homer y el beisbol', 17, 3, '1992-02-20', 'Equipo de beisbol de la planta con estrellas invitadas.'),
('D''oh Day', 10, 10, '1998-09-21', 'Homer dice ''D''oh!'' en una situación embarazosa.'),
('Yo amo a Lisa', 15, 4, '1993-02-11', 'Lisa regala una tarjeta de San Valentín a Ralph, él se enamora.');

-- Insertar frases
INSERT INTO frases (texto, marca_tiempo, descripcion, personaje_id, capitulo_id) VALUES
('¡Ay, caramba!', '00:05:30', 'La frase clásica sorpresa de Bart.', 2, 1),
('¡D''oh!', '00:06:12', 'Exclamación icónica de Homer tras equivocarse.', 1, 4),
('¡Excelente!', '00:10:45', 'Señor Burns tras lograr algo malévolo.', 3, 1),
('Si alguien me busca, estaré en mi cuarto.', '00:12:03', 'Lisa tras un momento familiar difícil.', 4, 5),
('Muy bien. No me casaré nunca', NULL, 'Lisa resignada en un momento romántico/triste.', 4, 1);

-- Insertar relaciones en la tabla intermedia
INSERT INTO personajes_capitulos (personaje_id, capitulo_id) VALUES
(1, 1),
(2, 1),
(4, 5),
(3, 1),
(4, 1);