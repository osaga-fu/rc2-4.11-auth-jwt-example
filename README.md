# Spring 6 Security Example

## Frontend

```
cd frontend
npm install 
npm run dev
```

## Backend (port 8080)

Antes de lanzar el backend hay que proveer una base de datos

```
url=jdbc:postgresql://localhost:5432/dinosaur_db
username=user
password=pass
```

Una vez tengamos la base de datos:

```
mvn spring-boot:run
```

## API

El backend implementa una API sin seguridad:

| Endpoint           | Comentario                       |
|--------------------|----------------------------------|
| GET /greeting      | Devuelve un saludo               |
| GET /api/dinosaurs | Devuelve la lista de dinosaurios |

## Seguridad

Las diferentes ramas del repositorio contienen implementaciones del login/logout

| Rama      | Método         |
|-----------|----------------|
| sec/basic | Basic Auth     |
| sec/jwt   | JSON Web Token |
