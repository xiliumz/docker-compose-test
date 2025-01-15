docker image rm be-hono
docker build -t be-hono .
docker image ls
docker run --rm --name be be-hono
