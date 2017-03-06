## Step 3 ##
### External mount ###
Create a new image
`docker build -t jptacek/dockerpi3 .`

Run image with external volume
`docker run -p 1234:3000 -v /home/john/dlog:/log jptacek/dockerpi3`

and for windows
`docker run -p 1234:3000 -v c:/dlog:/log jptacek/dockerpi3`

## Step 2 ##
### Monte Carlo Pi app ###
Create a new image
`docker build -t jptacek/dockerpi2 .`

Run image
`docker run -p 1234:3000 jptacek/dockerpi2`

Stop executing image
`docker stop <id>`

## Step 1 ##
### Build the image and execute it ###

Create image 
`docker build -t jptacek/dockerpi .`

Run image
`docker run -p 1234:3000 jptacek/dockerpi`

Stop executing image
`docker stop <id>`