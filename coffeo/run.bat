@echo off

REM Run Backend Services
cd backend
docker-compose up -d

REM Run Frontend Services
cd ..\frontend
npm run dev
