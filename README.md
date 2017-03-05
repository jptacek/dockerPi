## Step 2 ##
### Monte Carlo Pi app ###

## Step 1 ##
### Build the image and execute it ###

Create image 
`docker build -t jptacek/dockerpi .`

Run image
`docker run -p 1234:3000 jptacek/dockerpi`

Stop executing image
`docker stop <id>`