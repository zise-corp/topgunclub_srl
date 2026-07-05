#!/bin/bash
set -e

BRANCH=${1:-main}

echo "🚀 Iniciando despliegue de TopGun Club..."
echo "📌 Rama: $BRANCH"

if [ ! -f .env.local ]; then
    echo "❌ ERROR: .env.local no existe"
    exit 1
fi

echo "📥 Actualizando código..."
git fetch origin
git checkout $BRANCH
git pull origin $BRANCH

echo "🛑 Deteniendo contenedor..."
docker-compose down

echo " Construyendo nueva imagen..."
docker-compose build --no-cache

echo "▶️ Iniciando servicios..."
docker-compose up -d

echo "🧹 Limpiando recursos innecesarios (caché, contenedores detenidos)..."
docker system prune -f

echo "✅ Despliegue completado"
docker-compose ps