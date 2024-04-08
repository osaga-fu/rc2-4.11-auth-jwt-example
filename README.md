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

## Referencias

- https://medium.com/spring-boot/spring-boot-3-spring-security-6-jwt-authentication-authorization-98702d6313a5
- https://github.com/FactoriaF5Code/rc2-4.11-auth-jwt-example