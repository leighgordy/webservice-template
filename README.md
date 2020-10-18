# webservice-template
A basic web service template for use in my future projects. Might be pants though as its my first JS webservice

## Commands
### JS Commands
`npm run build` - Build the application using webpack  
`npm run serve` - Serve the webservice on port 3000  
`npm run test`- Run jest tests once  
`npm run testWatch`- Run jest tests in watch mode  
`npm run lint`- Run Eslint with AirBnB base rules  
`npm run coverage`- Run Jest coverage  

### Docker Commands
`sudo docker build -t webservice-template .` -  Build docker image  
`sudo docker run -p 3000:3000 webservice-template` -  run docker image  
`sudo docker ps` -  list docker instances  
`sudo docker stop {CONTAINER ID}` - stop docker instance. CONTAINER ID found in docker ps  
`sudo docker images` -   List docker images.  
`sudo docker image rm {CONTAINER ID}` -   remove docker image. 

### Docker Compose Commands
`sudo docker-compose up` - Load docker compose   
`sudo docker-compose rm` - Remove docker compose

### AWS Commands
`aws dynamodb list-tables --endpoint-url http://localhost:8000 --region us-west-2` - List Tables

## Useful Links
###Docker
* [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/)
* [Docker Compose Instructions](https://docs.docker.com/compose/)
###AWS
* [Install instructions for Amazon CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-linux.html)
* [Amazon CLI Usage Instructions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tools.CLI.html#Tools.CLI.DownloadingAndRunning)
* [Amazon DynamoDB JS Instructions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.JavaScript.html)

