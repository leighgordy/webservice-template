# webservice-template
A basic web service template for use in my future projects.

## Local Setup
Install the following libraries on your target OS.
* [Docker](https://docs.docker.com/engine/install/)
* [DockerCompose](https://docs.docker.com/compose/install/)
* [Node](https://nodejs.org/en/download/)
* [Amazon CLI](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tools.CLI.html#Tools.CLI.DownloadingAndRunning)

Open two separate terminals. Within terminal one call ``sudo docker-compose up``. Within terminal two call ``npm run serve``. This will setup will allow you to edit the webservice live.

_You can also uncomment the code within docker-compose.yml it you want to run the production version of the app._ You don't need to call ``npm run serve`` if you do that.

Once running within your browser call one of the following endpoints
* [http://localhost:3000/webservice-template/v1/](http://localhost:3000/webservice-template/v1/)
* [http://localhost:3000/webservice-template/v1/ping](http://localhost:3000/webservice-template/v1/ping)
## Commands
### JS Commands
`npm run build` - Build the application using webpack  
`npm run serve` - Serve the webservice on port 3000  
`npm run test`- Run jest tests once  
`npm run testWatch`- Run jest tests in watch mode  
`npm run lint`- Run Eslint with AirBnB base rules  
`npm run coverage`- Run jest coverage  

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
### Docker
* [Dockerfile Reference](https://docs.docker.com/engine/reference/builder/)
* [Docker Compose Instructions](https://docs.docker.com/compose/)
### AWS
* [Install instructions for Amazon CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-linux.html)
* [Amazon CLI Usage Instructions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tools.CLI.html#Tools.CLI.DownloadingAndRunning)
* [Amazon DynamoDB JS Instructions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.JavaScript.html)

## Issues
* **This is my first attempt at a JS AWS service!** There will be some newbie mistakes. I'll list them here for clarity! I'll strike them off as I fix.
    * ~~didn't realise there was a AWS promise library, so i wrote my~~
    * Database DAO should only contain extra methods and direct access to dynamodb clients. Most methods are redundant. Still writing like im using hibernate! 
