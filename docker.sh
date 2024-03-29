#! /bin/bash
echo "docker react front end deployment"
echo "clearing previous builds"
docker stop img_client_oct_2023
docker rm img_client_oct_2023
docker rmi img_client_oct_2023
echo "building image"
docker build -t  img_client_oct_2023 .
echo "image build successfull"
echo "running image"
docker run -d --name  img_client_oct_2023 -p 3111:3000 img_client_oct_2023 
echo "container ran at port 3111"
echo "exit"
