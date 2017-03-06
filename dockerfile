FROM node:latest

MAINTAINER jptacek@gmail.com

ENV NOD_ENV=production
ENV PORT=3000

# Create app directory
RUN mkdir -p /usr/src/app

#CreateWorkdIr
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE $PORT

ENTRYPOINT [ "npm", "start" ]

