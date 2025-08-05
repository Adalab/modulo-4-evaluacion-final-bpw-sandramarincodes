
# Simpsons API 🍩


Este es un proyecto de API REST basado en el universo de **Los Simpson**. Permite consultar frases de la serie, filtrarlas por personaje o capítulo, y realizar operaciones CRUD (crear, leer, actualizar, eliminar).  
Está desarrollado con **Node.js**, **Express** y **MySQL**, e incluye una interfaz web estática construida con **HTML**, **CSS** y **Javascript**.


## Cómo arrancar el proyecto localmente

Clona el proyecto

```bash
  git clone https://github.com/Adalab/modulo-4-evaluacion-final-bpw-sandramarincodes.git
```

Instala las dependencias

```bash
  npm install
```
Crea un archivo .env en la raíz del proyecto con tus credenciales de base de datos:
```bash
  DB_HOST=tu_host
  DB_USER=tu_usuario
  DB_PASSWORD=tu_contraseña
  DB_NAME=tu_base_de_datos
  DB_PORT=tu_puerto

```

Inicia el servidor
```bash
  npm run start
```


## Demo

Puedes ver la demo del proyecto aquí:
https://simpsons-api.onrender.com
## Tecnologías

- Node.js – Entorno de ejecución JavaScript.
- Express.js – Framework para crear APIs con Node.
- MySQL – Base de datos relacional.
- JavaScript (Vanilla) – Para manejar la lógica de la interfaz y las peticiones a la API.
- HTML + CSS – Interfaz visual y estilos.
- dotenv – Para gestionar variables de entorno.
- Render + Aiven – Servicios usados para desplegar la API y la base de datos.


## Features
- Ver frases con información del personaje y capítulo.
- Buscar frases por ID, personaje o capítulo desde la interfaz web.
- Crear nuevas frases desde el backend.
- Editar frases existentes mediante peticiones API.
- Eliminar frases de la base de datos.
- Ver la lista completa de personajes y capítulos.
- Interfaz web interactiva con botones y selectores para consultar datos de forma dinámica.
- Peticiones a la API usando fetch.




## Endpoints
Todos los endpoints devuelven datos en formato JSON.

**GET /frases**  
Devuelve todas las frases, incluyendo información del personaje y el capítulo.

**GET /frases/:id**  
Devuelve una frase concreta según su ID.

**POST /frases**  
Crea una nueva frase.  
**Cuerpo esperado (JSON):**
```json
{
  "texto": "string",
  "marca_tiempo": "HH:MM:SS",
  "descripcion": "string",
  "personaje_id": número,
  "capitulo_id": número
}
```
**PUT /frases/:id**  
Actualiza una frase existente por su ID.

**DELETE /frases/:id**
Elimina una frase según su ID.

**GET /frases/personaje/:personaje_id**
Devuelve todas las frases de un personaje específico.

**GET /frases/capitulo/:capitulo_id**
Devuelve todas las frases de un capítulo específico.

**GET /personajes**
Devuelve todos los personajes registrados.

**GET /capitulos**
Devuelve todos los capítulos con su información.
