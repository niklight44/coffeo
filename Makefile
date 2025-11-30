local_up:
	docker network create -d bridge local_backend_network || true
	docker compose \
	-f deployments/backend/coffeo/local_coffeo.yml \
	--env-file deployments/backend/.env.local up


local_build:
	docker compose \
	-f deployments/backend/coffeo/local_coffeo.yml \
	--env-file deployments/backend/.env.local build --no-cache
