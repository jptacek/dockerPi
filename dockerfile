FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080

CMD [ "npm", "start" ]
#RUN useradd --user-group --create-home --shell /bin/false app &&\
#  npm install --global npm@3.7.5

#ENV HOME=/home/app

#USER app
#WORKDIR $HOME/pi
