
# Node CRUD Simple

Este proyecto es un ejemplo básico de cómo crear un CRUD (Create, Read, Update, Delete) utilizando **Node.js**, **Express** y **Mongoose** para trabajar con bases de datos MongoDB. Es ideal para quienes están comenzando a trabajar con APIs REST.

---

## 🚀 Características

- Configuración básica de un servidor con Express y conexión a MongoDB.
- Operaciones CRUD completas:
  - **Create**: Añadir nuevos datos.
  - **Read**: Obtener datos individuales o en lista.
  - **Update**: Modificar datos existentes.
  - **Delete**: Eliminar datos.
- Validaciones:
  - El **password** debe ser único.
  - Los **IDs** deben ser válidos de tipo `ObjectId` de Mongoose.
- Uso de JSON como formato de datos.
- Ejemplos claros y descargables para Postman.

---

## 📋 Requisitos

Antes de iniciar, asegúrate de tener instalado:

- **Node.js** (v14 o superior recomendado).
- **npm** (incluido con Node.js).
- **Postman** (o cualquier herramienta para probar APIs REST).
- **MongoDB** (local o en la nube).

---

## ⚙️ Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/GustavoGBlanco/nodecrudsimple.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd nodecrudsimple
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Configura el archivo `.env` en la raíz del proyecto. Puedes usar el archivo `sampleEnv` como referencia:

   ```dotenv
   PORT=3000
   DATABASE_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/?retryWrites=true&w=majority&appName=<appName>
   ```

   Reemplaza:
   - `<username>` con el nombre de usuario de tu MongoDB.
   - `<password>` con tu contraseña de MongoDB.
   - `<appName>` con el nombre de tu aplicación (esto aparece después de `appName=`).

   **Nota:** No incluyas credenciales sensibles directamente en tu código. Usa herramientas como [dotenv-safe](https://www.npmjs.com/package/dotenv-safe) para manejar variables de entorno de forma segura.

---

## ▶️ Uso

1. Asegúrate de que tu base de datos MongoDB esté funcionando y que la URI esté configurada correctamente en el archivo `.env`.

2. Inicia el servidor en modo desarrollo:

   ```bash
   npm run dev
   ```

   El servidor estará disponible en `http://localhost:<PORT>`, donde `<PORT>` es el puerto configurado en el archivo `.env`. Si no has especificado un puerto, por defecto será `3002`.

   **Ejemplo:**
   - Si en tu archivo `.env` tienes `PORT=3000`, la API estará disponible en `http://localhost:3000`.
   - Si no has configurado `PORT`, la API estará disponible en `http://localhost:3002`.

3. Usa herramientas como **Postman** para interactuar con los endpoints de la API.

---

## 🛠️ Endpoints y Ejemplos en Postman

### Endpoints Disponibles

| Método | Endpoint      | Descripción                  |
|--------|---------------|------------------------------|
| GET    | `/users`      | Obtiene todos los usuarios.  |
| GET    | `/users/:id`  | Obtiene un usuario por ID.   |
| POST   | `/users`      | Crea un nuevo usuario.       |
| PUT    | `/users/:id`  | Actualiza un usuario.        |
| DELETE | `/users/:id`  | Elimina un usuario.          |

### Ejemplo de Propiedades de Usuario

```json
{
  "name": "Juan Pérez",
  "email": "juan.perez@example.com",
  "password": "unico123"
}
```

### Casos de Uso y Ejemplos de Respuestas

| Acción                          | Descripción                                              | Entrada de Ejemplo                                                     | Respuesta Esperada                                                       |
|----------------------------------|----------------------------------------------------------|------------------------------------------------------------------------|---------------------------------------------------------------------------|
| **POST `/users`**: Crear usuario | Crear un nuevo usuario                                   | ```json {"name": "Ana García", "email": "ana.garcia@example.com", "password": "claveunica"} ``` | ```json {"message": "Usuario creado exitosamente", "data": {"_id": "648a12bcf34e2b001f2c3d45", "name": "Ana García", "email": "ana.garcia@example.com"}}``` |
| **POST `/users`**: Error email duplicado | Intentar crear usuario con un email ya existente       | ```json {"name": "Pedro López", "email": "ana.garcia@example.com", "password": "nuevoclave"} ``` | ```json {"error": "El email ya está en uso."}``` |
| **GET `/users/:id`**: Obtener usuario por ID | Obtener un usuario con un ID válido de `ObjectId`        | ```GET /users/648a12bcf34e2b001f2c3d45```                              | ```json {"_id": "648a12bcf34e2b001f2c3d45", "name": "Ana García", "email": "ana.garcia@example.com"} ``` |
| **GET `/users/:id`**: Error por ID inválido | Intentar buscar un usuario con un ID no válido (`ObjectId` incorrecto) | ```GET /users/123```                                                   | ```json {"error": "El ID proporcionado no es válido."}``` |
| **PUT `/users/:id`**: Actualizar usuario | Actualizar un usuario existente                          | ```json {"name": "Pedro López", "email": "pedro.lopez@example.com", "password": "nuevo123"} ``` | ```json {"message": "Usuario actualizado exitosamente", "data": {"_id": "648a12bcf34e2b001f2c3d45", "name": "Pedro López", "email": "pedro.lopez@example.com"}}``` |
| **PUT `/users/:id`**: Error ID no encontrado | Intentar actualizar un usuario con un ID inexistente     | ```json {"name": "Carlos Pérez", "email": "carlos.perez@example.com", "password": "clave123"} ``` | ```json {"error": "Usuario no encontrado."}``` |
| **DELETE `/users/:id`**: Eliminar usuario | Eliminar un usuario con un ID válido                     | ```DELETE /users/648a12bcf34e2b001f2c3d45```                          | ```json {"message": "Usuario eliminado exitosamente"} ``` |
| **DELETE `/users/:id`**: Error ID no encontrado | Intentar eliminar un usuario con un ID inexistente      | ```DELETE /users/123```                                               | ```json {"error": "El ID proporcionado no es válido."}```|

---

### Colección de Postman

Puedes descargar la colección preconfigurada para probar todos los endpoints, incluidos los casos de error:

[Descargar Node CRUD Simple.postman_collection.json](./Node%20CRUD%20Simple.postman_collection.json)

1. **Importar la colección en Postman**:
   - Abre Postman y haz clic en **Importar**.
   - Selecciona el archivo descargado.
   - La colección incluye ejemplos para crear, leer, actualizar y eliminar usuarios, así como ejemplos de errores.

---

## 🌱 Cómo Personalizar

Puedes extender esta aplicación para incluir:

- Validaciones adicionales para los campos usando **Joi** o **Validator.js**.
- Autenticación con **JWT** o **OAuth2**.
- Agregar roles y permisos para usuarios.
- Manejo avanzado de errores y logs.

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas o mejoras, abre un **issue** o envía un **pull request**.

1. Haz un fork del proyecto.
2. Crea una rama para tu funcionalidad (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz un commit (`git commit -m "Añadir nueva funcionalidad"`).
4. Haz un push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

---

## 📜 Licencia

Este proyecto está bajo la licencia [MIT](LICENSE).

---

## 📞 Contacto

Si tienes preguntas o necesitas ayuda, puedes contactarme en:

- GitHub: [GustavoGBlanco](https://github.com/GustavoGBlanco)
- Email: **[tu-email@example.com]**
