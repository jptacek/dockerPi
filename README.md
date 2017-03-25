# Docker Pi #
This is a sample Docker application to calculate Pi using a Monte Carlo method.
This sample has several steps along the way. You can explore the steps
and look at the `README.md` for comamnds to run.

Obviously, change the `jptacek` references to your own Docker username.

1. `git checkout step1`
2. `git checkout step2`
3. `git checkout step3`
3. `git checkout step4`

## Step 4 ##
### Deploy to Docker Hub ###
* change port to 80
* get rid of log file

Create a new image
`docker build -t jptacek/dockerpi4 .`

Tag file
`docker tag [id] jptacek/dockerpi4:latest`

and for windows
`docker push jptacek/dockerpi4`

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
