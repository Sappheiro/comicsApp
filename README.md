# A comic book inventory app (Android + backend)

this is going to be a comic book database android app for both digital (.cbr, .cbz, ,pdf) and scanned comics (from image/camera), added to their respective inventory and containerized based on publisher, story arc, author, etc...

- `infra/` – Docker Compose for Postgres, Redis, MinIO (S3-compatible), and Caddy reverse proxy.
- `server/` – NestJS API (TypeScript).
- `mobile/` – Android app (Kotlin, Jetpack Compose) — coming Day 3.

### Quick Start (Dev)

```
docker compose -f infra/docker-compose.dev.yml --env-file infra/.env.dev up -d
```
---

### API

- API direct
```
curl -s http://localhost:3000/health
```

- API through Caddy
```
curl -s http://localhost:8080/api/health
```

### MinIO console login

MinIO Console: ```http://localhost:9001```
```Login: minioadmin / minioadmin```

### ...

