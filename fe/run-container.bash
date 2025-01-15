docker image rm fe-react-compose-test
docker build -t fe-react-compose-test .
docker run --rm -dp 3000:3000 --name frontend fe-react-compose-test
