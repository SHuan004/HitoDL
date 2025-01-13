# Hito 4 - Aplicación Backend con Node, Express y Sequelize

Este proyecto implementa una aplicación **Node.js** y **Express** usando **Sequelize** (con `sequelize-typescript`) para interactuar con una base de datos **PostgreSQL**. A continuación, encontrarás los pasos necesarios para iniciar y probar el proyecto, así como una explicación de cómo cumple los requisitos solicitados.

---

## Requisitos cubiertos

1. **Patrón MVC**

   - **Modelos** en la carpeta [`/schemas`](./src/schemas) (usando `sequelize-typescript`).
   - **Controladores** en [`/controllers`](./src/controllers).
   - **Rutas** en [`/routes`](./src/routes).
   - **Servicios** en [`/services`](./src/services).

   Esta arquitectura separa la lógica de negocio (servicios) y la lógica de presentación (controladores y rutas), cumpliendo con el patrón MVC solicitado.

2. **Uso de Sequelize**

   - En [`sequelize.ts`](./src/config/sequelize.ts) se configura la conexión a la base de datos mediante Sequelize, incluyendo los modelos `User` y `Post`.
   - Se emplean decoradores de `sequelize-typescript` en [`user.model.ts`](./src/schemas/user.model.ts) y [`post.model.ts`](./src/schemas/post.model.ts) para definir los esquemas.

3. **CRUD y pruebas con Postman/ThunderClient**
   - Existen endpoints para crear y obtener **Usuarios** y **Posts**.
   - Puedes probarlos usando **Postman** o **ThunderClient** para verificar su correcto funcionamiento.

---

## Estructura de Carpetas

La estructura general del proyecto es la siguiente:

```bash
src
 ├── config
 │   └── sequelize.ts           # Configuración de Sequelize
 ├── controllers
 │   ├── post.controller.ts     # Controlador para Posts
 │   └── user.controller.ts     # Controlador para Users
 ├── interfaces
 │   ├── post.interface.ts
 │   └── user.interface.ts
 ├── routes
 │   ├── post.route.ts          # Rutas para Posts
 │   └── user.route.ts          # Rutas para Users
 ├── schemas
 │   ├── post.model.ts          # Modelo para Posts
 │   └── user.model.ts          # Modelo para Users
 ├── services
 │   ├── post.service.ts        # Lógica de Posts
 │   └── user.service.ts        # Lógica de Users
 ├── app.ts                     # Configuración inicial de la aplicación Express
 └── index.ts                   # Punto de entrada principal (levanta el servidor)
```

## Pasos para Iniciar el Proyecto

A continuación, se muestra cómo levantar la base de datos con Docker y ejecutar la aplicación:

1. **Clonar este repositorio**
   ```bash
   git clone https://github.com/SHuan004/HitoDL.git
   cd HitoDL
   ```
2. **Crear y levantar la base de datos con Docker**

En la raíz del proyecto, crea (o asegúrate de tener) un archivo `docker-compose.yml` con el siguiente contenido:

```yaml
version: "3.8"
services:
  db:
    image: postgres:15
    container_name: postgres-db_HitoSH
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: root
      POSTGRES_DB: db_HitoSH
    ports:
      - "5436:5432"
    volumes:
      - ./postgres-data:/var/lib/postgresql/data
```

Luego, ejecuta:

```bash
docker-compose up -d
```

3. **Instalar dependencias**

```bash
npm install
```

4. **Iniciar la aplicación**

```bash
npm run dev
```

## Probar la Aplicación

Puedes usar Postman o ThunderClient para probar los endpoints. Estos son algunos ejemplos de rutas:

### Usuarios

- **GET** `/api/v1/users`: Obtener todos los usuarios.
- **GET** `/api/v1/users/:id`: Obtener un usuario por su _id_.
- **POST** `/api/v1/users`: Crear un nuevo usuario.

**Body (JSON):**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

### Posts:

- **GET** `/api/v1/posts`: Obtener todos los posts (incluye información del autor).
- **POST** `/api/v1/posts`: Crear un nuevo post.

**Body (JSON):**

```json
{
  "title": "Mi primer post",
  "content": "Contenido del post",
  "userId": "uuid-del-usuario"
}
```

Verás respuestas en formato JSON y los códigos de estado adecuados (por ejemplo, 201 Created, 404 Not Found, etc.).

## ¿Por qué cumple el Hito 4?

### Patrón MVC

- **Modelos** (en `/schemas`)
- **Controladores** (en `/controllers`)
- **Rutas** (en `/routes`)
- **Servicios** (en `/services`)

### Sequelize

- Configuración centralizada en `sequelize.ts`.
- Modelos declarados con _sequelize-typescript_.

### Pruebas con ThunderClient/Postman

- Endpoints CRUD listos para su uso.
- Respuestas JSON y códigos de estado.
- Imagenes de las pruebas en el siguiente link.

```link
https://drive.google.com/drive/folders/1tHry8gJFCcQx58aoaHAMADFrAXTqOeGM?usp=sharing
```

Con esto, satisfacemos los 3 requerimientos principales solicitados en el Hito 4.
