docker image rm be-react-compose-test
docker build -t be-react-compose-test .
docker run --rm -dp 8000:8000 --name backend be-react-compose-test
