# Store App

Client: [React](https://reactjs.org/) + [Material-UI](https://mui.com/)

Server: [Express](https://expressjs.com/)

DB: MongoDB Docker [Image](https://hub.docker.com/_/mongo)

## Status
This project is currently in development.

## Installation and Setup Instructions

### You will need [Node.js](https://nodejs.org/) installed globally on your machine:

### Clone down this repository:

`git clone https://github.com/eugenekostin/store.git`

### Installation (`cd` into the new folder and type):

Downloading and installing Server packages: `npm install`

Downloading and installing Client packages: `npm run client:install`

Build Client: `npm run client:build`

Start Server in Production mode: `npm start`

### MongoDB Docker-compose file config:

```
db:
  image: mongo
  container_name: db
  volumes:
    - ./data:/data/db
  ports:
    - 27017:27017
  restart: unless-stopped
```

### MongoDB Shell comand:

`docker run --name db-test -d  -p 27017:27017 -v /data:/data/db --restart unless-stopped mongo`

### To Visit App in your browser:

`localhost:3000`
