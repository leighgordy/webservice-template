# webservice-template
A basic web service template for use in my future projects. Might be pants though as its my first JS webservice

## Commands
`npm run build` - Build the application using webpack  
`npm run serve` - Serve the webservice on port 3000  
`npm run test`- Run jest tests once  
`npm run testWatch`- Run jest tests in watch mode  
`npm run lint`- Run Eslint with AirBnB base rules  
`npm run coverage`- Run Jest coverage  

## Docker Commands
`sudo docker build -t webservice-template .` -  Build docker image  
`sudo docker run -p 3000:3000 webservice-template` -  run docker image  
`sudo docker ps` -  list docker instances  
`sudo docker stop {CONTAINER ID}` - stop docker instance. CONTAINER ID found in docker ps  